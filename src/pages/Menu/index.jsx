import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from '../../stores/cart/menu/productsSlice';


const Menu =()=> {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    console.log(products)
    useEffect(()=>{
        dispatch(fetchProducts())
}, [])
    return (
        <div>
            {
                
                products? products.status === 'fulfilled'? <div className='menu-wrapper'>
                    {
                        products.products && products.products.map((product, index)=> {
                            console.log(index, product)
                            return (
                               <div key = {index} className='text-white'>{product.name.name}</div>
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