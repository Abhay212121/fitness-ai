import { motion } from "framer-motion";
import { Dumbbell, Clock, Flame, Target, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkoutSection = () => {
  const workoutPlans = [
    {
      title: "Push Workout",
      description:
        "Strengthen the chest, shoulders, and triceps with pressing movements.",
      duration: "45-60 min",
      difficulty: "Intermediate",
      calories: "350-450",
      icon: Dumbbell,
      gradient: "from-red-600 to-red-800",
      to: "/workouts",
      template: {
        name: "Push Day",
        exercises: [
          {
            name: "Barbell Bench Press",
            sets: [{ reps: 8 }, { reps: 8 }, { reps: 6 }],
          },
          {
            name: "Incline Dumbbell Press",
            sets: [{ reps: 10 }, { reps: 10 }, { reps: 8 }],
          },
          {
            name: "Overhead Shoulder Press",
            sets: [{ reps: 10 }, { reps: 8 }, { reps: 6 }],
          },
          {
            name: "Lateral Raises",
            sets: [{ reps: 15 }, { reps: 15 }, { reps: 15 }],
          },
          {
            name: "Tricep Pushdowns",
            sets: [{ reps: 12 }, { reps: 12 }, { reps: 12 }],
          },
          {
            name: "Overhead Dumbbell Extension",
            sets: [{ reps: 12 }, { reps: 10 }, { reps: 10 }],
          },
        ],
      },
    },
    {
      title: "Pull Workout",
      description: "Strengthen the back and biceps using pulling movements",
      duration: "45-60 min",
      difficulty: "Intermediate",
      calories: "400-500",
      icon: Flame,
      gradient: "from-orange-600 to-red-600",
      to: "/workouts",
      template: {
        name: "Pull Day",
        exercises: [
          {
            name: "Deadlifts",
            sets: [{ reps: 6 }, { reps: 5 }, { reps: 4 }],
          },
          {
            name: "Pull-Ups",
            sets: [{ reps: 10 }, { reps: 8 }, { reps: 6 }],
          },
          {
            name: "Barbell Rows",
            sets: [{ reps: 10 }, { reps: 8 }, { reps: 8 }],
          },
          {
            name: "Lat Pulldowns",
            sets: [{ reps: 12 }, { reps: 10 }, { reps: 10 }],
          },
          {
            name: "Face Pulls",
            sets: [{ reps: 15 }, { reps: 15 }, { reps: 15 }],
          },
          {
            name: "Barbell Curls",
            sets: [{ reps: 12 }, { reps: 10 }, { reps: 10 }],
          },
        ],
      },
    },
    {
      title: "Legs Workout",
      description: "Improve mobility and aid recovery with stretching routines",
      duration: "70-90 min",
      difficulty: "Advanced",
      calories: "500-600",
      icon: Target,
      gradient: "from-red-700 to-pink-600",
      to: "/workouts",
      template: {
        name: "Leg Day",
        exercises: [
          {
            name: "Barbell Back Squat",
            sets: [{ reps: 8 }, { reps: 8 }, { reps: 6 }],
          },
          {
            name: "Romanian Deadlift",
            sets: [{ reps: 10 }, { reps: 10 }, { reps: 8 }],
          },
          {
            name: "Walking Lunges",
            sets: [{ reps: 12 }, { reps: 12 }, { reps: 12 }],
          },
          {
            name: "Leg Press",
            sets: [{ reps: 10 }, { reps: 10 }, { reps: 8 }],
          },
          {
            name: "Leg Extensions",
            sets: [{ reps: 15 }, { reps: 15 }, { reps: 12 }],
          },
          {
            name: "Seated Calf Raise",
            sets: [{ reps: 15 }, { reps: 15 }, { reps: 15 }],
          },
        ],
      },
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 md:px-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Workout
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              {" "}
              Recommendations
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-head">
            AI-powered workout plans tailored to your fitness level, goals, and
            preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-12">
          {workoutPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <section className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full backdrop-blur-sm rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-2xl text-white group-hover:text-red-400 transition-colors font-semibold leading-none tracking-tight">
                    {plan.title}
                  </p>
                </div>
                <div className="space-y-4 p-6 pt-0">
                  <p className="text-gray-300">{plan.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2 text-red-400" />
                      Duration: {plan.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Target className="w-4 h-4 mr-2 text-red-400" />
                      Level: {plan.difficulty}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Flame className="w-4 h-4 mr-2 text-red-400" />
                      Calories: {plan.calories}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      localStorage.setItem(
                        "selectedTemplate",
                        JSON.stringify(plan.template)
                      );
                      navigate(`${plan.to}`);
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white group flex px-4 py-2 items-center justify-center font-bold font-head rounded-lg cursor-pointer hover:scale-102 duration-300"
                  >
                    Start Workout
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 duration-300" />
                  </button>
                </div>
              </section>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <button
            onClick={() => navigate("/workouts")}
            className="border-red-500 border text-red-500 hover:bg-red-500 hover:text-white w-fit mx-auto bg-black group flex px-4 py-2 items-center justify-center font-bold font-head rounded-lg cursor-pointer duration-300"
          >
            Start A New Workout
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkoutSection;
