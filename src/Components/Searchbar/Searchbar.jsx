import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({
  id,
  type = "text",
  value,
  placeholder,
  onChange,
  onSuggestionSelect,
  suggestions,
  width = "w-full",
  showIcon = true,
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Filter suggestions based on user input
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    onChange(e);
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(userInput.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
    setActiveIndex(-1);
  };

  const handleSuggestionClick = (suggestion) => {
    onSuggestionSelect(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      activeIndex >= 0 &&
      filteredSuggestions.length > 0
    ) {
      onSuggestionSelect(filteredSuggestions[activeIndex]);
      setShowSuggestions(false);
    } else if (e.key === "ArrowDown") {
      if (activeIndex < filteredSuggestions.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    } else if (e.key === "ArrowUp") {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="font-bold text-blue-600">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className={`relative ${width}`}>
      <div className="flex items-center">
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`h-10 block py-2 pl-3 pr-10 text-sm text-black border rounded-md border-gray-300
             focus:outline-none focus:ring-gray-700 focus:border-blue-500 ${width}`}
        />
        {showIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FiSearch style={{ opacity: 0.5 }} />
          </div>
        )}
      </div>
      {showSuggestions && value && (
        <ul
          className={`absolute z-10 mt-1 bg-white border border-gray-300 
        rounded-md shadow-lg max-h-60 overflow-y-auto ${width}`}
        >
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className={`px-4 py-2 text-sm cursor-pointer ${
                  index === activeIndex
                    ? "bg-blue-100 font-bold"
                    : "hover:bg-blue-100"
                }`}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {getHighlightedText(suggestion, value)}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-red-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
