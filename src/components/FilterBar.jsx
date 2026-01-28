import { useState } from "react";
import { Filter, X, ChevronRight } from "lucide-react";

const FilterBar = ({ onFilterChange, productCount }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        priceRange: 'all',
        rating: 'all',
        badge: 'all'
    });

    const handleFilterChange = (filterType, value) => {
        const newFilters = { ...filters, [filterType]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const clearFilters = () => {
        const clearedFilters = {
            priceRange: 'all',
            rating: 'all',
            badge: 'all'
        };
        setFilters(clearedFilters);
        onFilterChange(clearedFilters);
    };

    return (
        <div className="relative inline-block text-left w-64">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between bg-[#1a2230] text-gray-300 px-4 py-2.5 rounded hover:bg-[#252f3f] transition-colors"
            >
                <span className="text-sm font-medium">Filter products...</span>
                {isOpen ? <X className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-full md:w-80 bg-white rounded-lg shadow-2xl z-50 border border-gray-100 p-6 origin-top-right">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-4">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                            <Filter className="w-4 h-4" />
                            Filters
                        </h3>
                        <button
                            onClick={clearFilters}
                            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                            Clear All
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Price Range
                            </label>
                            <select
                                value={filters.priceRange}
                                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            >
                                <option value="all">All Prices</option>
                                <option value="0-100">Under $100</option>
                                <option value="100-500">$100 - $500</option>
                                <option value="500-1000">$500 - $1000</option>
                                <option value="1000+">Over $1000</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Rating
                            </label>
                            <select
                                value={filters.rating}
                                onChange={(e) => handleFilterChange('rating', e.target.value)}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            >
                                <option value="all">All Ratings</option>
                                <option value="4.5+">4.5+ Stars</option>
                                <option value="4.0+">4.0+ Stars</option>
                                <option value="3.5+">3.5+ Stars</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Product Type
                            </label>
                            <div className="space-y-3 pt-1">
                                <label className="flex items-center group cursor-pointer">
                                    <input
                                        type="radio"
                                        name="badge"
                                        value="all"
                                        checked={filters.badge === 'all'}
                                        onChange={(e) => handleFilterChange('badge', e.target.value)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-offset-0"
                                    />
                                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">All Products</span>
                                </label>
                                <label className="flex items-center group cursor-pointer">
                                    <input
                                        type="radio"
                                        name="badge"
                                        value="Popular"
                                        checked={filters.badge === 'Popular'}
                                        onChange={(e) => handleFilterChange('badge', e.target.value)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-offset-0"
                                    />
                                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">Popular</span>
                                </label>
                                <label className="flex items-center group cursor-pointer">
                                    <input
                                        type="radio"
                                        name="badge"
                                        value="New"
                                        checked={filters.badge === 'New'}
                                        onChange={(e) => handleFilterChange('badge', e.target.value)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-offset-0"
                                    />
                                    <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">New Arrivals</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterBar;
