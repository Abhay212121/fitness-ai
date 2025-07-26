import { motion } from "framer-motion";
import { Dumbbell, Calendar, Clock, Flame } from "lucide-react";

const WorkoutSummary = () => {
  const recentWorkouts = [
    { date: "Today", type: "Upper Body", duration: "45 min", calories: 320 },
    { date: "Yesterday", type: "Cardio", duration: "30 min", calories: 250 },
    { date: "2 days ago", type: "Legs", duration: "50 min", calories: 380 },
    { date: "3 days ago", type: "Core", duration: "25 min", calories: 180 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Card */}
      <div className="rounded-lg border bg-red-900/10 border-red-500/20 text-card-foreground shadow-sm">
        {/* CardHeader */}
        <div className="flex flex-col space-y-1.5 p-6">
          {/* CardTitle */}
          <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center text-white">
            <Dumbbell className="h-5 w-5 mr-2 text-red-400" />
            Recent Workouts
          </h3>
        </div>

        {/* CardContent */}
        <div className="p-6 pt-0">
          <div className="space-y-3">
            {recentWorkouts.map((workout, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-red-900/20 rounded-lg border border-red-500/20"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Dumbbell className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{workout.type}</p>
                    <p className="text-xs text-gray-400 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {workout.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {workout.duration}
                  </p>
                  <p className="text-xs text-orange-400 flex items-center">
                    <Flame className="w-3 h-3 mr-1" />
                    {workout.calories} cal
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkoutSummary;
