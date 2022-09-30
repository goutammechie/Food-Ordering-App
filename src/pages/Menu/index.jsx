import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from '../../stores/cart/menu/productsSlice';
import ProductDetailCard from '../../components/productDetailCard';
import { Tabs } from '../../components/Tabs';
import { addToCart } from '../../stores/cart/cartSlice';

const Menu =()=> {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab]= useState('');
    const [activeTabIndex, setActiveTabIndex]= useState(0); // doubt
    


    console.log(products)
    useEffect(()=>{
        dispatch(fetchProducts())}, [])
        const onAddProduct=(product)=>{
            dispatch(addToCart(product))  // trigger the state change
        }

        const onTabSwitch = (newActiveTab)=>{
            setActiveTab(newActiveTab);
          
            let categories=products.products.map((product)=> product.name.name);
            let index= categories.findIndex(category => newActiveTab=== category);
            if(index>=0){
                setActiveTabIndex(index);
            }
            else{
                setActiveTabIndex(0);
            }
        }





    return (
        <div  className='bg-white'>
            {
                
                products? products.status === 'fulfilled'? 
                <div className='menu-wrapper'>
                    {
                        console.log(products)
                    }
                   
                        {
                            products.products &&
                            <Tabs
                                list={products.products.map((product)=>product.name.name)}
                                activeTab={activeTab}
                                onTabSwitch={onTabSwitch }
                            />
                        }
                    <div className='flex flex-row mx-3 '>
                        {
                        
                                products.products && products.products[activeTabIndex].products.map((product, index)=> {
                                    // console.log(index, product)
                                    return (
                                    <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct} />
                                    )
                                })
                                
                        }
                    </div>
                </div>:
                <div>LOADING......</div>:<div>LOADING......</div>
                
            }
        </div>
    )  
}


export default Menu;