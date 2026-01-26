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
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-stretch overflow-hidden rounded-full bg-white shadow-md">
        {/* Search Input Section */}
        <div className="flex-1 min-w-0">
          <input
            type="text"
            placeholder="Search Product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full h-full px-6 py-4 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none text-base text-center placeholder:text-center"
          />
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gray-300 my-2 flex-shrink-0"></div>

        {/* Category Dropdown Section */}
        <div className="relative bg-gray-100 flex-shrink-0">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 sm:px-6 py-4 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none h-full w-48 sm:w-56"
          >
            <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
            <span className="text-base truncate flex-1 text-left">{selectedCategory}</span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors text-gray-700 first:rounded-t-lg last:rounded-b-lg"
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
          className="px-6 sm:px-8 py-4 bg-gray-900 text-white font-medium rounded-r-full hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 flex items-center justify-center flex-shrink-0"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}