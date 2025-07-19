import { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Save } from "lucide-react";

export const WorkoutTracking = () => {
  const [workoutForm, setWorkoutForm] = useState({
    type: "",
    duration: "",
    intensity: "",
    exercises: "",
    calories: "",
    notes: "",
  });

  const handleWorkoutSubmit = (e) => {
    e.preventDefault();
    console.log("Workout data:", workoutForm);
    setWorkoutForm({
      type: "",
      duration: "",
      intensity: "",
      exercises: "",
      calories: "",
      notes: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0f0f0f] rounded-2xl border border-neutral-800 shadow-md p-8 max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-8">
        <Activity className="w-7 h-7 text-red-500" />
        <h2 className="text-3xl font-bold text-white tracking-tight">
          Log Workout
        </h2>
      </div>

      <form
        onSubmit={handleWorkoutSubmit}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Workout Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Workout Type
            </label>
            <select
              value={workoutForm.type}
              onChange={(e) =>
                setWorkoutForm({ ...workoutForm, type: e.target.value })
              }
              className="w-full px-4 py-2 border border-neutral-700 rounded-xl bg-[#1a1a1a] text-white placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select workout type</option>
              <option value="cardio">Cardio</option>
              <option value="strength">Strength Training</option>
              <option value="hiit">HIIT</option>
              <option value="yoga">Yoga</option>
              <option value="sports">Sports</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Duration (minutes)
            </label>
            <input
              type="number"
              value={workoutForm.duration}
              onChange={(e) =>
                setWorkoutForm({ ...workoutForm, duration: e.target.value })
              }
              className="w-full px-4 py-2 border border-neutral-700 rounded-xl bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="30"
              required
            />
          </div>

          {/* Intensity */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300 ">
              Intensity
            </label>
            <select
              value={workoutForm.intensity}
              onChange={(e) =>
                setWorkoutForm({ ...workoutForm, intensity: e.target.value })
              }
              className="w-full px-4 py-2 border border-neutral-700 rounded-xl bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select intensity</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
              <option value="very-high">Very High</option>
            </select>
          </div>

          {/* Calories */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300 ">
              Calories Burned (optional)
            </label>
            <input
              type="number"
              value={workoutForm.calories}
              onChange={(e) =>
                setWorkoutForm({ ...workoutForm, calories: e.target.value })
              }
              className="w-full px-4 py-2 border border-neutral-700 rounded-xl bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="250"
            />
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300 ">
            Exercises/Activities
          </label>
          <textarea
            value={workoutForm.exercises}
            onChange={(e) =>
              setWorkoutForm({ ...workoutForm, exercises: e.target.value })
            }
            className="w-full px-4 py-3 border border-neutral-700 rounded-xl bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            rows={3}
            placeholder="List exercises, sets, reps, or activities..."
            required
          />
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300 ">
            Notes (optional)
          </label>
          <textarea
            value={workoutForm.notes}
            onChange={(e) =>
              setWorkoutForm({ ...workoutForm, notes: e.target.value })
            }
            className="w-full px-4 py-3 border border-neutral-700 rounded-xl bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            rows={2}
            placeholder="How did you feel? Any observations?"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-all duration-200 shadow-sm"
        >
          <Save className="w-4 h-4" />
          Save Workout
        </button>
      </form>
    </motion.div>
  );
};
