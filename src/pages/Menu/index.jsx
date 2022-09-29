import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from '../../stores/cart/menu/productsSlice';
import ProductDetailCard from '../../components/productDetailCard';


const Menu =()=> {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    console.log(products)
    useEffect(()=>{
        dispatch(fetchProducts())}, [])
    return (
        <div  className='bg-white'>
            {
                
                products? products.status === 'fulfilled'? <div className='menu-wrapper'>
                    {
                       
                            products.products && products.products[0].products.map((product, index)=> {
                                // console.log(index, product)
                                return (
                                   <ProductDetailCard key={index} product={product} />
                                )
                            })
                            
                    }
                </div>:
                <div>LOADING......</div>:<div>LOADING......</div>
                
            }
        </div>
    )  
}


export default Menu;