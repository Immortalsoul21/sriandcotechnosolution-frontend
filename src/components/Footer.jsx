import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Send, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    // ── "Services" removed ────────────────────────────────────────────────
    const quickLinks = [
        { label: 'Home',     path: '/home' },
        { label: 'About Us', path: '/about' },
        { label: 'Products', path: '/products' },
        { label: 'Features', path: '/features' },
        { label: 'Careers',  path: '/careers' },
    ];

    // ── Updated to match real product categories ───────────────────────────
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

            {/* ── Main Footer Content ───────────────────────────────────────── */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Company Info */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <div className="flex items-center gap-3 mb-6">
                            {/* Logo placeholder — swap with <img> when asset available */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full
                                            flex items-center justify-center flex-shrink-0
                                            ring-2 ring-blue-500/30 shadow-lg">
                                <span className="text-white font-extrabold text-xs sm:text-sm tracking-tight">STS</span>
                            </div>
                            <h2 className="text-white text-lg sm:text-xl font-bold whitespace-nowrap">
                                Shreyanko Techno<br />
                                <span className="font-normal text-gray-400 text-sm">Solutions</span>
                            </h2>
                        </div>

                        <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-[240px]">
                            Leading distributor of RF, Microwave &amp; Electronic Components for
                            Aerospace, Defence &amp; Industrial sectors.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a href="#" aria-label="LinkedIn"
                               className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center
                                          hover:bg-blue-700 transition hover:scale-110">
                                <Linkedin size={16} className="text-white" />
                            </a>
                            <a href="#" aria-label="Telegram"
                               className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center
                                          hover:bg-blue-600 transition hover:scale-110">
                                <Send size={16} className="text-white" />
                            </a>
                            <a href="#" aria-label="WhatsApp"
                               className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center
                                          hover:bg-green-600 transition hover:scale-110">
                                <Phone size={16} className="text-white" />
                            </a>
                            <a href="#" aria-label="X / Twitter"
                               className="w-9 h-9 bg-black rounded-full flex items-center justify-center
                                          hover:bg-gray-800 transition hover:scale-110">
                                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h3 className="text-white text-base font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-white transition hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h3 className="text-white text-base font-semibold mb-6">Product Categories</h3>
                        <ul className="space-y-3 text-sm">
                            {productCategories.map((cat) => (
                                <li key={cat.label}>
                                    <Link
                                        to={cat.path}
                                        className="hover:text-white transition hover:translate-x-1 inline-block"
                                    >
                                        {cat.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h3 className="text-white text-base font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                                <MapPin size={16} className="text-blue-500 flex-shrink-0 sm:mt-0.5" />
                                <span className="max-w-[200px] leading-relaxed">
                                    123 Electronics Plaza, Bangalore, Karnataka 560001, India
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-blue-500 flex-shrink-0" />
                                <a href="tel:+919999999999" className="hover:text-white transition">
                                    +91 XXXXX XXXXX
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-blue-500 flex-shrink-0" />
                                <a href="mailto:info@shreyanko.com" className="hover:text-white transition">
                                    info@shreyanko.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ────────────────────────────────────────────────── */}
            <div className="border-t border-gray-800 bg-slate-950/50">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-5">
                    <div className="flex flex-col lg:flex-row justify-between items-center
                                    gap-3 text-xs sm:text-sm">
                        <p className="text-gray-500 order-3 lg:order-1">
                            © {new Date().getFullYear()} Shreyanko Techno Solutions. All rights reserved.
                        </p>
                        <p className="text-center lg:flex-1 text-gray-400 max-w-2xl order-1 lg:order-2">
                            Leading distributor of RF, Microwave &amp; Electronic Components
                            for Aerospace, Defence &amp; Industrial sectors.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 order-2 lg:order-3">
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