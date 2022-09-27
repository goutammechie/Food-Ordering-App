export const AddProduct = ({ onAddProduct }) => {
    return (
        <div className="flex justify-end">
            <button onClick={onAddProduct} className="bg-amber-600 hover:bg-yellow-300 rounded-full w-10 h-5 flex items-center justify-center text-lg"><span>+</span></button>
        </div>
    )
}