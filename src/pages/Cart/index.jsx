import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
import { cartProducts } from "../../stores/cart/cartSlice";
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
import cart_empty from "../../assets/images/cart_empty.png"
import useTabSwitch from "../../hooks/useTabSwitch";
import { AddressForm } from "../../components/AddressForm";
import { ProductSummary } from "../../components/productSummary";
import { StripeWrapper } from "../../components/PaymentForm";

const Cart =()=> {

    const cart = useSelector(cartProducts);
    const tabs= ['Summary', 'Delivery', 'Payment'];
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');

    if(!cart || cart.length===0)
    {
        return (
            <div className="bg-white h-full font-mono  text-black flex justify-center p-4 text-2xl"  >
                Your cart is Empty
            </div>

        )
    }



    return (
        <div 
            className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            <div className={`tabs ${currentTab!=='Summary'?'hidden':''}`}>
                <ProductSummary/>
            </div>
            <div className={`tabs ${currentTab!=='Delivery'?'hidden':''}`}>
               <AddressForm onTabSwitch={handleTabSwitch}/>
            </div>
            <div className={`tabs ${currentTab!=='Payment'?'hidden':''}`}>
                {/* Payment form */}
                <StripeWrapper/>
            </div>
        </div>
    )  
}


export default Cart;