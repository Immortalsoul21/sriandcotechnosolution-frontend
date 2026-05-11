import { AlertTriangle, Mail, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, productSlug } = useParams();
  const product =
    location.state?.product ||
    products.find(
      (item) =>
        item.categoryId === decodeURIComponent(category || "") &&
        toProductSlug(item.name) === productSlug,
    );

  const handleBack = () => {
    navigate(-1);
  };

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

  // Build product fields
  const partNo = product.partNo || product.productId || `${product.name.replace(/\s+/g, '-').substring(0, 20)}`;
  const mfrNo = product.mfrNo || product.name;
  const manufacturer = product.manufacturer || product.categoryId;
  const description = product.description || `${product.subcategoryId || product.categoryId} – ${product.name}`;
  const lifecycle = product.lifecycle || "New Product";

  // Build breadcrumb trail for the email
  const breadcrumb = [
    product.categoryId,
    product.subcategoryId,
    product.subSubcategoryId,
    product.name,
  ]
    .filter(Boolean)
    .join(" › ");

  const handleGetQuotation = () => {
    const to = "sales@sriandcotechno.com";
    const subject = `Quotation Request – ${product.name}`;
    const body = `Dear Sri and Co Techno Solutions Sales Team,

I am interested in obtaining a quotation for the following product:

────────────────────────────────
Product Details
────────────────────────────────
Product Name   : ${product.name}
Category Path  : ${breadcrumb}
Part No        : ${partNo}
Manufacturer   : ${manufacturer}
Description    : ${description}
────────────────────────────────

Could you please provide pricing, availability, and lead time for the above product?

Additionally, please let me know if you require any further information to process this request.

Looking forward to your response.

Best regards,
[Your Name]
[Your Company]
[Your Contact Number]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <button
            onClick={handleBack}
            className="flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            ← Back to Products
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Side - Image */}
          <div>
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-square flex items-center justify-center">
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

          {/* Right Side - Details */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Breadcrumb */}
            {(product.categoryId || product.subcategoryId) && (
              <div className="flex flex-wrap items-center gap-1 text-xs text-gray-400">
                {[product.categoryId, product.subcategoryId, product.subSubcategoryId]
                  .filter(Boolean)
                  .map((crumb, i, arr) => (
                    <span key={i} className="flex items-center gap-1">
                      <span className="text-gray-500">{crumb}</span>
                      {i < arr.length - 1 && (
                        <ChevronRight className="w-3 h-3 text-gray-300" />
                      )}
                    </span>
                  ))}
              </div>
            )}

            {/* Specifications */}
            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
              <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-1">Part No:</h4>
                <p className="text-sm text-gray-600">{partNo}</p>
              </div>

              <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-1">Mfr. No:</h4>
                <p className="text-sm text-gray-600">{mfrNo}</p>
              </div>

              <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-2">Customer No:</h4>
                <input
                  type="text"
                  placeholder="Customer No"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-1">Description:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>

              {/* <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-2">Lifecycle:</h4>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500 text-white text-[9px] font-bold leading-none">
                    {lifecycle === "New Product" ? "NEW" : lifecycle.substring(0, 3).toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-700">
                    <strong>{lifecycle}:</strong>{" "}
                    {lifecycle === "New Product" ? "New from this manufacturer." : lifecycle}
                  </span>
                </div>
              </div> */}

              {/* <div className="px-5 py-3">
                <h4 className="text-sm font-bold text-gray-800 mb-2">Shipping Alert:</h4>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-600">
                    This item may require additional fees and documentation. Customs delays may also occur.
                  </p>
                </div>
              </div> */}
            </div>

            {/* ── GET QUOTATION BUTTON ── */}
            <button
              onClick={handleGetQuotation}
              className="mt-2 w-full flex items-center justify-center gap-2.5 
                         bg-sky-600 hover:bg-sky-700 active:bg-sky-800
                         text-white font-semibold text-sm sm:text-base
                         px-6 py-3.5 rounded-lg
                         shadow-md hover:shadow-lg hover:-translate-y-0.5
                         transition-all duration-200"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Get Quotation
            </button>

            <p className="text-center text-xs text-gray-400 -mt-2">
              Opens Gmail with a pre-filled enquiry to{" "}
              <span className="text-sky-500">sales@sriandcotechno.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;