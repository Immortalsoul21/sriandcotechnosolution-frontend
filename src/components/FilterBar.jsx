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
        <div className="mb-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-full flex items-center justify-between bg-gray-800 text-white px-4 py-3 rounded-lg mb-4"
            >
                <span className="flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filter products
                </span>
                {isOpen ? <X className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>

            <div className={`${isOpen ? 'block' : 'hidden'} lg:block bg-white rounded-lg shadow-md p-6`}>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                        <Filter className="w-5 h-5" />
                        Filters
                    </h3>
                    <button
                        onClick={clearFilters}
                        className="text-sm text-blue-600 hover:text-blue-700"
                    >
                        Clear All
                    </button>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                    {productCount} products found
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price Range
                        </label>
                        <select
                            value={filters.priceRange}
                            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Prices</option>
                            <option value="0-100">Under $100</option>
                            <option value="100-500">$100 - $500</option>
                            <option value="500-1000">$500 - $1000</option>
                            <option value="1000+">Over $1000</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Rating
                        </label>
                        <select
                            value={filters.rating}
                            onChange={(e) => handleFilterChange('rating', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All Ratings</option>
                            <option value="4.5+">4.5+ Stars</option>
                            <option value="4.0+">4.0+ Stars</option>
                            <option value="3.5+">3.5+ Stars</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Product Type
                        </label>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="badge"
                                    value="all"
                                    checked={filters.badge === 'all'}
                                    onChange={(e) => handleFilterChange('badge', e.target.value)}
                                    className="mr-2"
                                />
                                All Products
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="badge"
                                    value="Popular"
                                    checked={filters.badge === 'Popular'}
                                    onChange={(e) => handleFilterChange('badge', e.target.value)}
                                    className="mr-2"
                                />
                                Popular
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="badge"
                                    value="New"
                                    checked={filters.badge === 'New'}
                                    onChange={(e) => handleFilterChange('badge', e.target.value)}
                                    className="mr-2"
                                />
                                New Arrivals
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
