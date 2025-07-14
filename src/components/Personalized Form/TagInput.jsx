import React, { useState } from "react";

export const TagInput = ({
  label,
  values = [],
  onChange = () => {},
  placeholder = "",
  required = false,
  error = "",
}) => {
  const [inputValue, setInputValue] = useState("");

  const sanitized = (str) => str.trim().replace(/\s+/g, " ");

  const addTag = () => {
    const tag = sanitized(inputValue);
    if (tag && !values.includes(tag)) {
      onChange([...values, tag]);
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove) => {
    onChange(values.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="mb-6 animate-fade-in">
      <label className="block text-sm text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          aria-label={label}
          aria-invalid={!!error}
          className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 transform hover:scale-[1.01]"
        />
        <button
          type="button"
          onClick={addTag}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
        >
          Add
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1 animate-slide-up">{error}</p>
      )}

      <div className="flex flex-wrap gap-2">
        {values.map((tag) => (
          <span
            key={tag}
            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center gap-2 animate-scale-in"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              aria-label={`Remove ${tag}`}
              className="text-red-400 hover:text-red-300 transition-colors duration-200"
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};
