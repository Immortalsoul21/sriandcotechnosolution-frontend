import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Globe, ShieldCheck, Zap, Headphones,
  BarChart3, Wrench, Package, Clock
} from 'lucide-react';

const featuresList = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: 'Precision Engineering',
    description:
      'Every component is selected and tested against stringent quality benchmarks to ensure performance reliability in demanding industrial applications.',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: 'Global Distribution',
    description:
      'Our extensive logistics network spans 50+ countries, ensuring fast, secure, and cost-effective delivery wherever your project demands.',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: 'Same-Day Shipping',
    description:
      'In-stock items are dispatched the same business day. Our warehouse management system guarantees accuracy and speed at every step.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: 'Certified Suppliers',
    description:
      'We work exclusively with authorised manufacturers and ISO-certified suppliers, eliminating counterfeit risk from your supply chain.',
    gradient: 'from-green-500 to-green-700',
  },
  {
    icon: <Headphones className="w-6 h-6 text-white" />,
    title: 'Dedicated Support',
    description:
      'Our expert technical team is available to help with component selection, datasheet interpretation, and system integration advice.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: 'Inventory Transparency',
    description:
      'Real-time stock levels and lead time visibility across thousands of SKUs, so you can plan your procurement with confidence.',
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: 'Custom Sourcing',
    description:
      "Can't find what you need? Our dedicated sourcing team will track down hard-to-find or obsolete components on your behalf.",
    gradient: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: <Package className="w-6 h-6 text-white" />,
    title: 'Flexible MOQ',
    description:
      'Whether you need a single prototype unit or bulk production quantities, our flexible minimum order quantities adapt to your needs.',
    gradient: 'from-amber-500 to-amber-700',
  },
];

const stats = [
  { value: '50,000+', label: 'SKUs Available' },
  { value: '20+',     label: 'Years Experience' },
  { value: '98%',     label: 'On-Time Delivery' },
  { value: '150+',    label: 'Countries Served' },
];

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-600/30 border border-blue-500/40
                           rounded-full text-blue-300 text-xs sm:text-sm font-semibold mb-6 tracking-widest uppercase">
            Why Choose Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold mb-5 leading-tight">
            Features Built For <br />
            <span className="text-blue-400">Modern Engineering</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From precision sourcing to global delivery, every feature of our platform is designed
            to keep your projects moving without compromise.
          </p>
        </div>
      </div>

      {/* ── Stats Bar ─────────────────────────────────────────────────── */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8
                        grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl font-bold">{s.value}</p>
              <p className="text-blue-200 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Feature Cards ─────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuresList.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient}
                              flex items-center justify-center mb-4 shadow-md flex-shrink-0`}>
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed text-sm sm:text-base">
            Explore our full product catalogue or reach out to our team to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/products')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold
                         hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Browse Products
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold
                         hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              Learn About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;