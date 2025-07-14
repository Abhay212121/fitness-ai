export const HeightInputs = ({
  updateFormData,
  errors = {},
  formData = {},
}) => {
  const handleChange = (field) => (e) => {
    updateFormData(field, e.target.value);
  };

  return (
    <div className="mb-4 animate-fade-in">
      <label className="block text-sm text-gray-300 mb-2">
        Height <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-2 gap-4">
        {/* Feet Input */}
        <div>
          <input
            type="number"
            value={formData.heightFeet || ""}
            onChange={handleChange("heightFeet")}
            onWheel={(e) => e.target.blur()}
            placeholder="5"
            min="1"
            max="8"
            step="1"
            className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 transform hover:scale-[1.01] ${
              errors.heightFeet
                ? "border-red-500 animate-pulse"
                : "border-gray-600"
            }`}
          />
          <label className="block text-xs text-gray-400 mt-1">Feet</label>
          {errors.heightFeet && (
            <p className="text-red-500 text-sm mt-1 animate-slide-up">
              {errors.heightFeet}
            </p>
          )}
        </div>

        {/* Inches Input */}
        <div>
          <input
            type="number"
            value={formData.heightInches || ""}
            onChange={handleChange("heightInches")}
            placeholder="8"
            onWheel={(e) => e.target.blur()}
            min="0"
            max="11"
            step="1"
            className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 transform hover:scale-[1.01] ${
              errors.heightInches
                ? "border-red-500 animate-pulse"
                : "border-gray-600"
            }`}
          />
          <label className="block text-xs text-gray-400 mt-1">Inches</label>
          {errors.heightInches && (
            <p className="text-red-500 text-sm mt-1 animate-slide-up">
              {errors.heightInches}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
