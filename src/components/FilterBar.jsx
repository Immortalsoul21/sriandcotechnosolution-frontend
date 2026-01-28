import { useState } from "react";
import { Filter, X, ChevronRight } from "lucide-react";

/**
 * FilterBar Component
 * A compact dropdown for selecting subcategories within a category.
 * @param {Function} onFilterChange - Callback when a new filter is selected.
 * @param {Array} subcategories - List of subcategories to display.
 */
const FilterBar = ({ onFilterChange, subcategories = [] }) => {
    // UI states
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSub, setSelectedSub] = useState('all');

    /**
     * handleSubSelect
     * Updates the selected subcategory and notifies parent component.
     * @param {string} subId - The ID of the selected subcategory (or 'all').
     */
    const handleSubSelect = (subId) => {
        setSelectedSub(subId);
        onFilterChange({ subcategoryId: subId });
        setIsOpen(false); // Close dropdown after selection
    };

    // Find the label for the currently selected filter
    const selectedLabel = subcategories.find(s => s.subcategoryId === selectedSub)?.value || 'All Products';

    return (
        <div className="relative inline-block text-left w-64">
            {/* Dropdown Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between bg-[#1a2230] text-gray-300 px-4 py-2.5 rounded hover:bg-[#252f3f] transition-colors border border-gray-700 shadow-sm"
            >
                <span className="text-sm font-medium truncate">
                    {selectedSub === 'all' ? 'Filter products...' : selectedLabel}
                </span>
                {isOpen ? <X className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {/* Dropdown Menu Overlay */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-full bg-white rounded-lg shadow-2xl z-50 border border-gray-100 overflow-hidden origin-top-right">
                    <div className="py-1">
                        {/* Default 'All' Option */}
                        <button
                            onClick={() => handleSubSelect('all')}
                            className={`w-full text-left px-4 py-3 text-sm transition-colors ${selectedSub === 'all' ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                            All Products
                        </button>

                        {/* Category specific subcategories */}
                        {subcategories.map(sub => (
                            <button
                                key={sub.subcategoryId}
                                onClick={() => handleSubSelect(sub.subcategoryId)}
                                className={`w-full text-left px-4 py-3 text-sm transition-colors border-t border-gray-50 ${selectedSub === sub.subcategoryId ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                {sub.value}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterBar;
