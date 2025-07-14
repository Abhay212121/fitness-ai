import React from "react";

export const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  error = "",
  placeholder = "",
  required = true,
  name,
  autoComplete = "off",
  min,
  max,
}) => {
  const inputId = `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="mb-4 animate-fade-in">
      <label
        htmlFor={inputId}
        className="block text-sm text-gray-300 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={inputId}
        name={name || inputId}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={min}
        max={max}
        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 transform hover:scale-[1.01] ${
          error ? "border-red-500 animate-pulse" : "border-gray-600"
        } ${type == "number" ? "no-spinner" : ""}`}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1 animate-slide-up">{error}</p>
      )}
    </div>
  );
};
