import { AddProduct } from "./AddProduct"

export const ProductPreviewCard = ({ product,onAddProduct }) =>{

    const addProduct=()=>{
        onAddProduct(product)
    }

    return (
        <div  className=" w-80 p-5 scroll-ml-6  rounded  text-white bg-gradient-to-b from-slate-200 to-transparent text-center">
            <img src={product.imageUrl} alt={product.name} />
            <h2 className="pb-2 text-lg ">
                {product.name}
            </h2>
            <p className="mb-2 h-20 line-clamp-4">
                {product.description}
            </p>
            <AddProduct onAddProduct={addProduct}/>
        </div>
    )
}