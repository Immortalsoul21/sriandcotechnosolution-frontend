import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Check } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { products, categories } from '@/data/products1';
import SearchBar from './Searchbar';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [mobileQuery, setMobileQuery]   = useState('');
  const [mobileResults, setMobileResults] = useState([]);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [mobileCat, setMobileCat]       = useState(null);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);

  const mobileWrapperRef = useRef(null);
  const navigate         = useNavigate();

  const navItems = [
    { label: 'Home',           path: '/home' },
    { label: 'About Us',       path: '/about' },
    { label: 'Products',       path: '/products' },
    { label: 'News & Updates', path: '/news' },
  ];

  useEffect(() => {
    const q = mobileQuery.trim().toLowerCase();
    if (!q) { setMobileResults([]); setMobileOpen(false); return; }
    let pool = products;
    if (mobileCat) pool = pool.filter(p => p.categoryId === mobileCat.categoryId);
    const matched = pool.filter(p => p.name.toLowerCase().includes(q)).slice(0, 6);
    setMobileResults(matched);
    setMobileOpen(matched.length > 0);
  }, [mobileQuery, mobileCat]);

  useEffect(() => {
    const handler = (e) => {
      if (mobileWrapperRef.current && !mobileWrapperRef.current.contains(e.target)) {
        setMobileOpen(false); setMobileCatOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handler = (e) => { if (e.matches) setIsMenuOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const goToProduct = (product) => {
    const slug = product.name.toLowerCase().replace(/\s+/g, '-');
    setMobileQuery(''); setMobileOpen(false); setIsMenuOpen(false);
    navigate(`/products/${product.categoryId}/${slug}`, { state: { product } });
  };

  return (
    <div className="w-full sticky top-0 z-50 shadow-md">

      {/* Top bar */}
      <div className="bg-white px-3 sm:px-6 py-2.5 sm:py-4">
        <div className="w-full flex items-center gap-2 sm:gap-6">

          {/* Logo */}
          <Link to="/home" className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <img src={logo} alt="Sri and Co logo"
                 className="w-8 h-8 sm:w-11 sm:h-11 rounded-full object-cover flex-shrink-0 shadow-md ring-2 ring-sky-100" />
            <div className="min-w-0">
              <div className="font-bold text-gray-900 text-xs sm:text-lg leading-tight whitespace-nowrap">Sri and Co</div>
              <div className="font-medium text-gray-500 text-[9px] sm:text-xs whitespace-nowrap">Techno Solutions</div>
            </div>
          </Link>

          {/* Desktop search */}
          <div className="hidden lg:block flex-1 min-w-0">
            <SearchBar />
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-1.5 sm:p-2 text-gray-700 flex-shrink-0 ml-auto rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile search bar */}
        <div className="lg:hidden mt-2" ref={mobileWrapperRef}>
          <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
            <input
              type="text"
              placeholder={mobileCat ? `Search in ${mobileCat.value}…` : 'Search Product'}
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              className="flex-1 px-2.5 py-2 outline-none text-gray-700 text-xs bg-white min-w-0"
              autoComplete="off"
            />
            <div className="w-px bg-gray-200 my-1.5 flex-shrink-0" />
            <button
              onMouseDown={(e) => { e.preventDefault(); setMobileCatOpen(p => !p); setMobileOpen(false); }}
              className="flex items-center gap-0.5 px-2 py-2 text-gray-700 hover:bg-gray-50 transition-colors w-20 flex-shrink-0"
            >
              <span className="text-[10px] truncate flex-1 text-left">{mobileCat ? mobileCat.value : 'All'}</span>
              <ChevronDown className={`w-3 h-3 text-gray-500 flex-shrink-0 transition-transform ${mobileCatOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className="w-px bg-gray-200 my-1.5 flex-shrink-0" />
            <button
              onMouseDown={(e) => { e.preventDefault(); if (mobileResults.length > 0) setMobileOpen(true); }}
              className="px-3 py-2 bg-gray-900 text-white text-[10px] font-medium hover:bg-gray-700 transition-colors flex-shrink-0"
            >
              Search
            </button>
          </div>

          {/* Mobile category dropdown */}
          {mobileCatOpen && (
            <div className="mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[110] relative">
              <div className="px-3 py-1.5 bg-gray-50 border-b border-gray-100">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Filter by Category</span>
              </div>
              <ul className="py-0.5 max-h-52 overflow-y-auto">
                <li>
                  <button
                    onMouseDown={(e) => { e.preventDefault(); setMobileCat(null); setMobileCatOpen(false); }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors ${!mobileCat ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    All Categories {!mobileCat && <Check className="w-3 h-3 text-sky-600" />}
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.categoryId}>
                    <button
                      onMouseDown={(e) => { e.preventDefault(); setMobileCat(cat); setMobileCatOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs border-t border-gray-50 transition-colors ${mobileCat?.categoryId === cat.categoryId ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {cat.value} {mobileCat?.categoryId === cat.categoryId && <Check className="w-3 h-3 text-sky-600" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mobile results */}
          {mobileOpen && (
            <div className="mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100] relative">
              <div className="px-3 py-1.5 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                <span className="text-[10px] text-gray-400">
                  {mobileResults.length} result{mobileResults.length !== 1 ? 's' : ''}
                  {mobileCat && <span className="text-sky-500 font-semibold ml-1">in {mobileCat.value}</span>}
                </span>
                {mobileCat && (
                  <button onMouseDown={(e) => { e.preventDefault(); setMobileCat(null); }}
                          className="text-[10px] text-gray-400 hover:text-red-500 flex items-center gap-0.5">
                    <X className="w-3 h-3" /> Clear
                  </button>
                )}
              </div>
              <ul className="max-h-56 overflow-y-auto">
                {mobileResults.map(product => (
                  <li key={product.id}>
                    <button onMouseDown={() => goToProduct(product)}
                            className="w-full flex items-center gap-2.5 px-3 py-2 text-left hover:bg-sky-50 transition-colors">
                      <div className={`w-7 h-7 rounded-lg overflow-hidden flex-shrink-0 ${product.bgColor || 'bg-gray-200'}`}>
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-800 truncate font-medium">{product.name}</p>
                        <p className="text-[10px] text-gray-400 capitalize">{product.categoryId} · {product.subcategoryId}</p>
                      </div>
                      {product.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 bg-purple-100 text-purple-600 rounded-full flex-shrink-0">
                          {product.badge}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Nav bar */}
      <nav className={`bg-gray-900 text-white ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="w-full px-3 sm:px-6">
          <ul className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex flex-col lg:flex-row lg:gap-0">
              {navItems.map(item => (
                <li key={item.label} className="border-b lg:border-b-0 border-gray-800">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-4 sm:px-5 py-3 sm:py-3.5 hover:bg-gray-800 transition-colors text-xs sm:text-sm font-medium whitespace-nowrap
                       ${isActive ? 'text-sky-400 bg-gray-800' : 'text-white'}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </div>

            {/* Social icons */}
            <li className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 flex-shrink-0">
              {[
                { label: 'LinkedIn', bg: 'bg-sky-600 hover:bg-sky-700', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { label: 'Telegram', bg: 'bg-sky-500 hover:bg-sky-600', path: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z' },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                   className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full ${s.bg} flex items-center justify-center transition-all hover:scale-110 shadow`}>
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24"><path d={s.path}/></svg>
                </a>
              ))}
              <a href="#" aria-label="X"
                 className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 shadow">
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;