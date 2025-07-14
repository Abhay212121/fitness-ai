export const CheckboxGroup = ({
  label,
  values,
  onChange,
  options,
  required = false,
}) => (
  <div className="mb-6 animate-fade-in">
    <label className="block text-sm  text-gray-300 mb-3">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center cursor-pointer transition-all duration-200 hover:bg-gray-800 p-2 rounded-lg"
        >
          <input
            type="checkbox"
            checked={values.includes(option)}
            onChange={() => onChange(option)}
            className="w-4 h-4 text-red-500 bg-gray-800 border-gray-600 rounded focus:ring-red-500 focus:ring-2 transition-all duration-200"
          />
          <span className="ml-2 text-gray-300">{option}</span>
        </label>
      ))}
    </div>
  </div>
);
