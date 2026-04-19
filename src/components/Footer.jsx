import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Send, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    const quickLinks = [
        { label: 'Home',           path: '/home' },
        { label: 'About Us',       path: '/about' },
        { label: 'Products',       path: '/products' },
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

                    {/* Company Info — spans 2 cols on mobile */}
                    <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col items-start">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <img src={logo} alt="Sri and Co logo"
                                 className="w-9 h-9 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0
                                            ring-2 ring-sky-500/30 shadow-lg" />
                            <h2 className="text-white text-base sm:text-xl font-bold whitespace-nowrap">
                                Sri and Co<br />
                                <span className="font-normal text-gray-400 text-xs sm:text-sm">Techno Solutions</span>
                            </h2>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-[280px]">
                            Leading distributor of RF, Microwave &amp; Electronic Components for
                            Aerospace, Defence &amp; Industrial sectors.
                        </p>

                        <div className="flex gap-2 sm:gap-3">
                            {[
                                { label: 'LinkedIn', bg: 'bg-sky-600 hover:bg-sky-700', icon: <Linkedin size={14} className="text-white sm:w-4 sm:h-4" /> },
                                { label: 'Telegram', bg: 'bg-sky-500 hover:bg-sky-600', icon: <Send size={14} className="text-white sm:w-4 sm:h-4" /> },
                                { label: 'WhatsApp', bg: 'bg-green-500 hover:bg-green-600', icon: <Phone size={14} className="text-white sm:w-4 sm:h-4" /> },
                            ].map(s => (
                                <a key={s.label} href="#" aria-label={s.label}
                                   className={`w-7 h-7 sm:w-9 sm:h-9 ${s.bg} rounded-full flex items-center justify-center transition hover:scale-110`}>
                                    {s.icon}
                                </a>
                            ))}
                            <a href="#" aria-label="X / Twitter"
                               className="w-7 h-7 sm:w-9 sm:h-9 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition hover:scale-110">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
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