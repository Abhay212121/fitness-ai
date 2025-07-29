import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Save } from "lucide-react";
import axios from "axios";
import { baseUrl } from "../../../constants/constant";

export const MoodTracking = () => {
  const [isLoading, setLoading] = useState(false);
  const [moodForm, setMoodForm] = useState({
    rating: "",
    emotions: [],
    energy: "",
    stress: "",
    notes: "",
  });

  const emotionOptions = [
    "Happy",
    "Sad",
    "Anxious",
    "Excited",
    "Calm",
    "Frustrated",
    "Motivated",
    "Tired",
  ];

  const handleMoodSubmit = async (e) => {
    e.preventDefault();
    console.log("Mood data:", moodForm);
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${baseUrl}/track/mood`,
        {
          moodForm,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.status === 200) {
        alert(response.data.msg);
        setMoodForm({
          rating: "",
          emotions: [],
          energy: "",
          stress: "",
          notes: "",
        });
      } else {
        alert("There was an error!");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleEmotion = (emotion) => {
    setMoodForm((prev) => ({
      ...prev,
      emotions: prev.emotions.includes(emotion)
        ? prev.emotions.filter((e) => e !== emotion)
        : [...prev.emotions, emotion],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0f0f0f] rounded-2xl border border-neutral-800 shadow-md p-8 max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-2 mb-6">
        <Heart className="w-6 h-6 text-red-500" />
        <h2 className="text-2xl font-semibold text-white ">Log Mood</h2>
      </div>

      <form
        onSubmit={handleMoodSubmit}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Overall Mood Rating
          </label>
          <select
            value={moodForm.rating}
            onChange={(e) =>
              setMoodForm({ ...moodForm, rating: e.target.value })
            }
            className="w-full px-3 py-2 border border-neutral-700 rounded-md bg-[#1a1a1a] text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">Rate your mood</option>
            <option value="1">Very Poor (1/5)</option>
            <option value="2">Poor (2/5)</option>
            <option value="3">Neutral (3/5)</option>
            <option value="4">Good (4/5)</option>
            <option value="5">Excellent (5/5)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Emotions (select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {emotionOptions.map((emotion) => (
              <button
                key={emotion}
                type="button"
                onClick={() => toggleEmotion(emotion)}
                className={`px-3 py-2 rounded-md border text-sm transition-colors duration-200 ${
                  moodForm.emotions.includes(emotion)
                    ? "bg-red-600 text-white"
                    : "bg-[#1a1a1a] text-gray-300 border-neutral-700 hover:bg-[#c47c6e]"
                }`}
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Energy Level
            </label>
            <select
              value={moodForm.energy}
              onChange={(e) =>
                setMoodForm({ ...moodForm, energy: e.target.value })
              }
              className="w-full px-3 py-2 border border-neutral-700 rounded-md bg-[#1a1a1a] text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select energy level</option>
              <option value="very-low">Very Low</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
              <option value="very-high">Very High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Stress Level
            </label>
            <select
              value={moodForm.stress}
              onChange={(e) =>
                setMoodForm({ ...moodForm, stress: e.target.value })
              }
              className="w-full px-3 py-2 border border-neutral-700 rounded-md bg-[#1a1a1a] text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select stress level</option>
              <option value="very-low">Very Low</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
              <option value="very-high">Very High</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Notes (optional)
          </label>
          <textarea
            value={moodForm.notes}
            onChange={(e) =>
              setMoodForm({ ...moodForm, notes: e.target.value })
            }
            className="w-full px-3 py-2 border border-neutral-700 rounded-md bg-[#1a1a1a] text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            rows={3}
            placeholder="What influenced your mood today? Any thoughts or reflections?"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-200"
        >
          <Save className="w-4 h-4" />
          {isLoading ? "Saving..." : "Save Mood Entry"}
        </button>
      </form>
    </motion.div>
  );
};
