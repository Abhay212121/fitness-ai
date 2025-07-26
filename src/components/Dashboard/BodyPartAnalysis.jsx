import { motion } from "framer-motion";
import {
  Zap,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Target,
} from "lucide-react";

const BodyPartAnalysis = () => {
  const bodyPartData = [
    {
      name: "Chest",
      strength: 85,
      trend: "improving",
      lastWorkout: "3 days ago",
      exercises: ["Bench Press", "Incline DB Press", "Dips"],
      status: "strong",
    },
    {
      name: "Back",
      strength: 78,
      trend: "stable",
      lastWorkout: "2 days ago",
      exercises: ["Pull-ups", "Rows", "Lat Pulldowns"],
      status: "good",
    },
    {
      name: "Arms",
      strength: 62,
      trend: "declining",
      lastWorkout: "5 days ago",
      exercises: ["Curls", "Tricep Dips", "Close-grip Press"],
      status: "weak",
    },
    {
      name: "Shoulders",
      strength: 70,
      trend: "improving",
      lastWorkout: "1 day ago",
      exercises: ["OHP", "Lateral Raises", "Rear Delts"],
      status: "average",
    },
    {
      name: "Legs",
      strength: 88,
      trend: "improving",
      lastWorkout: "4 days ago",
      exercises: ["Squats", "Deadlifts", "Lunges"],
      status: "strong",
    },
    {
      name: "Core",
      strength: 55,
      trend: "stable",
      lastWorkout: "6 days ago",
      exercises: ["Planks", "Crunches", "Russian Twists"],
      status: "weak",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "strong":
        return "text-green-400 bg-green-900/20 border-green-500/30";
      case "good":
        return "text-blue-400 bg-blue-900/20 border-blue-500/30";
      case "average":
        return "text-yellow-400 bg-yellow-900/20 border-yellow-500/30";
      case "weak":
        return "text-red-400 bg-red-900/20 border-red-500/30";
      default:
        return "text-gray-400 bg-gray-900/20 border-gray-500/30";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "strong":
        return CheckCircle;
      case "good":
        return Target;
      case "average":
      case "weak":
        return AlertTriangle;
      default:
        return Target;
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "improving":
        return TrendingUp;
      case "declining":
        return TrendingDown;
      default:
        return Target;
    }
  };

  const recommendations = [
    {
      bodyPart: "Arms",
      issue: "Weakness detected",
      suggestion: "Switch to Bro Split focusing on dedicated arm days",
      priority: "high",
      details:
        "Your arms are lagging behind other muscle groups. Consider 2x per week arm training.",
    },
    {
      bodyPart: "Core",
      issue: "Neglected muscle group",
      suggestion: "Add core work to every session (10-15 minutes)",
      priority: "high",
      details:
        "Core strength is foundational. Add planks, dead bugs, and rotational movements.",
    },
    {
      bodyPart: "Overall",
      issue: "Imbalanced development",
      suggestion: "Consider Upper/Lower split for better balance",
      priority: "medium",
      details:
        "Your legs are significantly stronger than upper body. Balance your training.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="rounded-lg border border-purple-500/20 bg-purple-900/10 p-6"
    >
      <div className="mb-4 flex items-center text-white text-2xl font-semibold tracking-tight">
        <Zap className="h-5 w-5 mr-2 text-purple-400" />
        Body Part Strength Analysis
      </div>

      <div className="space-y-6">
        {/* Body Part Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {bodyPartData.map((part, index) => {
            const StatusIcon = getStatusIcon(part.status);
            const TrendIcon = getTrendIcon(part.trend);

            return (
              <motion.div
                key={part.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-3 rounded-lg border ${getStatusColor(
                  part.status
                )}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <StatusIcon className="w-4 h-4" />
                    <span className="font-medium text-white text-sm">
                      {part.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendIcon className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-white font-bold">
                      {part.strength}%
                    </span>
                  </div>
                </div>

                {/* Strength Bar */}
                <div className="mb-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-500"
                      style={{ width: `${part.strength}%` }}
                    />
                  </div>
                </div>

                <div className="text-xs text-gray-400">
                  <p>Last: {part.lastWorkout}</p>
                  <p className="truncate">
                    Focus: {part.exercises.slice(0, 2).join(", ")}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Training Recommendations */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-white mb-3 flex items-center">
            <Target className="w-4 h-4 mr-1 text-purple-400" />
            Training Recommendations
          </h4>
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-3 rounded-lg border ${
                  rec.priority === "high"
                    ? "bg-red-900/20 border-red-500/30"
                    : "bg-yellow-900/20 border-yellow-500/30"
                }`}
              >
                <div className="flex items-start space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      rec.priority === "high" ? "bg-red-400" : "bg-yellow-400"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">
                      {rec.bodyPart}: {rec.suggestion}
                    </p>
                    <p className="text-xs text-gray-300 mt-1">{rec.details}</p>
                    <span
                      className={`inline-block text-xs px-2 py-1 rounded mt-1 ${
                        rec.priority === "high"
                          ? "bg-red-500/20 text-red-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {rec.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-purple-500/20">
          <div className="text-center">
            <p className="text-lg font-bold text-green-400">2</p>
            <p className="text-xs text-gray-400">Strong Parts</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-red-400">2</p>
            <p className="text-xs text-gray-400">Need Work</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-purple-400">73%</p>
            <p className="text-xs text-gray-400">Overall Score</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BodyPartAnalysis;
