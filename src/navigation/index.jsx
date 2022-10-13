import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import PaymentSuccess from "../pages/PaymentSuccess";
import Register from "../pages/Register";
import { Footer } from "../components/Footer";

import { useSelector } from "react-redux";
import {  cartProducts } from "../stores/cart/cartSlice"
const Navigation=()=>{
        const productsInCart=useSelector(cartProducts);

    return (
        <BrowserRouter>
            <Header cartCount={ productsInCart ? productsInCart.length:0  }/> 
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/PaymentSuccess" element={<PaymentSuccess/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/payment-success" element={<PaymentSuccess/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
}

export default Navigation;




//React Router is a standard library for routing in React. It enables the navigation among views of various components
//  in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
// BrowserRouter is used for doing client side routing with URL segments. You can load a top level component for each 
// route. This helps separate concerns in your app and makes the logic/data flow more clear
// What is routing in react JS?
// In web application, Routing is a process of binding a web URL to a specific resource in the web application. 
// In React, it is binding an URL to a component. React does not support routing natively as it is basically an user interface library.