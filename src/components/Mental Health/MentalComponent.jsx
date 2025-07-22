import { motion } from "framer-motion";
import { Brain, Moon, Smile, Heart } from "lucide-react";
import MeditationSection from "./MeditationSection";
import MoodJournalSection from "./MoodJournalSection";
import SleepTrackingSchedule from "./SleepTrackingSchedule";
import { Footer } from "../partials/Footer";
import Header from "../partials/Header";
import StressReliefSection from "./StressReliefSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MentalHealth = () => {
  const mentalHealthData = [
    {
      title: "Meditation",
      description: "Find inner peace",
      icon: Brain,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Sleep Better",
      description: "Track your rest",
      icon: Moon,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Mood Journal",
      description: "Track emotions",
      icon: Smile,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
    },
    {
      title: "Stress Relief",
      description: "Quick relaxation",
      icon: Heart,
      color: "text-red-400",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-500/30",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const temp = document.getElementById(location.state.scrollTo);
      if (temp) {
        setTimeout(() => {
          temp.scrollIntoView();
        }, 0);
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-black text-white font-head">
      <Header />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
                alt="Peaceful meditation scene"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center"
                  >
                    <Brain className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="gradient-text text-red-500">Your Mind</span>
                  <br />
                  <span className="text-white">Matters</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Take a moment for yourself. Simple tools to help you feel
                  better, sleep deeper, and stress less.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                {mentalHealthData.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.02 }}
                    className={`${item.bgColor} ${item.borderColor} border rounded-2xl p-4 backdrop-blur-sm cursor-pointer group transition-all duration-300`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 mb-3 bg-gray-800/80 rounded-full flex items-center justify-center group-hover:bg-gray-700/80 transition-colors">
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <h3 className="font-semibold text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <div className="space-y-32 mt-32">
            <MeditationSection />
            <SleepTrackingSchedule />
            <MoodJournalSection />
            <StressReliefSection />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MentalHealth;
