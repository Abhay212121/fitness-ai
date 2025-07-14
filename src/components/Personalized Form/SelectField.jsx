export const SelectField = ({
  label,
  value,
  onChange,
  options,
  error,
  required = true,
}) => (
  <div className="mb-4 animate-fade-in">
    <label className="block text-sm text-gray-300 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>

    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 pr-14 bg-gray-800 border rounded-lg text-white appearance-none
    placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 transform hover:scale-[1.01] ${
      error ? "border-red-500 animate-pulse" : "border-gray-600"
    }`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

      {/* Custom dropdown icon */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 text-sm">
        ▼
      </div>
    </div>

    {error && (
      <p className="text-red-500 text-sm mt-1 animate-slide-up">{error}</p>
    )}
  </div>
);
