import React from 'react';
import { Linkedin, Send, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-[1400px] mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                                <svg width="48" height="48" viewBox="0 0 48 48" className="absolute">
                                    <path d="M24 4 L24 44 Q34 39 38 24 Q34 9 24 4 Z" fill="#3b82f6" />
                                </svg>
                                <div className="text-2xl font-bold text-blue-600 relative z-10">S</div>
                            </div>
                            <h2 className="text-white text-2xl font-bold">Sri and Co</h2>
                        </div>
                        <div className="flex gap-2">
                            <a href="#" className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                                <Linkedin size={18} className="text-white" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                                <Send size={18} className="text-white" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition">
                                <Phone size={18} className="text-white" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:opacity-90 transition">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-base font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-1.5 text-sm">
                            <li><a href="#" className="hover:text-white transition">Home</a></li>
                            <li><a href="#" className="hover:text-white transition">Industries</a></li>
                            <li><a href="#" className="hover:text-white transition">Services</a></li>
                            <li><a href="#" className="hover:text-white transition">Products</a></li>
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h3 className="text-white text-base font-semibold mb-4">Product Categories</h3>
                        <div className="space-y-2 text-sm">
                            <div><a href="#" className="hover:text-white transition">RF & Microwave</a></div>
                            <div><a href="#" className="hover:text-white transition">Electronic Components</a></div>
                            <div><a href="#" className="hover:text-white transition">Test & Measurement</a></div>
                            <div><a href="#" className="hover:text-white transition">Power Solutions</a></div>
                            <div><a href="#" className="hover:text-white transition">Connectors</a></div>
                            <div><a href="#" className="hover:text-white transition">Sensors</a></div>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-white text-base font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li className="flex gap-2">
                                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                                <span>123 Electronics Plaza, Bangalore, Karnataka 560001<br />India</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Phone size={16} className="flex-shrink-0" />
                                <span>+91 XXXXX XXXXX</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Mail size={16} className="flex-shrink-0" />
                                <span>info@sriandco.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-[1400px] mx-auto px-6 py-4">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-xs">
                        <div className="text-gray-400">
                            © 2024 Sri & Co. All rights reserved.
                        </div>
                        <div className="text-center lg:flex-1">
                            Leading distributor of RF, Microwave & Electronic Components for Aerospace, Defence & Industrial sectors.
                        </div>
                        <div className="flex gap-6 whitespace-nowrap">
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