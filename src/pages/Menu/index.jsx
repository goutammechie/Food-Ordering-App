import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from '../../stores/cart/menu/productsSlice';
import ProductDetailCard from '../../components/productDetailCard';
import { Tabs } from '../../components/Tabs';

const Menu =()=> {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab]= useState('');
    


    console.log(products)
    useEffect(()=>{
        dispatch(fetchProducts())}, [])
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
                                onTabSwitch={setActiveTab  }
                            />
                        }
                    <div className='flex flex-row mx-3 '>
                        {
                        
                                products.products && products.products[0].products.map((product, index)=> {
                                    // console.log(index, product)
                                    return (
                                    <ProductDetailCard key={index} product={product} />
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