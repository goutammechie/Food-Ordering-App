import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from '../../stores/cart/menu/productsSlice';


const Menu =()=> {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);

    useEffect(()=>{
        dispatch(fetchProducts())
}, [])
    return (
        <div>
            {
                products.status === 'pending'? <div>LOADING......</div>:
                <div>
                    {
                        products && products.map(product, index)=>{
                            return (
                                <>
                                    <h2>{product}</h2>
                                </>
                            )
                        }
                    }
                </div>
            }
        </div>
    )  
}


export default Menu;