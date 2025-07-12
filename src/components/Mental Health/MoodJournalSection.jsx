import { motion } from "framer-motion";
import { Smile, Calendar, TrendingUp, BookOpen, Heart } from "lucide-react";

const MoodJournalSection = () => {
  const moodData = [
    { day: "Mon", mood: 8, color: "bg-green-500" },
    { day: "Tue", mood: 6, color: "bg-yellow-500" },
    { day: "Wed", mood: 9, color: "bg-green-500" },
    { day: "Thu", mood: 7, color: "bg-green-400" },
    { day: "Fri", mood: 5, color: "bg-orange-500" },
    { day: "Sat", mood: 9, color: "bg-green-500" },
    { day: "Sun", mood: 8, color: "bg-green-500" },
  ];

  const journalFeatures = [
    {
      icon: Calendar,
      title: "Daily Check-ins",
      description:
        "Quick mood tracking with customizable prompts and reminders",
    },
    {
      icon: TrendingUp,
      title: "Pattern Recognition",
      description:
        "Identify trends and triggers in your emotional well-being over time",
    },
    {
      icon: BookOpen,
      title: "Reflection Prompts",
      description:
        "Guided questions to help you process and understand your emotions",
    },
  ];

  return (
    <section className="relative px-4 py-20 bg-gradient-to-b from-black to-gray-900 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <Smile className="h-8 w-8 text-green-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Mood Journal
          </h2>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Track your emotional wellbeing and identify patterns in your daily
          life. Our journal helps you understand triggers, celebrate progress,
          and reflect meaningfully.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <Heart className="w-5 h-5 mr-2 text-green-400" />
              This Week's Mood
            </h3>
            <div className="flex justify-between items-end h-32 mb-4">
              {moodData.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${day.mood * 10}%` }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-6 ${day.color} rounded-t-md transition-all duration-300`}
                    style={{ height: `${day.mood * 10}%` }}
                  />
                  <span className="text-xs text-gray-400 mt-1">{day.day}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              Average mood:{" "}
              <span className="text-green-400 font-semibold">7.4/10</span>
            </p>
          </div>

          <div className="space-y-6">
            {journalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-9 h-9 bg-green-900/30 rounded-full flex items-center justify-center border border-green-500/30 mt-1">
                  <feature.icon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white w-full px-5 py-2 rounded-md text-sm font-medium inline-flex items-center justify-center gap-2 transition-colors cursor-pointer duration-300">
            Start Journaling
          </button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mood journaling"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
              <h4 className="text-white font-semibold mb-2">
                Today's Reflection
              </h4>
              <p className="text-sm text-gray-300 mb-2">
                "What are you most grateful for today?"
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Heart
                      key={star}
                      className={`w-4 h-4 ${
                        star <= 4
                          ? "text-red-500 fill-current"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-300">Feeling grateful</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoodJournalSection;
