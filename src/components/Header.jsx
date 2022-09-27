import foody from "../assets/images/foody1.jpg"
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom"
export const Header =() =>{
    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to ="/" className="togglColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={foody} alt="logo"  className="w-30 h-40 object-cover" />
                    </Link>
                  
                </div>
                <div className=" nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="#about"   className="text-xl" >About</Link>
                    

                </div>
                <div className=" flex items-center justify-center space-x-4">
                    <Link to="/cart">
                        <img src={cartIcon} alt="cart"/>
                    </Link>
                    <Link to="/login"  >Login</Link>
                    <Link to="/register">Sign up</Link>
                </div>
            </div>
        </nav>
    )
}


// What is a react router dom?
// React Router DOM is an npm package that enables you to implement dynamic routing in a web app.
//  It allows you to display pages and allow users to navigate them. It is a fully-featured client and 
//  server-side routing library for React