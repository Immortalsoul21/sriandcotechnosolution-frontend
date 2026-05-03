import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products, categories } from '@/data/products2';

export default function SearchBar() {
  const [searchQuery,      setSearchQuery]      = useState('');
  const [results,          setResults]          = useState([]);
  const [isResultsOpen,    setIsResultsOpen]    = useState(false);
  const [highlighted,      setHighlighted]      = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCatOpen,        setIsCatOpen]        = useState(false);

  const navigate   = useNavigate();
  const wrapperRef = useRef(null);
  const inputRef   = useRef(null);

  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) { setResults([]); setIsResultsOpen(false); setHighlighted(-1); return; }

    let pool = selectedCategory
      ? products.filter((p) => p.categoryId === selectedCategory.categoryId)
      : products;

    const matched = pool.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 8);
    setResults(matched);
    setIsResultsOpen(matched.length > 0);
    setHighlighted(-1);
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsResultsOpen(false);
        setIsCatOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const goToProduct = (product) => {
    const slug = product.name.toLowerCase().replace(/\s+/g, '-');
    setSearchQuery('');
    setIsResultsOpen(false);
    setResults([]);
    navigate(
      `/products/${encodeURIComponent(product.categoryId)}/${slug}`,
      { state: { product } }
    );
  };

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setIsCatOpen(false);
    setHighlighted(-1);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (!isResultsOpen) return;
    if (e.key === 'ArrowDown')  { e.preventDefault(); setHighlighted((p) => Math.min(p + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp')   { e.preventDefault(); setHighlighted((p) => Math.max(p - 1, 0)); }
    else if (e.key === 'Enter')     { e.preventDefault(); if (highlighted >= 0 && results[highlighted]) goToProduct(results[highlighted]); }
    else if (e.key === 'Escape')    { setIsResultsOpen(false); }
  };

  const highlightMatch = (name, q) => {
    const idx = name.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return <span>{name}</span>;
    return (
      <>
        {name.slice(0, idx)}
        <span className="font-bold text-blue-600">{name.slice(idx, idx + q.length)}</span>
        {name.slice(idx + q.length)}
      </>
    );
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-4xl mx-auto">

      {/* Main bar */}
      <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">

        <input
          ref={inputRef}
          type="text"
          placeholder={selectedCategory ? `Search in ${selectedCategory.value}…` : 'Search Product'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setIsResultsOpen(true)}
          className="flex-1 px-4 py-3 outline-none text-gray-700 text-sm bg-white min-w-0"
          autoComplete="off"
        />

        {searchQuery && (
          <button
            onMouseDown={(e) => { e.preventDefault(); setSearchQuery(''); setIsResultsOpen(false); inputRef.current?.focus(); }}
            className="flex items-center justify-center px-2 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            aria-label="Clear"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="w-px bg-gray-300 my-2 flex-shrink-0" />

        {/* Category dropdown trigger */}
        <button
          onMouseDown={(e) => { e.preventDefault(); setIsCatOpen((prev) => !prev); setIsResultsOpen(false); }}
          className="flex items-center justify-between gap-2 px-5 py-3 text-gray-700
                     hover:bg-gray-50 transition-colors focus:outline-none w-48 lg:w-56 flex-shrink-0"
        >
          <span className="text-sm truncate flex-1 text-left">
            {selectedCategory ? selectedCategory.value : 'All Categories'}
          </span>
          <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${isCatOpen ? 'rotate-180' : ''}`} />
        </button>

        <div className="w-px bg-gray-300 my-2 flex-shrink-0" />

        <button
          onMouseDown={(e) => { e.preventDefault(); if (results.length > 0) setIsResultsOpen(true); inputRef.current?.focus(); }}
          className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors flex-shrink-0"
        >
          Search
        </button>
      </div>

      {/* Category dropdown menu */}
      {isCatOpen && (
        <div className="absolute top-full right-0 mt-1 w-72 bg-white rounded-xl shadow-xl
                        border border-gray-100 z-[110] py-1 overflow-hidden">
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Filter by Category</span>
          </div>

          <button
            onMouseDown={(e) => { e.preventDefault(); handleSelectCategory(null); }}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors
                        ${!selectedCategory ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            All Categories
            {!selectedCategory && <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />}
          </button>

          {categories.map((cat) => (
            <button
              key={cat.categoryId}
              onMouseDown={(e) => { e.preventDefault(); handleSelectCategory(cat); }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm
                          border-t border-gray-50 transition-colors text-left
                          ${selectedCategory?.categoryId === cat.categoryId
                            ? 'bg-blue-50 text-blue-600 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'}`}
            >
              <span className="truncate flex-1 pr-2">{cat.value}</span>
              {selectedCategory?.categoryId === cat.categoryId && (
                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Results dropdown */}
      {isResultsOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl
                        border border-gray-100 z-[100] overflow-hidden">

          <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">
              {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
              {selectedCategory && (
                <span className="ml-1 font-semibold text-blue-500">in {selectedCategory.value}</span>
              )}
            </span>
            {selectedCategory && (
              <button
                onMouseDown={(e) => { e.preventDefault(); handleSelectCategory(null); }}
                className="text-[10px] text-gray-400 hover:text-red-500 transition-colors flex items-center gap-0.5"
              >
                <X className="w-3 h-3" /> Clear filter
              </button>
            )}
          </div>

          <ul>
            {results.map((product, i) => (
              <li key={product.id}>
                <button
                  onMouseDown={() => goToProduct(product)}
                  onMouseEnter={() => setHighlighted(i)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-100
                              ${highlighted === i ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                >
                  <div className={`w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 ${product.bgColor || 'bg-gray-200'}`}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 truncate">
                      {highlightMatch(product.name, searchQuery)}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 truncate">
                      {product.categoryId}
                      {product.subcategoryId ? ` · ${product.subcategoryId}` : ''}
                    </p>
                  </div>
                  {product.badge && (
                    <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center gap-3">
            <span className="text-[10px] text-gray-400">↑↓ navigate</span>
            <span className="text-[10px] text-gray-400">↵ select</span>
            <span className="text-[10px] text-gray-400">Esc close</span>
          </div>
        </div>
      )}
    </div>
  );
}