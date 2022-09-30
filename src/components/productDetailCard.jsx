import Button from "./elements/Button";
import button from "./elements/Button";

const ProductDetailCard= ({product})=>{
    return (
        <div className="p-4 m-4  rounded-lg bg-gray-200">
            <div className="flex flex-col items-center justify-between">
                <h2 className="test-5xl">
                    {product.name}
                </h2>
                <p className="text-xl text-gray-500">
                    {product.desciption}
                </p>
                
                <div className="flex items-center justify-between">
                    <div className="text-1xl text-black">Rs. {product.price}</div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name} />
            </div>
            <div className="w-full flex items-center justify-center">
                <Button>Add to cart</Button>
            </div>

        </div>
    )
}

export default ProductDetailCard; 