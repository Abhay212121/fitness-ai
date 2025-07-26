import { motion } from "framer-motion";
import { CheckCircle, Clock, Calendar } from "lucide-react";

const GoalsSection = () => {
  const weeklyGoals = [
    { goal: "4 Workouts", progress: 3, total: 4, completed: false },
    { goal: "7h Sleep Average", progress: 7.2, total: 7, completed: true },
    { goal: "Daily Mood Check", progress: 6, total: 7, completed: false },
  ];

  const dailyGoals = [
    { goal: "Drink 8 glasses of water", completed: true },
    { goal: "30 min workout", completed: true },
    { goal: "10 min meditation", completed: false },
    { goal: "Mood journal entry", completed: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Weekly Goals */}
      <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl shadow-md">
        <div className="p-4 border-b border-blue-500/20">
          <h3 className="flex items-center text-white text-lg font-semibold">
            <Calendar className="h-5 w-5 mr-2 text-blue-400" />
            Weekly Goals
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {weeklyGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">
                  {goal.goal}
                </span>
                {goal.completed && (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                )}
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    goal.completed ? "bg-green-400" : "bg-blue-400"
                  }`}
                  style={{
                    width: `${Math.min(
                      (goal.progress / goal.total) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {goal.progress}/{goal.total}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Daily Goals */}
      <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl shadow-md">
        <div className="p-4 border-b border-orange-500/20">
          <h3 className="flex items-center text-white text-lg font-semibold">
            <Clock className="h-5 w-5 mr-2 text-orange-400" />
            Today's Goals
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {dailyGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center space-x-3 p-2 rounded-lg ${
                goal.completed
                  ? "bg-green-900/20 border border-green-500/30"
                  : "bg-orange-900/20 border border-orange-500/30"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  goal.completed
                    ? "border-green-400 bg-green-400"
                    : "border-orange-400"
                }`}
              >
                {goal.completed && (
                  <CheckCircle className="w-3 h-3 text-black" />
                )}
              </div>
              <span
                className={`text-sm ${
                  goal.completed ? "text-green-300 line-through" : "text-white"
                }`}
              >
                {goal.goal}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GoalsSection;
