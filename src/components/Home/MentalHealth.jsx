import { motion } from "framer-motion";
import { Heart, Brain, Moon, Smile, ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MentalHealthSection = () => {
  const mentalHealthFeatures = [
    {
      title: "Meditation Sessions",
      description: "Guided meditation to reduce stress and improve focus",
      icon: Brain,
      duration: "5-20 min",
      color: "text-blue-400",
    },
    {
      title: "Sleep Tracking",
      description:
        "Monitor sleep patterns and get personalized recommendations",
      icon: Moon,
      duration: "Ongoing",
      color: "text-purple-400",
    },
    {
      title: "Mood Journal",
      description: "Track your emotional wellbeing and identify patterns",
      icon: Smile,
      duration: "2-5 min",
      color: "text-green-400",
    },
    {
      title: "Stress Relief",
      description: "Quick exercises to manage stress and anxiety",
      icon: Heart,
      duration: "3-10 min",
      color: "text-red-400",
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="py-10 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Mental
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Wellness
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your mental health is just as important as your physical fitness.
            Take care of your mind with our wellness tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 overflow-x-hidden md:px-12">
          {mentalHealthFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <section className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full backdrop-blur-sm rounded-lg border bg-card text-card-foreground shadow-sm ">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="flex items-center space-x-4 ">
                    <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-red-900/30 transition-colors duration-300">
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl text-white group-hover:text-red-400 transition-colors font-semibold leading-none tracking-tight">
                        {feature.title}
                      </p>
                      <p className="text-sm text-gray-400">
                        {feature.duration}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 p-6 pt-0">
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <button className="inline-flex items-center justify-center gap-2 text-sm font-medium text-red-400 hover:text-gray-200 hover:bg-red-900/20 px-3 py-2 rounded-md transition-colors cursor-pointer">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          className="bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-2xl p-8 text-center border border-red-800/30 md:mx-12"
        >
          <h3 className="text-3xl font-bold mb-4 text-white font-head">
            Daily Wellness Check-in
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto font-head">
            Start each day with a personalized wellness assessment. Track your
            mood, energy levels, and get recommendations for the day ahead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/daily-wellness-test")}
              className="rounded-md text-md font-head bg-red-600 hover:bg-black border border-red-600 text-white hover:text-red-500 px-4 py-2 cursor-pointer hover:scale-102 duration-300"
            >
              Start Check-in
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MentalHealthSection;
