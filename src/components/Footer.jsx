import React from 'react';
import { Linkedin, Send, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Company Info */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center relative overflow-hidden flex-shrink-0">
                                <svg width="48" height="48" viewBox="0 0 48 48" className="absolute">
                                    <path d="M24 4 L24 44 Q34 39 38 24 Q34 9 24 4 Z" fill="#3b82f6" />
                                </svg>
                                <div className="text-xl sm:text-2xl font-bold text-blue-600 relative z-10">S</div>
                            </div>
                            <h2 className="text-white text-xl sm:text-2xl font-bold whitespace-nowrap">Sri and Co</h2>
                        </div>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition hover:scale-110">
                                <Linkedin size={18} className="text-white" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition hover:scale-110">
                                <Send size={18} className="text-white" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition hover:scale-110">
                                <Phone size={18} className="text-white" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition hover:scale-110">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h3 className="text-white text-base font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Home</a></li>
                            <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Industries</a></li>
                            <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Services</a></li>
                            <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Products</a></li>
                            <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Contact</a></li>
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h3 className="text-white text-base font-semibold mb-6">Product Categories</h3>
                        <div className="space-y-3 text-sm">
                            <div><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">RF & Microwave</a></div>
                            <div><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Electronic Components</a></div>
                            <div><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Test & Measurement</a></div>
                            <div><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Power Solutions</a></div>
                            <div><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Connectors</a></div>
                            <div><a href="#" className="hover:text-white transition hover:translate-x-1 inline-block">Sensors</a></div>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h3 className="text-white text-base font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                                <MapPin size={16} className="text-blue-500 flex-shrink-0 sm:mt-1" />
                                <span className="max-w-[200px]">123 Electronics Plaza, Bangalore, Karnataka 560001, India</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-blue-500 flex-shrink-0" />
                                <span>+91 XXXXX XXXXX</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-blue-500 flex-shrink-0" />
                                <span>info@sriandco.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 bg-slate-950/50">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs sm:text-sm">
                        <div className="text-gray-500 order-3 lg:order-1">
                            © 2024 Sri & Co. All rights reserved.
                        </div>
                        <div className="text-center lg:flex-1 text-gray-400 max-w-2xl order-1 lg:order-2">
                            Leading distributor of RF, Microwave & Electronic Components for Aerospace, Defence & Industrial sectors.
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 order-2 lg:order-3">
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