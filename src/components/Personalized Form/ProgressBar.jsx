const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
    <div
      className="bg-red-500 h-2 rounded-full transition-all duration-500 ease-out"
      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
    ></div>
  </div>
);

export default ProgressBar;
