import { motion } from "framer-motion";
import { Moon, TrendingUp, Clock, Brain, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SleepTrackingSection = () => {
  const sleepMetrics = [
    {
      label: "Sleep Duration",
      value: "7h 23m",
      trend: "+12%",
      color: "text-green-400",
    },
    {
      label: "Sleep Quality",
      value: "85%",
      trend: "+5%",
      color: "text-blue-400",
    },
    {
      label: "Deep Sleep",
      value: "1h 45m",
      trend: "+8%",
      color: "text-purple-400",
    },
  ];

  const sleepTips = [
    {
      icon: Clock,
      title: "Consistent Schedule",
      description:
        "Maintain regular sleep and wake times to regulate your circadian rhythm",
    },
    {
      icon: Brain,
      title: "Sleep Environment",
      description:
        "Create a cool, dark, and quiet environment for optimal sleep quality",
    },
    {
      icon: Zap,
      title: "Pre-Sleep Routine",
      description:
        "Develop calming activities before bed to signal your body it's time to rest",
    },
  ];

  const navigate = useNavigate();

  return (
    <section
      id="sleep"
      className="relative md:px-20 font-head scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <Moon className="h-8 w-8 text-purple-400" />
          <h2 className="text-3xl md:text-4xl font-bold">Sleep Tracking</h2>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Monitor your sleep patterns and get personalized recommendations to
          improve your rest. Our advanced sleep tracking technology analyzes
          your sleep cycles, duration, and quality to help you wake up refreshed
          and energized every day.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1495546200065-d92a90266a1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sleep tracking"
              className="rounded-2xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-semibold mb-2">
                Tonight's Sleep Goal
              </h3>
              <p className="text-gray-300">8 hours of quality rest</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-4">
            {sleepMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-purple-900/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">{metric.label}</p>
                        <p className="text-2xl font-bold text-white">
                          {metric.value}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`flex items-center ${metric.color}`}>
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span className="text-sm">{metric.trend}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">
              Sleep Improvement Tips
            </h3>
            {sleepTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="w-8 h-8 bg-purple-900/30 rounded-full flex items-center justify-center border border-purple-500/30 mt-1">
                  <tip.icon className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{tip.title}</h4>
                  <p className="text-sm text-gray-400">{tip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => navigate("/tracking", { state: { tab: "sleep" } })}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer duration-300"
          >
            Start Sleep Tracking
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SleepTrackingSection;
