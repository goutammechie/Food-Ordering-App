import React, {useState, useEffect } from "react";  //https://reactjs.org/docs/hooks-effect.html
import { ProductPreviewCard } from "./productPreviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";

export const  ProductsPreview = () =>{

    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 2000, min: 500 },
          items: 2.25
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };




    useEffect(()=>{
        fetch('http://localhost:8080/api/products')
        .then(response=> response.json())
        .then(data=> setProducts(data?.data))  // doubt data?.data
        .then(e => console.log(e))
    },[])

    const onAddProduct=(product)=>{
        dispatch(addToCart(product))  // trigger the state change
    }

    return (
        <div className="container rounded-t-lg text-white mx-auto px-5 w-2/3 bg-black ">
            <h2 className="text-3xl align-center font-mono md:ui-monospace">
                Products
            </h2>
            <Carousel responsive={responsive}>
                {
                    products.length>0 && products.map((product,index)=>{
                        return (
                            <div>
                                <ProductPreviewCard key={index} product={product}  onAddProduct={onAddProduct}/>
                            </div>
                                
                        
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default ProductsPreview;




// What is useEffect and useState in React?
// Image result for usestate useeffect in react.The useState hook is used for storing variables that are
//  part of your application's state and will change as the user interacts with your website. The useEffect
//   hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and 
//   unmounting.
