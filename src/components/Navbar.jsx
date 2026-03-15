import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Check } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { products, categories } from '@/data/products1';
import SearchBar from './Searchbar';
// import logo from '../assets/logo-fotor - Copy.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ── Mobile search state ─────────────────────────────────────────────── */
  const [mobileQuery,   setMobileQuery]   = useState('');
  const [mobileResults, setMobileResults] = useState([]);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [mobileCat,     setMobileCat]     = useState(null);   // null = All
  const [mobileCatOpen, setMobileCatOpen] = useState(false);

  const mobileWrapperRef = useRef(null);
  const navigate         = useNavigate();

  const navItems = [
    { label: 'Home',     path: '/home' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Features', path: '/features' },
  ];

  /* ── Mobile filter ───────────────────────────────────────────────────── */
  useEffect(() => {
    const q = mobileQuery.trim().toLowerCase();
    if (!q) { setMobileResults([]); setMobileOpen(false); return; }

    let pool = products;
    if (mobileCat) pool = pool.filter((p) => p.categoryId === mobileCat.categoryId);

    const matched = pool.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 6);
    setMobileResults(matched);
    setMobileOpen(matched.length > 0);
  }, [mobileQuery, mobileCat]);

  /* ── Close on outside click ──────────────────────────────────────────── */
  useEffect(() => {
    const handler = (e) => {
      if (mobileWrapperRef.current && !mobileWrapperRef.current.contains(e.target)) {
        setMobileOpen(false);
        setMobileCatOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const goToProduct = (product) => {
    const slug = product.name.toLowerCase().replace(/\s+/g, '-');
    setMobileQuery('');
    setMobileOpen(false);
    setIsMenuOpen(false);
    navigate(`/products/${product.categoryId}/${slug}`, { state: { product } });
  };

  return (
    <div className="w-full sticky top-0 z-50 shadow-md">

      {/* ── Top Header ────────────────────────────────────────────────────── */}
      <div className="bg-white px-4 sm:px-6 py-3 sm:py-5">
        <div className="w-full flex items-center gap-3 sm:gap-6">

          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center
                            justify-center shadow-md flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">SC</span>
            </div>
            <div className="min-w-0">
              <div className="font-bold text-gray-900 text-base sm:text-xl leading-tight whitespace-nowrap">
                Sri and Co
              </div>
              <div className="font-medium text-gray-500 text-xs sm:text-sm whitespace-nowrap">
                Techno Solutions
              </div>
            </div>
          </Link>

          {/* Desktop SearchBar */}
          <div className="hidden lg:block flex-1">
            <SearchBar />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700 flex-shrink-0 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ── Mobile Search — same original style ───────────────────────── */}
        <div className="lg:hidden mt-4" ref={mobileWrapperRef}>

          {/* Input row — border border-gray-300 rounded-lg overflow-hidden shadow-sm */}
          <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
            <input
              type="text"
              placeholder={mobileCat ? `Search in ${mobileCat.value}…` : 'Search Product'}
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              className="flex-1 px-4 py-3 outline-none text-gray-700 text-sm bg-white min-w-0"
              autoComplete="off"
            />

            {/* Vertical divider */}
            <div className="w-px bg-gray-300 my-2 flex-shrink-0" />

            {/* Category picker */}
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                setMobileCatOpen((p) => !p);
                setMobileOpen(false);
              }}
              className="flex items-center justify-between gap-1 px-3 py-3 text-gray-700
                         hover:bg-gray-50 transition-colors focus:outline-none w-28 flex-shrink-0"
            >
              <span className="text-sm truncate flex-1 text-left">
                {mobileCat ? mobileCat.value : 'All'}
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200
                                       ${mobileCatOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Vertical divider */}
            <div className="w-px bg-gray-300 my-2 flex-shrink-0" />

            {/* Search button */}
            <button
              onMouseDown={(e) => {
                e.preventDefault();
                if (mobileResults.length > 0) setMobileOpen(true);
              }}
              className="px-5 py-3 bg-gray-900 text-white text-sm font-medium
                         hover:bg-gray-700 transition-colors flex-shrink-0"
            >
              Search
            </button>
          </div>

          {/* Mobile category dropdown */}
          {mobileCatOpen && (
            <div className="mt-1 bg-white rounded-xl shadow-xl border border-gray-100
                            overflow-hidden z-[110] relative">
              <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Filter by Category
                </span>
              </div>
              <ul className="py-1">
                <li>
                  <button
                    onMouseDown={(e) => { e.preventDefault(); setMobileCat(null); setMobileCatOpen(false); }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                                ${!mobileCat ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    All Categories
                    {!mobileCat && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.categoryId}>
                    <button
                      onMouseDown={(e) => { e.preventDefault(); setMobileCat(cat); setMobileCatOpen(false); }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm
                                  border-t border-gray-50 transition-colors
                                  ${mobileCat?.categoryId === cat.categoryId
                                    ? 'bg-blue-50 text-blue-600 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {cat.value}
                      {mobileCat?.categoryId === cat.categoryId && (
                        <Check className="w-3.5 h-3.5 text-blue-600" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mobile results dropdown */}
          {mobileOpen && (
            <div className="mt-1 bg-white rounded-xl shadow-xl border border-gray-100
                            overflow-hidden z-[100] relative">
              <div className="px-4 py-1.5 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  {mobileResults.length} result{mobileResults.length !== 1 ? 's' : ''}
                  {mobileCat && <span className="text-blue-500 font-semibold ml-1">in {mobileCat.value}</span>}
                </span>
                {mobileCat && (
                  <button
                    onMouseDown={(e) => { e.preventDefault(); setMobileCat(null); }}
                    className="text-[10px] text-gray-400 hover:text-red-500 transition-colors flex items-center gap-0.5"
                  >
                    <X className="w-3 h-3" /> Clear
                  </button>
                )}
              </div>
              <ul>
                {mobileResults.map((product) => (
                  <li key={product.id}>
                    <button
                      onMouseDown={() => goToProduct(product)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-blue-50 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 ${product.bgColor || 'bg-gray-200'}`}>
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 truncate font-medium">{product.name}</p>
                        <p className="text-xs text-gray-400 capitalize">{product.categoryId} · {product.subcategoryId}</p>
                      </div>
                      {product.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full flex-shrink-0">
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

      {/* ── Nav Bar ───────────────────────────────────────────────────────── */}
      <nav className={`bg-gray-900 text-white ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="w-full px-4 sm:px-6">
          <ul className="flex flex-col lg:flex-row lg:items-center justify-between">

            <div className="flex flex-col lg:flex-row lg:gap-1">
              {navItems.map((item) => (
                <li key={item.label} className="border-b lg:border-b-0 border-gray-800">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-5 py-3.5 hover:bg-gray-800 transition-colors text-sm font-medium
                       whitespace-nowrap ${isActive ? 'text-blue-400 bg-gray-800' : 'text-white'}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </div>

            {/* Social Icons */}
            <li className="flex items-center gap-2.5 px-5 py-3.5 flex-shrink-0">
              <a href="#" aria-label="LinkedIn"
                 className="w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110 shadow">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Telegram"
                 className="w-7 h-7 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 shadow">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp"
                 className="w-7 h-7 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110 shadow">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a href="#" aria-label="X / Twitter"
                 className="w-7 h-7 rounded-full bg-black hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110 shadow">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
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