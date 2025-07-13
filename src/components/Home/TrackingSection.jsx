import { motion } from "framer-motion";
import {
  TrendingUp,
  Calendar,
  Target,
  Award,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrackingSection = () => {
  const trackingFeatures = [
    {
      title: "Progress Analytics",
      description:
        "Detailed insights into your fitness journey with AI-powered analysis",
      icon: TrendingUp,
      value: "85%",
      label: "Goal Progress",
    },
    {
      title: "Workout History",
      description: "Complete log of all your workouts with performance metrics",
      icon: Calendar,
      value: "127",
      label: "Workouts This Year",
    },
    {
      title: "Personal Records",
      description: "Track your achievements and celebrate new milestones",
      icon: Award,
      value: "23",
      label: "PRs This Month",
    },
    {
      title: "Goal Setting",
      description:
        "Set and track custom fitness goals with smart recommendations",
      icon: Target,
      value: "5/7",
      label: "Weekly Goals",
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 md:px-20 bg-gradient-to-b from-black to-gray-900 text-white font-head">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Track Your{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Progress
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Monitor your fitness journey with comprehensive tracking and
            AI-powered insights.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 cursor-default">
          {trackingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gray-900/50 border border-gray-800 rounded-lg p-6 transition-all duration-300 group-hover:border-red-500">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-800 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2 group-hover:text-red-400">
                  {feature.title}
                </h3>
                <div className="text-center mb-1 text-3xl font-bold text-red-500">
                  {feature.value}
                </div>
                <div className="text-sm text-gray-400 text-center mb-3">
                  {feature.label}
                </div>
                <p className="text-sm text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard & AI Predictions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center text-2xl font-semibold mb-6">
                <BarChart3 className="w-6 h-6 mr-3 text-red-500" />
                Performance Dashboard
              </div>

              <p className="text-gray-300 mb-6 text-sm">
                Get real-time insights into your performance. Track calories
                burned, workout intensity, and progress over time.
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: "Weekly Calories Burned",
                    value: "2,847",
                    progress: 75,
                  },
                  { label: "Workout Streak", value: "12 days", progress: 90 },
                  {
                    label: "Strength Improvement",
                    value: "+15%",
                    progress: 60,
                  },
                ].map((stat, index) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{stat.label}</span>
                      <span className="text-red-400 font-semibold">
                        {stat.value}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/profile")}
                className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-md transition cursor-pointer"
              >
                View Full Dashboard <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* AI Prediction Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-800/30 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-6">AI Predictions</h3>
              <p className="text-gray-300 text-sm mb-6">
                Our AI analyzes your patterns and habits to forecast your
                fitness outcomes.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Weight Goal Prediction",
                    content:
                      "You're on track to reach your weight goal in 8 weeks.",
                  },
                  {
                    title: "Sleep Quality Insight",
                    content:
                      "Sleep improves by 23% on days with morning workouts.",
                  },
                  {
                    title: "Strength Forecast",
                    content: "Predicted 25% bench press increase in 6 weeks.",
                  },
                ].map((tip) => (
                  <div
                    key={tip.title}
                    className="p-4 bg-black/30 border border-red-800/20 rounded-lg"
                  >
                    <h4 className="text-red-400 font-semibold mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-sm text-gray-300">{tip.content}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/tracking")}
                className="mt-6 w-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-sm font-medium py-2 rounded-md transition cursor-pointer"
              >
                Start Tracking
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
