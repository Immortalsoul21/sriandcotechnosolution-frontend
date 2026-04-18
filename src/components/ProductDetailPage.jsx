import { AlertTriangle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Product not found</p>
          <button
            onClick={() => navigate('/home')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Build the part number / mouser number from product data
  const partNo = product.partNo || product.productId || `${product.name.replace(/\s+/g, '-').substring(0, 20)}`;
  const mfrNo = product.mfrNo || product.name;
  const manufacturer = product.manufacturer || product.categoryId;
  const description = product.description || `${product.subcategoryId || product.categoryId} – ${product.name}`;
  const lifecycle = product.lifecycle || "New Product";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={handleBack}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Products
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Images */}
          <div>
            {/* Main Image */}
            <div className="bg-gray-200 rounded-lg overflow-hidden mb-4">
              <div className="aspect-square flex items-center justify-center text-2xl font-semibold text-gray-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.png";
                  }}
                />
              </div>
            </div>
          </div>
          {/* Right Side - Product Details & Specifications */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {product.name}
            </h1>

            {/* Product Specifications Section */}
            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">

              {/*Part No*/}
              <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-1">Part No:</h4>
                <p className="text-sm text-gray-600">{partNo}</p>
              </div>

              {/* Mfr. No */}
              <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-1">Mfr. No:</h4>
                <p className="text-sm text-gray-600">{mfrNo}</p>
              </div>

              {/* Customer No */}
              <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-2">Customer No:</h4>
                <input
                  type="text"
                  placeholder="Customer No"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Description */}
              <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-1">Description:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>

              {/* Lifecycle */}
              <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-2">Lifecycle:</h4>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500 text-white text-[9px] font-bold leading-none">
                    {lifecycle === "New Product" ? "NEW" : lifecycle.substring(0, 3).toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-700">
                    <strong>{lifecycle}:</strong> {lifecycle === "New Product" ? "New from this manufacturer." : lifecycle}
                  </span>
                </div>
              </div>

              {/* Shipping Alert */}
              <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-2">Shipping Alert:</h4>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-600">
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