import { useState } from "react";
import { X, ChevronRight } from "lucide-react";

const FilterBar = ({ onFilterChange, subcategories = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState('all');

  const handleSubSelect = (subId) => {
    setSelectedSub(subId);
    onFilterChange({ subcategoryId: subId });
    setIsOpen(false);
  };

  const selectedLabel = subcategories.find(s => s.subcategoryId === selectedSub)?.value || 'All Products';

  return (
    <div className="relative inline-block text-left w-40 sm:w-64">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#1a2230] text-gray-300
                   px-2.5 sm:px-4 py-2 sm:py-2.5 rounded hover:bg-[#252f3f] transition-colors
                   border border-gray-700 shadow-sm"
      >
        <span className="text-[11px] sm:text-sm font-medium truncate">
          {selectedSub === 'all' ? 'Filter products...' : selectedLabel}
        </span>
        {isOpen
          ? <X className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 ml-1" />
          : <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 ml-1" />
        }
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-full bg-white rounded-lg shadow-2xl z-50
                        border border-gray-100 overflow-hidden origin-top-right">
          <div className="py-1">
            <button
              onClick={() => handleSubSelect('all')}
              className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm transition-colors
                          ${selectedSub === 'all' ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              All Products
            </button>
            {subcategories.map(sub => (
              <button
                key={sub.subcategoryId}
                onClick={() => handleSubSelect(sub.subcategoryId)}
                className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm transition-colors
                            border-t border-gray-50
                            ${selectedSub === sub.subcategoryId ? 'bg-sky-50 text-sky-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
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