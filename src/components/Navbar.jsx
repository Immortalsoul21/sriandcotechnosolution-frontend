import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Check, Search } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { products, categories } from '@/data/products1';
import SearchBar from './Searchbar';
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

const NAV_ITEMS = [
  { label: 'Home',           path: '/home' },
  { label: 'About Us',       path: '/about' },
  { label: 'Products',       path: '/products' },
  { label: 'News & Updates',       path: '/features' },
];

export const SocialIcons = ({ size = 'sm' }) => {
  const open = (url) => window.open(url, '_blank', 'noopener,noreferrer');
  const sm = size === 'sm';
  return (
    <div className={`flex items-center ${sm ? 'gap-1.5 sm:gap-2' : 'gap-2 sm:gap-3'}`}>
      {SOCIAL.map((s) => (
        <button
          key={s.label}
          onClick={() => open(s.url)}
          aria-label={s.label}
          className={`
            ${sm ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-7 h-7 sm:w-9 sm:h-9'}
            rounded-full ${s.bg} flex items-center justify-center
            transition-all duration-200 hover:scale-110 hover:-translate-y-0.5
            shadow-sm cursor-pointer
          `}
        >
          <svg className={`${sm ? 'w-3 h-3 sm:w-3.5 sm:h-3.5' : 'w-3.5 h-3.5 sm:w-4 sm:h-4'} fill-white`} viewBox="0 0 24 24">
            <path d={s.path} />
          </svg>
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen,    setIsMenuOpen]    = useState(false);
  const [mobileQuery,   setMobileQuery]   = useState('');
  const [mobileResults, setMobileResults] = useState([]);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [mobileCat,     setMobileCat]     = useState(null);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const [scrolled,      setScrolled]      = useState(false);

  const mobileWrapperRef = useRef(null);
  const navigate         = useNavigate();

  /* scroll shadow */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* mobile search */
  useEffect(() => {
    const q = mobileQuery.trim().toLowerCase();
    if (!q) { setMobileResults([]); setMobileOpen(false); return; }
    let pool = products;
    if (mobileCat) pool = pool.filter(p => p.categoryId === mobileCat.categoryId);
    const matched = pool.filter(p => p.name.toLowerCase().includes(q)).slice(0, 6);
    setMobileResults(matched);
    setMobileOpen(matched.length > 0);
  }, [mobileQuery, mobileCat]);

  /* outside click */
  useEffect(() => {
    const h = (e) => {
      if (mobileWrapperRef.current && !mobileWrapperRef.current.contains(e.target)) {
        setMobileOpen(false); setMobileCatOpen(false);
      }
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  /* close mobile menu on lg */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const h  = (e) => { if (e.matches) setIsMenuOpen(false); };
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  const goToProduct = (product) => {
    const slug = product.name.toLowerCase().replace(/\s+/g, '-');
    setMobileQuery(''); setMobileOpen(false); setIsMenuOpen(false);
    navigate(`/products/${product.categoryId}/${slug}`, { state: { product } });
  };

  return (
    <div className={`w-full sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>

      {/* ── TOP BAR ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-3 sm:px-6 py-2.5 sm:py-3.5">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2 sm:gap-6">

          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group">
            <div className="relative">
              <img
                src={logo}
                alt="Sri and Co logo"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover flex-shrink-0
                           shadow-md ring-2 ring-sky-100 group-hover:ring-sky-300 transition-all duration-300"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-gray-900 text-xs sm:text-base leading-tight whitespace-nowrap tracking-tight">
                Sri and Co
              </div>
              <div className="text-gray-400 text-[9px] sm:text-[11px] whitespace-nowrap tracking-wider uppercase font-medium">
                Techno Solutions
              </div>
            </div>
          </Link>

          {/* Desktop search */}
          <div className="hidden lg:block flex-1 min-w-0 max-w-2xl">
            <SearchBar />
          </div>

          {/* Desktop social */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0 ml-auto">
            <SocialIcons size="sm" />
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden ml-auto p-1.5 sm:p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen
              ? <X size={20} strokeWidth={2} />
              : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>

        {/* ── MOBILE SEARCH ──────────────────────────────────────────── */}
        <div className="lg:hidden mt-2.5 max-w-[1400px] mx-auto" ref={mobileWrapperRef}>
          <div className="flex border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm focus-within:border-sky-400 focus-within:shadow-sky-100 focus-within:shadow-md transition-all">
            <div className="flex items-center pl-3 text-gray-400 flex-shrink-0">
              <Search size={14} />
            </div>
            <input
              type="text"
              placeholder={mobileCat ? `Search in ${mobileCat.value}…` : 'Search products…'}
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              className="flex-1 px-2 py-2 outline-none text-gray-700 text-xs bg-transparent min-w-0"
              autoComplete="off"
            />
            <div className="w-px bg-gray-100 my-1.5 flex-shrink-0" />
            <button
              onMouseDown={(e) => { e.preventDefault(); setMobileCatOpen(p => !p); setMobileOpen(false); }}
              className="flex items-center gap-1 px-2.5 py-2 text-gray-600 hover:bg-gray-50 transition-colors w-[76px] flex-shrink-0"
            >
              <span className="text-[10px] truncate flex-1 text-left font-medium">
                {mobileCat ? mobileCat.value : 'All'}
              </span>
              <ChevronDown className={`w-3 h-3 text-gray-400 flex-shrink-0 transition-transform duration-200 ${mobileCatOpen ? 'rotate-180' : ''}`} />
            </button>
            <button
              onMouseDown={(e) => { e.preventDefault(); if (mobileResults.length > 0) setMobileOpen(true); }}
              className="px-3.5 py-2 bg-sky-600 text-white text-[10px] font-semibold hover:bg-sky-700 transition-colors flex-shrink-0"
            >
              Go
            </button>
          </div>

          {/* Mobile category dropdown */}
          {mobileCatOpen && (
            <div className="mt-1.5 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[110] relative animate-[fadeSlideDown_0.15s_ease]">
              <div className="px-3 py-2 bg-gray-50 border-b border-gray-100">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Filter by Category</span>
              </div>
              <ul className="py-1 max-h-52 overflow-y-auto">
                <li>
                  <button
                    onMouseDown={(e) => { e.preventDefault(); setMobileCat(null); setMobileCatOpen(false); }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-xs transition-colors
                      ${!mobileCat ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    All Categories
                    {!mobileCat && <Check className="w-3 h-3 text-sky-500" />}
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.categoryId}>
                    <button
                      onMouseDown={(e) => { e.preventDefault(); setMobileCat(cat); setMobileCatOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-xs border-t border-gray-50 transition-colors
                        ${mobileCat?.categoryId === cat.categoryId ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {cat.value}
                      {mobileCat?.categoryId === cat.categoryId && <Check className="w-3 h-3 text-sky-500" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mobile results */}
          {mobileOpen && (
            <div className="mt-1.5 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100] relative">
              <div className="px-3 py-2 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                <span className="text-[10px] text-gray-400">
                  {mobileResults.length} result{mobileResults.length !== 1 ? 's' : ''}
                  {mobileCat && <span className="text-sky-500 font-semibold ml-1">in {mobileCat.value}</span>}
                </span>
                {mobileCat && (
                  <button
                    onMouseDown={(e) => { e.preventDefault(); setMobileCat(null); }}
                    className="text-[10px] text-gray-400 hover:text-red-400 flex items-center gap-0.5 transition-colors"
                  >
                    <X className="w-3 h-3" /> Clear
                  </button>
                )}
              </div>
              <ul className="max-h-56 overflow-y-auto divide-y divide-gray-50">
                {mobileResults.map(product => (
                  <li key={product.id}>
                    <button
                      onMouseDown={() => goToProduct(product)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-sky-50 transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 ${product.bgColor || 'bg-gray-100'}`}>
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-800 truncate font-medium">{product.name}</p>
                        <p className="text-[10px] text-gray-400 capitalize mt-0.5">{product.categoryId} · {product.subcategoryId}</p>
                      </div>
                      {product.badge && (
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-sky-100 text-sky-700 rounded-full flex-shrink-0">
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

      {/* ── NAV BAR ─────────────────────────────────────────────────── */}
      <nav className={`bg-gray-900 text-white ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6">
          <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

            <div className="flex flex-col lg:flex-row">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.label} className="border-b lg:border-b-0 border-gray-800/60">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative block px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-medium
                       whitespace-nowrap transition-colors duration-200
                       hover:bg-gray-800 hover:text-sky-300
                       ${isActive
                         ? 'text-sky-400 bg-gray-800 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sky-400 lg:after:block'
                         : 'text-gray-200'}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </div>

            {/* Social — mobile only (desktop is in top bar) */}
            <li className="lg:hidden px-4 py-3 border-t border-gray-800/60">
              <SocialIcons size="sm" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;