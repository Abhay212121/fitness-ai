import axios from "axios";
import { motion } from "framer-motion";
import { Moon, Save } from "lucide-react";
import { useState } from "react";
import { baseUrl } from "../../../constants/constant";

export const SleepTracking = () => {
  const [sleepForm, setSleepForm] = useState({
    bedTime: "",
    wakeTime: "",
    quality: "",
    hours: "",
    notes: "",
  });

  const [isLoading, setLoading] = useState(false);

  const handleSleepSubmit = async (e) => {
    e.preventDefault();
    console.log("Sleep data:", sleepForm);
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${baseUrl}/track/sleep`,
        {
          sleepForm,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.status === 200) {
        alert(response.data.msg);
        setSleepForm({
          bedTime: "",
          wakeTime: "",
          quality: "",
          hours: "",
          notes: "",
        });
      } else {
        alert("There was an error!");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0f0f0f] rounded-2xl border border-neutral-800 shadow-xl p-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Moon className="w-6 h-6 text-red-500" />
        <h2 className="text-2xl font-semibold text-white">Log Sleep</h2>
      </div>

      <form
        onSubmit={handleSleepSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Bedtime
            </label>
            <input
              type="time"
              value={sleepForm.bedTime}
              onChange={(e) =>
                setSleepForm({ ...sleepForm, bedTime: e.target.value })
              }
              className="w-full px-3 py-2 border border-neutral-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Wake Time
            </label>
            <input
              type="time"
              value={sleepForm.wakeTime}
              onChange={(e) =>
                setSleepForm({ ...sleepForm, wakeTime: e.target.value })
              }
              className="w-full px-3 py-2 border border-neutral-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Sleep Quality
            </label>
            <select
              value={sleepForm.quality}
              onChange={(e) =>
                setSleepForm({ ...sleepForm, quality: e.target.value })
              }
              className="w-full px-3 py-2 border border-neutral-700 rounded-lg bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Rate your sleep</option>
              <option value="1">Poor (1/5)</option>
              <option value="2">Fair (2/5)</option>
              <option value="3">Good (3/5)</option>
              <option value="4">Very Good (4/5)</option>
              <option value="5">Excellent (5/5)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Total Hours
            </label>
            <input
              type="number"
              step="0.5"
              value={sleepForm.hours}
              onChange={(e) =>
                setSleepForm({ ...sleepForm, hours: e.target.value })
              }
              className="w-full px-3 py-2 border border-neutral-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="7.5"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Notes (optional)
          </label>
          <textarea
            value={sleepForm.notes}
            onChange={(e) =>
              setSleepForm({ ...sleepForm, notes: e.target.value })
            }
            className="w-full px-3 py-2 border border-neutral-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            rows={3}
            placeholder="How did you sleep? Any factors affecting your sleep?"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
        >
          <Save className="w-4 h-4" />
          {isLoading ? "Saving..." : "Save Sleep Data"}
        </button>
      </form>
    </motion.div>
  );
};
