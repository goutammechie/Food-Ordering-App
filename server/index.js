const express = require("express"); // express is a framework and it help in setting up the server and passing  configurations to it
const bodyParser= require("body-parser"); //It is responsible for parsing the incoming request bodies in a middleware before you handle it.
const cors= require("cors"); //( cross origin resourse sharing) help us to determine which configurations and domains can make call to our server
//CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
const db=require('./db');

const app=express();
const productRouter= require('./routes/productRouter');
const Order= require('./models/orderModel');


const env=require('dotenv').config({path: '../.env'}); // dotenv module
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



var corsOptions={
    origin: "http://localhost:3000"
}

const calculateOrderAmount = (orderItems) => {
    const initialValue = 0;
    const itemsPrice = orderItems.reduce(
        (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.amount, initialValue
    );
    return itemsPrice * 100;
}



app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// using bodyparser that is used to parse the body to api

app.use(cors(corsOptions));
app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);
// taken from stripe documentation
// Expose a endpoint as a webhook handler for asynchronous events.
// Configure your webhook in the stripe developer dashboard
// https://dashboard.stripe.com/test/webhooks
app.post('/webhook', async (req, res) => {
    let data, eventType;
  
    // Check if webhook signing is configured.
    if (process.env.STRIPE_WEBHOOK_SECRET) {
      // Retrieve the event by verifying the signature using the raw body and secret.
      let event;
      let signature = req.headers['stripe-signature'];
      try {
        event = stripe.webhooks.constructEvent(
          req.rawBody,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed.`);
        return res.sendStatus(400);
      }
      data = event.data;
      eventType = event.type;
    } else {
      // Webhook signing is recommended, but if the secret is not configured in `config.js`,
      // we can retrieve the event data directly from the request body.
      data = req.body.data;
      eventType = req.body.type;
    }
  
    if (eventType === 'payment_intent.succeeded') {
      // Funds have been captured
      // Fulfill any orders, e-mail receipts, etc
      // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)
      console.log('💰 Payment captured!');
    } else if (eventType === 'payment_intent.payment_failed') {
      console.log('❌ Payment failed.');
    }
    res.sendStatus(200);
  });





db.on('error',console.error.bind(console,'Mongodb connection error:'))

app.get("/",(req,res)=>{
    res.json({ message: "Welcome to food ordering!!!"})
})
//The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application.





const PORT = process.env.PORT || 8080; //8080 is a somewhat arbitrary port number chosen because it allows you to experiment with express without root access (elevated privilege).
app.listen(PORT, ()=>{
    console.log(`server is running on the port ${PORT}`)
})

app.use('/api',productRouter);



app.post('/create-payment-intent', async(req, res) => {
    try {
        const { orderItems, shippingAddress, userId } = req.body;

        const totalPrice = calculateOrderAmount(orderItems);
        // const totalPrice=100;
        const taxPrice = 0;
        const shippingPrice = 0;

        const order = new Order({
            orderItems,
            shippingAddress,
            paymentMethod: 'stripe',
            totalPrice,
            taxPrice,
            shippingPrice,
            user: ''
        })

        await order.save();

        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalPrice,
            currency: 'usd'   // change to rupee later
        })

        res.send({
            clientSecret: paymentIntent.client_secret
        })
    } catch(e) {
        res.status(400).json({
            error: {
                message: e.message
            }
        })
    }
})




