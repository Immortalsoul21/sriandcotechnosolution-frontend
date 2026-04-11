import { AlertTriangle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const handleBack = () => navigate(-1);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-base mb-4">Product not found</p>
          <button
            onClick={() => navigate('/home')}
            className="text-sky-600 hover:text-sky-700 font-semibold text-sm"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const partNo      = product.partNo || product.productId || `${product.name.replace(/\s+/g, '-').substring(0, 20)}`;
  const mfrNo       = product.mfrNo || product.name;
  const description = product.description || `${product.subcategoryId || product.categoryId} – ${product.name}`;
  const lifecycle   = product.lifecycle || "New Product";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <button
            onClick={handleBack}
            className="flex items-center text-sky-600 hover:text-sky-700 font-semibold text-sm sm:text-base"
          >
            ← Back to Products
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">

          {/* Image */}
          <div>
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-square flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder.png"; }}
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {product.name}
            </h1>

            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">

              <div className="px-3 sm:px-5 py-2.5 sm:py-3">
                <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Part No:</h4>
                <p className="text-xs sm:text-sm text-gray-600">{partNo}</p>
              </div>

              <div className="px-3 sm:px-5 py-2.5 sm:py-3">
                <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Mfr. No:</h4>
                <p className="text-xs sm:text-sm text-gray-600">{mfrNo}</p>
              </div>

              <div className="px-3 sm:px-5 py-2.5 sm:py-3">
                <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1.5">Customer No:</h4>
                <input
                  type="text"
                  placeholder="Customer No"
                  className="w-full border border-gray-300 rounded px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </div>

              <div className="px-3 sm:px-5 py-2.5 sm:py-3">
                <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1">Description:</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>

              <div className="px-3 sm:px-5 py-2.5 sm:py-3">
                <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1.5">Lifecycle:</h4>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-500 text-white text-[8px] sm:text-[9px] font-bold leading-none flex-shrink-0">
                    {lifecycle === "New Product" ? "NEW" : lifecycle.substring(0, 3).toUpperCase()}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-700">
                    <strong>{lifecycle}:</strong>{' '}
                    {lifecycle === "New Product" ? "New from this manufacturer." : lifecycle}
                  </span>
                </div>
              </div>

              <div className="px-3 sm:px-5 py-2.5 sm:py-3">
                <h4 className="text-xs sm:text-sm font-bold text-gray-800 mb-1.5">Shipping Alert:</h4>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-xs sm:text-sm text-gray-600">
                    This item may require additional fees and documentation. Customs delays may also occur.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;