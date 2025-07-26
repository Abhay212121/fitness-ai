import { motion } from "framer-motion";
import { Brain, TrendingUp, AlertCircle, Lightbulb } from "lucide-react";

const PredictionsSection = () => {
  const predictions = [
    {
      type: "Workout",
      icon: TrendingUp,
      title: "Peak Performance Day",
      description:
        "Based on your sleep and mood patterns, tomorrow is ideal for strength training.",
      confidence: 92,
      color: "text-red-400 bg-red-900/20 border-red-500/30",
    },
    {
      type: "Sleep",
      icon: AlertCircle,
      title: "Sleep Quality Alert",
      description:
        "Your bedtime has been inconsistent. Try sleeping at 10 PM for better rest.",
      confidence: 78,
      color: "text-yellow-400 bg-yellow-900/20 border-yellow-500/30",
    },
    {
      type: "Mood",
      icon: Lightbulb,
      title: "Mood Booster",
      description:
        "Your mood improves significantly after morning workouts. Schedule one tomorrow!",
      confidence: 85,
      color: "text-green-400 bg-green-900/20 border-green-500/30",
    },
  ];

  const insights = [
    "You're most productive on days when you sleep 7+ hours",
    "Your mood scores are 23% higher after cardio workouts",
    "Consistency in bedtime improves sleep quality by 15%",
    "Weekend workouts boost your weekly mood average",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Container card with custom styling */}
      <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-2xl p-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="flex items-center text-white text-lg font-semibold">
            <Brain className="h-5 w-5 mr-2 text-indigo-400" />
            AI Predictions & Insights
          </h2>
        </div>

        {/* Content section */}
        <div className="space-y-4">
          {/* Predictions List */}
          <div className="space-y-3">
            {predictions.map((prediction, index) => {
              const IconComponent = prediction.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 rounded-lg border ${prediction.color}`}
                >
                  <div className="flex items-start space-x-3">
                    <IconComponent className="w-5 h-5 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white text-sm">
                        {prediction.title}
                      </p>
                      <p className="text-xs text-gray-300 mt-1">
                        {prediction.description}
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="w-16 bg-gray-700 rounded-full h-1">
                          <div
                            className="h-1 bg-indigo-400 rounded-full transition-all duration-300"
                            style={{ width: `${prediction.confidence}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 ml-2">
                          {prediction.confidence}% confident
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Insights */}
          <div className="mt-6">
            <h4 className="text-sm font-medium text-white mb-3">
              Quick Insights
            </h4>
            <div className="space-y-2">
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-2"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-xs text-gray-400">{insight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PredictionsSection;
