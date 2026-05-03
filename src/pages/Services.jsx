import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, Package, Zap, DollarSign, Handshake } from "lucide-react";

// ── Asset imports (your actual image files) ──────────────────────────────────
import MOQ         from "../assets/MOQ.png";
import Pricing     from "../assets/Pricing.png";
import Quick       from "../assets/Quick.png";
import Import      from "../assets/Import .png";
import Independent from "../assets/Independent Distribution.png";

const images = [Quick, Import, MOQ, Pricing, Independent];

// ── Service detail cards data ─────────────────────────────────────────────────
const serviceDetails = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    label: "Quick Delivery",
    gradient: "from-blue-600 to-blue-800",
    description:
      "Same-day dispatch on in-stock items. Our optimised logistics network ensures your components arrive on time, every time.",
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    label: "Import Solutions",
    gradient: "from-purple-600 to-purple-900",
    description:
      "End-to-end import management including customs clearance, duty optimisation, and documentation.",
  },
  {
    icon: <Package className="w-6 h-6 text-white" />,
    label: "Flexible MOQ",
    gradient: "from-green-600 to-teal-700",
    description:
      "From a single prototype unit to mass-production runs — we adapt minimum order quantities to match your project scale.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-white" />,
    label: "Competitive Pricing",
    gradient: "from-orange-500 to-red-600",
    description:
      "Volume discounts, blanket order agreements, and transparent pricing models that keep your BOM costs under control.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-white" />,
    label: "Independent Distribution",
    gradient: "from-indigo-600 to-blue-700",
    description:
      "As an independent distributor we source across multiple manufacturers, giving you unbiased recommendations and access to hard-to-find components.",
  },
];

/* ── Carousel Frame ─────────────────────────────────────────────────────────── */
function CarouselFrame({ img, className }) {
  return (
    <div
      className={`
        absolute top-1/2 left-1/2
        -translate-y-1/2
        rounded-2xl
        overflow-hidden
        backdrop-blur-md
        bg-[#3E0D7D]/20
        transition-all duration-700 ease-in-out
        ${className}
      `}
    >
      <img src={img} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

/* ── Main Page ──────────────────────────────────────────────────────────────── */
export default function Services() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const prevSlide = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((p) => (p + 1) % images.length);
  const getImage  = (offset) => images[(current + offset + images.length) % images.length];

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-gray-100 overflow-x-hidden">

      {/* ── Hero / Carousel ─────────────────────────────────────────────────── */}
      <div
        className="flex justify-center"
        style={{ background: "linear-gradient(to bottom, rgba(56,60,148,0.3), rgba(123,134,140,0.1))" }}
      >
        <div className="w-full max-w-[1728px] flex flex-col items-center relative pt-6 sm:pt-4 pb-14 px-4">

          {/* Title — no data points */}
          <div className="text-center max-w-4xl px-4 sm:px-6 relative z-50">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-[77px] lg:leading-[60px] tracking-tight text-black mb-6 sm:mb-8">
              <span className="text-[#3036AE]">O</span>ur{" "}
              <span className="text-[#3036AE]">S</span>pecialized{" "}
              <span className="text-[#3036AE]">S</span>ervices
            </h1>
            <p className="text-base sm:text-lg text-[#3E0D7D]">
              Looking to source electronic components with confidence?
            </p>
            <p className="text-base sm:text-lg text-[#3E0D7D] mt-1 sm:leading-[15px]">
              Explore our services designed to support every scale of business.
            </p>
          </div>

          {/* ── Desktop Carousel (md and up) ─────────────────────────────────── */}
          <div className="hidden md:block relative w-full max-w-[1200px] h-[460px] mt-12">

            {/* Arrows */}
            <button onClick={prevSlide} className="absolute left-[-60px] lg:left-[-100px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-2xl shadow-md hover:bg-white transition">‹</button>
            <button onClick={nextSlide} className="absolute right-[-60px] lg:right-[-100px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-2xl shadow-md hover:bg-white transition">›</button>

            {/* Frames */}
            <div className="relative w-full h-full overflow-hidden">
              <CarouselFrame img={getImage(-2)} className="-translate-x-[160%] opacity-40 z-10 w-[400px] h-[250px]" />
              <CarouselFrame img={getImage(-1)} className="-translate-x-[550px] opacity-70 z-40 w-[500px] h-[350px]" />
              <CarouselFrame img={getImage(0)}  className="-translate-x-1/2 z-50 w-[600px] h-[400px]" />
              <CarouselFrame img={getImage(1)}  className="translate-x-[50px] opacity-70 z-40 w-[500px] h-[350px]" />
              <CarouselFrame img={getImage(2)}  className="translate-x-[60%] opacity-40 z-10 w-[400px] h-[250px]" />
            </div>

            {/* Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-[#3036AE]" : "w-2.5 h-2.5 bg-gray-400"}`} />
              ))}
            </div>
          </div>

          {/* ── Mobile: stacked image cards ──────────────────────────────────── */}
          <div className="md:hidden w-full mt-8 flex flex-col gap-4">
            {serviceDetails.map((s, i) => (
              <div key={i} className={`h-44 rounded-2xl overflow-hidden bg-gradient-to-br ${s.gradient} flex flex-col items-center justify-center text-white gap-2 px-6 text-center`}>
                <div className="text-3xl">{s.icon}</div>
                <span className="text-lg font-bold">{s.label}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg sm:text-xl italic text-[#3E0D7D] text-center font-['Inter']">
            Experience the future of component sourcing today.
          </p>
        </div>
      </div>

      {/* ── Service Detail Cards ─────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        {/* UPDATED: "What We Offer" — Title Case */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">
          What We Offer
        </h2>
        <p className="text-gray-500 text-center mb-10 text-sm sm:text-base">
          End-to-end support across every stage of your sourcing journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {serviceDetails.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 shadow-md`}>
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready To Source Smarter?
          </h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base leading-relaxed">
            Get in touch with our team for a tailored quote or browse our full product catalogue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/products')}
              className="px-8 py-3 bg-[#3036AE] text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm sm:text-base"
            >
              {/* UPDATED: "Product Store" → "All Products" */}
              Browse All Products
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}