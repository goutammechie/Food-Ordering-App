const ProductDetailCard= ({product})=>{
    return (
        <div className="p-4 rounded-lg bg-state-50">
            <div className="flex items-center justify-between">
                <h2 className="test-5xl">
                    {product.name}
                </h2>
                <p className="text-3xl text-gray-500">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="text-xl text-black">Rs. {product.price}</div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name} />
            </div>

        </div>
    )
}

export default ProductDetailCard; 