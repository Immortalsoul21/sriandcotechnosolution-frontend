import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const SOCIAL = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sri-and-co-techno-solutions-72a238385/',
    bg: 'bg-sky-600 hover:bg-sky-700',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    label: 'WhatsApp',
    url: 'https://wa.me/message/P6QFG2JDNTCYJ1',
    bg: 'bg-green-500 hover:bg-green-600',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61559063276562',
    bg: 'bg-blue-600 hover:bg-blue-700',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/sri_and_co_techno_solutions/',
    bg: 'bg-pink-600 hover:bg-pink-700',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'X / Twitter',
    url: 'https://x.com/sriandcotechno',
    bg: 'bg-black hover:bg-gray-800',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];

const openLink = (url) => window.open(url, '_blank', 'noopener,noreferrer');

const Footer = () => {
    const quickLinks = [
        { label: 'Home',           path: '/home' },
        { label: 'About Us',       path: '/about' },
        { label: 'Products',       path: '/products' },
        { label: 'Features',       path: '/features' },
        { label: 'News & Updates', path: '/news' },
        { label: 'Careers',        path: '/careers' },
      ];

  const productCategories = [
    { label: 'RF & Microwave Components', path: '/products/rf-microwave' },
    { label: 'Test & Measurement',        path: '/products/test-measurement' },
    { label: 'Sensors & Measurement',     path: '/products/sensors' },
    { label: 'Thin Film & Electronics',   path: '/products/thin-film' },
    { label: 'Antennas',                  path: '/products/antennas' },
    { label: 'Capabilities & Support',    path: '/products/capabilities' },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-8">

          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col items-start">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img src={logo} alt="Sri and Co logo"
                   className="w-9 h-9 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-sky-500/30 shadow-lg" />
              <h2 className="text-white text-base sm:text-xl font-bold whitespace-nowrap">
                Sri and Co<br />
                <span className="font-normal text-gray-400 text-xs sm:text-sm">Techno Solutions</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-[280px]">
              Leading distributor of RF, Microwave &amp; Electronic Components for
              Aerospace, Defence &amp; Industrial sectors.
            </p>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {SOCIAL.map((s) => (
                <button
                  key={s.label}
                  onClick={() => openLink(s.url)}
                  aria-label={s.label}
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full ${s.bg} flex items-center justify-center transition-all hover:scale-110 shadow cursor-pointer`}
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white text-sm sm:text-base font-semibold mb-3 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white transition hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="flex flex-col">
            <h3 className="text-white text-sm sm:text-base font-semibold mb-3 sm:mb-6">Product Categories</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {productCategories.map((cat) => (
                <li key={cat.label}>
                  <Link to={cat.path} className="hover:text-white transition hover:translate-x-1 inline-block">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col col-span-2 sm:col-span-1">
            <h3 className="text-white text-sm sm:text-base font-semibold mb-3 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-sky-500 flex-shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                <span className="leading-relaxed">123 Electronics Plaza, Bangalore, Karnataka 560001, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-sky-500 flex-shrink-0 sm:w-4 sm:h-4" />
                <a href="tel:+919999999999" className="hover:text-white transition">+91 XXXXX XXXXX</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-sky-500 flex-shrink-0 sm:w-4 sm:h-4" />
                <a href="mailto:info@sriandco.com" className="hover:text-white transition">info@sriandco.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 bg-slate-950/50">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-[10px] sm:text-sm">
            <p className="text-gray-500 order-3 sm:order-1">
              © {new Date().getFullYear()} Sri and Co Techno Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 order-2 text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;