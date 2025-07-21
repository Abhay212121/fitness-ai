import { BookOpen, History, Play } from "lucide-react";
import Header from "../partials/Header";
import { Footer } from "../partials/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { StartWorkoutTracking } from "./StartWorkoutTracking";

export const Workout = () => {
  const [activeTab, setActiveTab] = useState("start");

  const tabs = [
    {
      id: "start",
      label: "Start Workout",
      icon: Play,
      color: "#CE241A",
    },
    {
      id: "templates",
      label: "Templates",
      icon: BookOpen,
      color: "#2563EB",
    },
    {
      id: "history",
      label: "History",
      icon: History,
      color: "#EC4899",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16 bg-[#000000] text-white font-head">
        {/* Hero Section */}
        <div className="py-12 bg-gradient-to-r from-[#CE241A1A] to-[#27272D1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold text-[#FAFAFA] mb-4">
                Track Your Workouts
              </h1>
              <p className="text-xl text-[#A4A7B0] max-w-2xl mx-auto">
                Log your daily workouts, Workout history, and Workout templates
                to stay on track with your health goals.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Tabs + Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-1 bg-[#28292D4D] rounded-lg p-1 mb-8"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const tabIconColor = isActive ? tab.color : "#9CA3AF";

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-all duration-200 cursor-pointer font-medium ${
                    isActive
                      ? "bg-[#000000] text-white shadow"
                      : "text-[#A2A5AD] hover:text-[#FAFAFA]"
                  }`}
                >
                  <tab.icon
                    className="w-4 h-4"
                    style={{ color: tabIconColor }}
                  />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* Tab Content */}
          {activeTab === "start" && <StartWorkoutTracking />}
          {/* {activeTab === "sleep" && <SleepTracking />}
          {activeTab === "mood" && <MoodTracking />} */}
        </div>
      </div>
      <Footer />
    </>
  );
};
