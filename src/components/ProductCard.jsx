import { Star } from "lucide-react";

const ProductCard = ({ product, onClick }) => (
    <div
        onClick={() => onClick(product)}
        className="group bg-white rounded-lg shadow-lg shadow-blue-900/5 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-300 cursor-pointer h-64  flex flex-col"
    >
        <div className={`relative h-44 group-hover:h-full transition-all duration-500 ${product.bgColor || 'bg-gray-200'} flex items-center justify-center overflow-hidden`}>
            {product.badge && (
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                    {product.badge}
                </span>
            )}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <span className="text-2xl font-bold text-gray-800/20 uppercase tracking-wider">
                    {product.name.split(' ')[product.name.split(' ').length - 1]}
                </span>
            </div>
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-0"
            />
        </div>
        <div className="p-3 flex-grow flex flex-col items-center justify-center pb-4 transition-all duration-300 group-hover:h-0 group-hover:p-0 group-hover:opacity-0 group-hover:pointer-events-none overflow-hidden">
            <h3 className="text-sm font-medium text-gray-800 mb-1 truncate w-full text-center">{product.name}</h3>
            <div className="flex items-center justify-center">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="ml-1 text-xs text-gray-600 font-medium">{product.rating}</span>
            </div>
        </div>
    </div>
);

export default ProductCard;