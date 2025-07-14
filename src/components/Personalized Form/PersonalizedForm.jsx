import React, { useContext, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { HeightInputs } from "./HeightInput";
import { RadioGroup } from "./RadioGroup";
import { TagInput } from "./TagInput";
import { CheckboxGroup } from "./CheckboxGroup";
import UserContext from "../../context/UserContext";

const renderStep = (
  currentStep,
  updateFormData,
  handleArrayUpdate,
  formData,
  errors
) => {
  switch (currentStep) {
    case 1:
      return (
        <div className="space-y-4 animate-fade-in">
          <div className="text-2xl font-bold text-white mb-6">
            Welcome, <span className="text-red-400">{formData.fullName}</span>!
          </div>
          <SelectField
            label="Gender"
            value={formData.gender}
            onChange={(value) => updateFormData("gender", value)}
            options={["Male", "Female"]}
            error={errors.gender}
          />
          <InputField
            label="Age"
            type="number"
            value={formData.age}
            min={5}
            max={100}
            onChange={(value) => updateFormData("age", value)}
            error={errors.age}
            placeholder="Enter your age"
          />
          <HeightInputs
            updateFormData={updateFormData}
            formData={formData}
            errors={errors}
          />
          <InputField
            label="Weight (kg)"
            type="number"
            value={formData.weight}
            onChange={(value) => updateFormData("weight", value)}
            error={errors.weight}
            min={20}
            max={200}
            placeholder="Enter your weight in kg"
          />
        </div>
      );

    case 2:
      return (
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-2xl font-bold text-white mb-6">
            Lifestyle & Activity
          </h2>
          <SelectField
            label="Occupation Type"
            value={formData.occupationType}
            onChange={(value) => updateFormData("occupationType", value)}
            options={["Desk-bound", "Moderately Active", "Very Active"]}
            error={errors.occupationType}
          />
          <SelectField
            label="Weekly Physical Activity"
            value={formData.weeklyActivity}
            onChange={(value) => updateFormData("weeklyActivity", value)}
            options={["0–1 days", "2–3 days", "4–5 days", "6–7 days"]}
            error={errors.weeklyActivity}
          />
          <SelectField
            label="Stress Level"
            value={formData.stressLevel}
            onChange={(value) => updateFormData("stressLevel", value)}
            options={["Low", "Medium", "High"]}
            error={errors.stressLevel}
          />
        </div>
      );

    case 3:
      return (
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-2xl font-bold text-white mb-6">
            Dietary Preferences
          </h2>
          <RadioGroup
            label="Diet Type"
            value={formData.dietType}
            onChange={(value) => updateFormData("dietType", value)}
            options={["Veg", "Non-Veg", "Vegan", "Eggetarian"]}
            error={errors.dietType}
          />
          <TagInput
            label="Allergies"
            values={formData.allergies}
            onChange={(value) => updateFormData("allergies", value)}
            placeholder="Enter food allergies"
          />
          <TagInput
            label="Food Dislikes"
            values={formData.foodDislikes}
            onChange={(value) => updateFormData("foodDislikes", value)}
            placeholder="Enter foods you dislike"
          />
          <TagInput
            label="Favorite Foods (Optional)"
            values={formData.favoritefoods}
            onChange={(value) => updateFormData("favoritefoods", value)}
            placeholder="Enter your favorite foods"
          />
        </div>
      );

    case 4:
      return (
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-2xl font-bold text-white mb-6">Fitness Goals</h2>
          <RadioGroup
            label="Goal"
            value={formData.fitnessGoal}
            onChange={(value) => updateFormData("fitnessGoal", value)}
            options={["Weight Loss", "Muscle Gain", "Maintenance", "Endurance"]}
            error={errors.fitnessGoal}
          />
          <InputField
            label="Target Weight (kg) - Optional"
            type="number"
            value={formData.targetWeight}
            onChange={(value) => updateFormData("targetWeight", value)}
            placeholder="Enter your target weight"
            required={false}
          />
          <SelectField
            label="Timeline"
            value={formData.timeline}
            onChange={(value) => updateFormData("timeline", value)}
            options={["1 Month", "3 Months", "6 Months"]}
            error={errors.timeline}
          />
        </div>
      );

    case 5:
      return (
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-2xl font-bold text-white mb-6">
            Workout Preferences
          </h2>
          <SelectField
            label="Workout Level"
            value={formData.workoutLevel}
            onChange={(value) => updateFormData("workoutLevel", value)}
            options={["Beginner", "Intermediate", "Advanced"]}
            error={errors.workoutLevel}
          />
          <RadioGroup
            label="Gym Access"
            value={formData.gymAccess}
            onChange={(value) => updateFormData("gymAccess", value)}
            options={["Yes", "No"]}
            error={errors.gymAccess}
          />
          <CheckboxGroup
            label="Equipment Available"
            values={formData.equipmentAvailable}
            onChange={(value) => handleArrayUpdate("equipmentAvailable", value)}
            options={["Dumbbells", "Resistance Bands", "Machines"]}
          />
          <SelectField
            label="Daily Workout Time"
            value={formData.workoutTime}
            onChange={(value) => updateFormData("workoutTime", value)}
            options={["15 min", "30 min", "1 hr+"]}
            error={errors.workoutTime}
          />
          <CheckboxGroup
            label="Preferred Workout Types"
            values={formData.preferredWorkouts}
            onChange={(value) => handleArrayUpdate("preferredWorkouts", value)}
            options={["Cardio", "Strength", "HIIT", "Yoga", "Functional"]}
          />
        </div>
      );

    default:
      return null;
  }
};

const PersonalizedPlanForm = () => {
  const { username } = useContext(UserContext);

  const initialFormState = {
    fullName: "",
    gender: "",
    age: "",
    heightFeet: "",
    heightInches: "",
    weight: "",

    // Step 2: Lifestyle & Activity
    occupationType: "",
    weeklyActivity: "",
    stressLevel: "",

    // Step 3: Dietary Preferences
    dietType: "",
    allergies: [],
    foodDislikes: [],
    favoritefoods: [],

    // Step 4: Fitness Goals
    fitnessGoal: "",
    targetWeight: "",
    timeline: "",

    // Step 5: Workout Preferences
    workoutLevel: "",
    gymAccess: "",
    equipmentAvailable: [],
    workoutTime: "",
    preferredWorkouts: [],
  };
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormState);

  const [errors, setErrors] = useState({});

  const totalSteps = 5;

  useEffect(() => {
    setFormData((prev) => ({ ...prev, fullName: username }));
  }, []);

  const updateFormData = (field, value) => {
    const requiredNumericFields = [
      "age",
      "heightFeet",
      "heightInches",
      "weight",
    ];
    const optionalNumericFields = ["targetWeight"];
    let castedValue = value;

    if (
      requiredNumericFields.includes(field) ||
      optionalNumericFields.includes(field)
    ) {
      castedValue = value !== "" ? Number(value) : "";
    }

    setFormData((prev) => ({ ...prev, [field]: castedValue }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleArrayUpdate = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    const setAndReturn = (field, message) => {
      newErrors[field] = message;
      setErrors(newErrors);
      return false;
    };

    switch (step) {
      case 1:
        if (!formData.gender)
          return setAndReturn("gender", "Gender is required");

        if (!formData.age || formData.age < 5 || formData.age > 100)
          return setAndReturn("age", "Enter Valid Age");

        if (!formData.weight || formData.weight < 20 || formData.weight > 200)
          return setAndReturn("weight", "Enter valid weight");

        const heightFeetValid =
          formData.heightFeet &&
          formData.heightFeet >= 1 &&
          formData.heightFeet < 9;
        const heightInchesValid =
          formData.heightInches !== "" &&
          formData.heightInches >= 0 &&
          formData.heightInches <= 11;

        const totalInches =
          Number(formData.heightFeet) * 12 + Number(formData.heightInches);
        if (totalInches < 36 || totalInches > 96) {
          return setAndReturn("heightFeet", "Must be between 3 & 8 feets");
        }
        if (!heightFeetValid)
          return setAndReturn("heightFeet", "Valid height in feet is required");

        if (!heightInchesValid)
          return setAndReturn("heightInches", "Must be between 0 & 11 inches");
        break;

      case 2:
        if (!formData.occupationType)
          return setAndReturn("occupationType", "Occupation type is required");
        if (!formData.weeklyActivity)
          return setAndReturn("weeklyActivity", "Weekly activity is required");
        if (!formData.stressLevel)
          return setAndReturn("stressLevel", "Stress level is required");
        break;

      case 3:
        if (!formData.dietType)
          return setAndReturn("dietType", "Diet type is required");
        break;

      case 4:
        if (!formData.fitnessGoal)
          return setAndReturn("fitnessGoal", "Fitness goal is required");
        if (!formData.timeline)
          return setAndReturn("timeline", "Timeline is required");
        break;

      case 5:
        if (!formData.workoutLevel)
          return setAndReturn("workoutLevel", "Workout level is required");
        if (!formData.gymAccess)
          return setAndReturn("gymAccess", "Gym access is required");
        if (!formData.workoutTime)
          return setAndReturn("workoutTime", "Workout time is required");
        break;
    }

    setErrors({});
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log("Form submitted:", formData);
      alert(
        "Plan generation started! Your personalized diet and workout plan will be ready shortly."
      );
      setFormData({ ...initialFormState, fullName: username });
      setCurrentStep(1);
    }
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4 font-head">
      <div className="max-w-xl mx-auto">
        <div className="bg-gray-900 rounded-lg shadow-xl p-8 animate-scale-in">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Create Your Personalized Plan
            </h1>
            <p className="text-gray-400">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
          />

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="transition-all duration-500 ease-in-out">
              {renderStep(
                currentStep,
                updateFormData,
                handleArrayUpdate,
                formData,
                errors
              )}
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg  transition-all duration-300 transform ${
                  currentStep === 1
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gray-700 text-white hover:bg-gray-600 hover:scale-105"
                }`}
              >
                Back
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg  hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg  hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 animate-pulse"
                >
                  Generate My Plan
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedPlanForm;
