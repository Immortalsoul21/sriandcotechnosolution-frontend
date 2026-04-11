
const ProductCard = ({ product, onClick }) => (
    <div
      onClick={() => onClick(product)}
      className="group bg-white rounded-lg shadow-lg shadow-blue-900/5 overflow-hidden
                 hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-300
                 cursor-pointer flex flex-col"
      style={{ height: 'clamp(160px, 30vw, 256px)' }}
    >
      {/* Image area */}
      <div
        className={`relative flex-1 group-hover:flex-[99] transition-all duration-500
                    ${product.bgColor || 'bg-gray-200'} flex items-center justify-center overflow-hidden`}
      >
        {product.badge && (
          <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-purple-600 text-white
                           text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full z-10">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="text-base sm:text-2xl font-bold text-gray-800/20 uppercase tracking-wider">
            {product.name.split(' ')[product.name.split(' ').length - 1]}
          </span>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-0"
        />
      </div>
  
      {/* Name strip */}
      <div className="px-2 sm:px-3 py-1.5 sm:py-3 flex flex-col items-center justify-center
                      transition-all duration-300 group-hover:h-0 group-hover:py-0
                      group-hover:opacity-0 group-hover:pointer-events-none overflow-hidden">
        <h3 className="text-[10px] sm:text-sm font-medium text-gray-800 truncate w-full text-center">
          {product.name}
        </h3>
      </div>
    </div>
  );
  
  export default ProductCard;