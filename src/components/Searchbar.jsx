import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    'All Categories',
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports & Outdoors',
    'Books',
    'Toys & Games',
    'Beauty & Health'
  ];

  const handleSearch = () => {
    console.log('Search:', searchQuery, 'Category:', selectedCategory);
    // Add your search logic here
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
      <div className="flex flex-col sm:flex-row items-stretch overflow-hidden rounded-2xl sm:rounded-full bg-white shadow-md border border-gray-100">
        {/* Search Input Section */}
        <div className="flex-1 min-w-0 flex items-center bg-gray-50/50">
          <input
            type="text"
            placeholder="Search Product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-5 sm:px-6 py-3 sm:py-4 bg-transparent text-gray-700 placeholder:text-gray-400 focus:outline-none text-base"
          />
        </div>

        {/* Vertical Divider (Hidden on mobile) */}
        <div className="hidden sm:block w-px bg-gray-200 my-2 flex-shrink-0"></div>

        {/* Category Dropdown Section */}
        <div className="relative bg-white sm:bg-transparent border-t sm:border-t-0 border-gray-100 flex-shrink-0">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between gap-2 px-5 sm:px-6 py-3 sm:py-4 text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none h-full w-full sm:w-48 lg:w-56"
          >
            <span className="text-sm sm:text-base truncate flex-1 text-left">{selectedCategory}</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm sm:text-base ${selectedCategory === category ? 'text-blue-600 bg-blue-50/50 font-medium' : 'text-gray-700'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Button Section */}
        <button
          onClick={handleSearch}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white font-medium hover:bg-black transition-colors focus:outline-none flex items-center justify-center flex-shrink-0"
        >
          <Search className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
}