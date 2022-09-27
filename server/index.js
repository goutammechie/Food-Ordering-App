const express = require("express"); // express is a framework and it help in setting up the server and passing  configurations to it
const bodyParser= require("body-parser"); //It is responsible for parsing the incoming request bodies in a middleware before you handle it.
const cors= require("cors"); //( cross origin resourse sharing) help us to determine which configurations and domains can make call to our server
//CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
const db=require('./db');

const app=express();
const productRouter= require('./routes/productRouter');



var corsOptions={
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// using bodyparser that is used to parse the body to api

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







