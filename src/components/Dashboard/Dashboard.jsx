import { BarChart3, Brain, Target, TrendingUp } from "lucide-react";
import { Footer } from "../partials/Footer";
import Header from "../partials/Header";
import { motion } from "framer-motion";
import WorkoutSummary from "./WorkoutSummary";
import MoodSummary from "./MoodSummary";
import SleepSummary from "./SleepSummary";
import BodyPartAnalysis from "./BodyPartAnalysis";
import GoalsSection from "./GoalsSection";
import PredictionsSection from "./PredictionSection";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../../constants/constant";
import { useNavigate } from "react-router-dom";

export const DashBoard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getStats = async () => {
      const response = axios.get(`${baseUrl}/dashboard/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.status === 401) {
        navigate("/login");
      }
      console.log(response);
    };
    getStats();
  }, []);

  return (
    <>
      <Header />

      <div className="flex items-center justify-center h-[calc(100vh-80px)] bg-black px-4">
        <div className="bg-gradient-to-br from-red-900/80 to-red-700/60 border border-red-700 text-red-100 rounded-2xl px-8 py-12 shadow-xl text-center max-w-xl w-full">
          <div className="text-4xl mb-4 animate-pulse">🚧</div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Dashboard Under Construction
          </h1>
          <p className="text-red-200 text-sm md:text-base">
            We’re working hard to bring you something awesome. Stay tuned!
          </p>
        </div>
      </div>

      <section className="pt-24 pb-16 bg-black md:px-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center items-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Your Dashboard
              </h2>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Track your progress, analyze patterns, and stay motivated with
              personalized insights
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="p-6 text-center rounded-lg border shadow-sm bg-red-900/20 border-red-500/30 hover:border-red-400/50 transition-all duration-300">
              <Target className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">12</p>
              <p className="text-sm text-gray-400">Workouts This Month</p>
            </div>

            <div className="p-6 text-center rounded-lg border shadow-sm bg-green-900/20 border-green-500/30 hover:border-green-400/50 transition-all duration-300">
              <Brain className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">7.2</p>
              <p className="text-sm text-gray-400">Avg Mood Score</p>
            </div>

            <div className="p-6 text-center rounded-lg border shadow-sm bg-purple-900/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="w-8 h-8 bg-purple-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-xs font-bold text-black">💤</span>
              </div>
              <p className="text-2xl font-bold text-white">7.5h</p>
              <p className="text-sm text-gray-400">Avg Sleep Duration</p>
            </div>

            <div className="p-6 text-center rounded-lg border shadow-sm bg-blue-900/20 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">8500kg</p>
              <p className="text-sm text-gray-400">Total Weight Lifted</p>
            </div>
          </motion.div>
          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <WorkoutSummary />
              <MoodSummary />
              <SleepSummary />
              <BodyPartAnalysis />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <GoalsSection />
              <PredictionsSection />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
