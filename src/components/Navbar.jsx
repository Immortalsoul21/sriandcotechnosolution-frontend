import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from './Searchbar';
// Make sure to import your logo properly
import logo from '../assets/logo-fotor - Copy.png';

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Careers', path: '/careers' },
  ];


  return (
    <div className="w-full">
      {/* Top Header Section */}
      <div className="bg-white px-4 sm:px-6 py-3 sm:py-5 shadow-sm">
        <div className="w-full flex items-center justify-between lg:justify-start lg:gap-6">

          {/* --- LOGO SECTION (Fixed Width) --- */}
          <Link to="/home" className="flex items-center gap-2 sm:gap-3 lg:w-64 flex-shrink-0 cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md overflow-hidden flex-shrink-0">
              <img src={logo} alt="Sri and Co Logo" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-gray-900 text-lg sm:text-xl leading-tight whitespace-nowrap truncate">Sri and Co</div>
              <div className="font-medium text-gray-600 text-sm sm:text-base whitespace-nowrap truncate">Techno Solutions</div>
            </div>
          </Link>

          {/* --- SEARCH BAR (Flexible) --- */}
          <div className="hidden lg:block flex-1 min-w-0">
            <SearchBar />
          </div>

          {/* --- LOGIN/REGISTER (Fixed Width) --- */}
          <div className="hidden lg:flex items-center gap-3 text-gray-700 text-base w-48 justify-end flex-shrink-0">
            <button className="hover:text-blue-600 transition-colors font-medium whitespace-nowrap">Login</button>
            <span className="text-gray-400">|</span>
            <button className="hover:text-blue-600 transition-colors font-medium whitespace-nowrap">Register</button>
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <button
            className="lg:hidden p-2 text-gray-700 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- MOBILE SEARCH BAR (Visible only on small screens) --- */}
        <div className="lg:hidden mt-3 sm:mt-4 w-full">
          <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search Product"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 px-4 py-3 outline-none text-gray-700 text-sm bg-white min-w-0"
            />
            <button className="px-6 py-3 bg-gray-900 text-white text-sm font-medium flex-shrink-0">
              search
            </button>
          </div>
        </div>
      </div>

      {/* --- NAVIGATION BAR --- */}
      <nav className={`bg-gray-900 text-white shadow-md ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="w-full px-6">
          <ul className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex flex-col lg:flex-row lg:gap-4">
              {navItems.map((item) => (
                <li key={item.label} className="border-b lg:border-b-0 border-gray-800">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-6 py-4 hover:bg-gray-800 transition-colors text-base font-medium whitespace-nowrap ${isActive ? 'text-blue-400 lg:bg-gray-800' : 'text-white'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </div>

            {/* Social Icons */}
            <li className="flex items-center gap-3 px-6 py-4 flex-shrink-0">
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              {/* Telegram */}
              <a href="#" className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" /></svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-8 h-8 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-all hover:scale-110 shadow-lg">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* --- MOBILE LOGIN/REGISTER (Dropdown) --- */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 flex items-center gap-2 text-gray-700">
          <button className="hover:text-blue-600 transition-colors font-medium">Login</button>
          <span className="text-gray-400">|</span>
          <button className="hover:text-blue-600 transition-colors font-medium">Register</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
