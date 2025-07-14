import React from "react";

export const RadioGroup = ({
  label,
  value,
  onChange,
  options = [],
  error = "",
  required = true,
}) => {
  const name = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <fieldset className="mb-6 animate-fade-in">
      <legend className="block text-sm text-gray-300 mb-3">
        {label} {required && <span className="text-red-500">*</span>}
      </legend>

      <div className="space-y-2">
        {options.map((option) => {
          const optionValue =
            typeof option === "object" ? option.value : option;
          const displayLabel =
            typeof option === "object" ? option.label : option;
          const isDisabled =
            typeof option === "object" ? option.disabled : false;

          return (
            <label
              key={optionValue}
              htmlFor={`${name}-${optionValue}`}
              className={`flex items-center cursor-pointer transition-all duration-200 p-2 rounded-lg ${
                isDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-800"
              }`}
            >
              <input
                type="radio"
                id={`${name}-${optionValue}`}
                name={name}
                value={optionValue}
                checked={value === optionValue}
                onChange={(e) => onChange(e.target.value)}
                disabled={isDisabled}
                aria-invalid={!!error}
                className="w-4 h-4 text-red-500 bg-gray-800 border-gray-600 focus:ring-red-500 focus:ring-2 transition-all duration-200"
              />
              <span className="ml-2 text-gray-300">{displayLabel}</span>
            </label>
          );
        })}
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1 animate-slide-up">{error}</p>
      )}
    </fieldset>
  );
};
