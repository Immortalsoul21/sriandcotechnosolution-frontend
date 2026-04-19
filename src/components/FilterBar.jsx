import { useState, useRef, useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

/**
 * FilterBar Component
 * A compact dropdown for selecting options (like subcategories).
 */
const FilterBar = ({ value, onChange, options = [], defaultLabel = "All Products", idKey = "subcategoryId", labelKey = "value" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (id) => {
        onChange(id);
        setIsOpen(false);
    };

    const selectedLabel = options.find(o => o[idKey] === value)?.[labelKey] || defaultLabel;

    return (
        <div className="relative inline-block text-left w-full sm:w-64" ref={dropdownRef}>
            {/* Dropdown Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between bg-[#1a2230] text-gray-300 px-4 py-2.5 rounded hover:bg-[#252f3f] transition-colors border border-gray-700 shadow-sm"
            >
                <span className="text-sm font-medium truncate">
                    {value === 'all' || !value ? defaultLabel : selectedLabel}
                </span>
                {isOpen ? <X className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {/* Dropdown Menu Overlay */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-full bg-white rounded-lg shadow-2xl z-50 border border-gray-100 overflow-hidden origin-top-right max-h-60 overflow-y-auto">
                    <div className="py-1">
                        {/* Default 'All' Option */}
                        <button
                            onClick={() => handleSelect('all')}
                            className={`w-full text-left px-4 py-3 text-sm transition-colors ${value === 'all' || !value ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                            {defaultLabel}
                        </button>

                        {/* Options */}
                        {options.map(opt => (
                            <button
                                key={opt[idKey]}
                                onClick={() => handleSelect(opt[idKey])}
                                className={`w-full text-left px-4 py-3 text-sm transition-colors border-t border-gray-50 ${value === opt[idKey] ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                {opt[labelKey]}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterBar;