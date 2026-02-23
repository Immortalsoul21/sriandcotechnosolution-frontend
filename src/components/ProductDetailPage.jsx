import { Check, Star } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [selectedImage, setSelectedImage] = useState(0);

  const thumbnailImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const features = [
    'Active Noise Cancellation',
    'Premium Sound Quality',
    '30-hour Battery Life',
    'Wireless Connectivity'
  ];

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
                  src={thumbnailImages[selectedImage]}
                  alt="Main view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {thumbnailImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-gray-200 rounded-lg overflow-hidden cursor-pointer aspect-square flex items-center justify-center text-sm font-semibold text-gray-700 ${selectedImage === index ? 'ring-2 ring-blue-600' : ''
                    }`}
                >
                  <img
                    src={img}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                      }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} (142 reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-blue-600 mb-6">
              Premium wireless headphones with active noise cancellation and 30-hour battery life.
            </p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Features:</h3>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-700"
                  >
                    <Check className={`w-5 h-5 mr-2 ${index === 0 ? 'text-blue-600' : 'text-cyan-400'
                      }`} />
                    <span className={index === 0 ? 'font-semibold' : ''}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;