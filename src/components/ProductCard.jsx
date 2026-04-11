

/**
 * ProductCard Component
 * A reusable card for displaying brief product information with hover effects.
 */
const ProductCard = ({ product, onClick }) => (
    <div
        onClick={() => onClick(product)}
        className="group bg-white rounded-lg shadow-lg shadow-blue-900/5 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-300 cursor-pointer h-64  flex flex-col"
    >
        {/* Top Section: Media and Badge Area */}
        <div className={`relative h-44 group-hover:h-full transition-all duration-500 ${product.bgColor || 'bg-gray-200'} flex items-center justify-center overflow-hidden`}>
            {/* Dynamic Status Badge */}
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
        {/* Bottom Section: Summary Info (Hides on hover to show full image) */}
        <div className="p-3 flex-grow flex flex-col items-center justify-center pb-4 transition-all duration-300 group-hover:h-0 group-hover:p-0 group-hover:opacity-0 group-hover:pointer-events-none overflow-hidden">
            <h3 className="text-sm font-medium text-gray-800 mb-1 truncate w-full text-center">{product.name}</h3>
        </div>
    </div>
);

export default ProductCard;