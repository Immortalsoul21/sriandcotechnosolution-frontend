import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { SocialIcons } from './Navbar';

const QUICK_LINKS = [
  { label: 'Home',           path: '/home' },
  { label: 'About Us',       path: '/about' },
  { label: 'Products',       path: '/products' },
  { label: 'News & Updates', path: '/features' },
  { label: 'Careers',        path: '/careers' },
  { label: 'Contact Us',     path: '/contact' },
];

const PRODUCT_CATS = [
  { label: 'RF & Microwave Components', path: '/products/RF%20%26%20Microwave%20Components%20and%20Solutions' },
  { label: 'Test & Measurement',        path: '/products/Test%20%26%20Measurement' },
  { label: 'Electronics Sensors',       path: '/products/Electronics%20Sensors' },
  { label: 'Special Materials',         path: '/products/Special%20Materials' },
  { label: 'RCP & HIL',                 path: '/products/RCP%20%26%20HIL' },
  { label: 'Sri & Co Manufacture',      path: '/products/Sri%20%26%20Co%20Manufacture%20Product' },
];

const Footer = () => (
  <footer className="bg-gray-950 text-gray-400">

    {/* ── MAIN GRID ── */}
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

        {/* Brand col */}
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
          <Link to="/home" className="flex items-center gap-3 group w-fit">
            <img
              src={logo}
              alt="Sri and Co Techno Solutions"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-sky-500/20
                         group-hover:ring-sky-400/50 transition-all duration-300 shadow-lg"
            />
            <div>
              <p className="text-white text-sm sm:text-base font-bold leading-tight tracking-tight">Sri and Co</p>
              <p className="text-gray-500 text-[10px] sm:text-xs tracking-widest uppercase font-medium">Techno Solutions</p>
            </div>
          </Link>

          <p className="text-xs sm:text-sm leading-relaxed text-gray-500 max-w-[260px]">
            Leading manufacturer &amp; distributor of RF, Microwave &amp; Electronic Components for
            Aerospace, Defence &amp; Industrial sectors across India.
          </p>

          <SocialIcons size="md" />
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-xs font-semibold uppercase tracking-widest">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            {QUICK_LINKS.map(link => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-1.5 text-xs sm:text-sm text-gray-500
                             hover:text-sky-400 transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-sky-400 transition-colors flex-shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product categories */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-xs font-semibold uppercase tracking-widest">Products</h3>
          <ul className="flex flex-col gap-2.5">
            {PRODUCT_CATS.map(cat => (
              <li key={cat.label}>
                <Link
                  to={cat.path}
                  className="group flex items-center gap-1.5 text-xs sm:text-sm text-gray-500
                             hover:text-sky-400 transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-sky-400 transition-colors flex-shrink-0" />
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
          <h3 className="text-white text-xs font-semibold uppercase tracking-widest">Contact Us</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={13} className="text-sky-400" />
              </div>
              <span className="text-xs sm:text-sm leading-relaxed text-gray-500">
                Sri and Co Techno Solutions<br />New Ebenezer Institute of Technology Campus<br />19, Hennur Bagalur Main Rd, Ebenezer Nagar, Kothanur, Bengaluru, Karnataka 560077
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                <Phone size={13} className="text-sky-400" />
              </div>
              <a
                href="tel:+919353961627"
                className="text-xs sm:text-sm text-gray-500 hover:text-sky-400 transition-colors cursor-pointer"
              >
                +91 9353961627
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                <Mail size={13} className="text-sky-400" />
              </div>
              <a
                href="mailto:sales@sriandcotechno.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:sales@sriandcotechno.com'; }}
                className="text-xs sm:text-sm text-gray-500 hover:text-sky-400 transition-colors cursor-pointer"
              >
                sales@sriandcotechno.com
              </a>
            </li>
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400
                       border border-sky-400/30 rounded-lg px-4 py-2.5 w-fit
                       hover:bg-sky-400/10 transition-colors duration-200 group cursor-pointer"
          >
            Get in Touch
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </div>

    {/* ── DIVIDER ── */}
    <div className="border-t border-gray-800/60" />

    {/* ── BOTTOM BAR ── */}
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[10px] sm:text-xs text-gray-600 order-2 sm:order-1">
          © {new Date().getFullYear()} Sri and Co Techno Solutions. All rights reserved.
        </p>
        <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2" />
      </div>
    </div>

  </footer>
);

export default Footer;