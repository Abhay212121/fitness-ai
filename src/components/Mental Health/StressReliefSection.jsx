import { motion } from "framer-motion";
import { Heart, Wind, Waves, Zap, Play, Timer, Users } from "lucide-react";

const StressReliefSection = () => {
  const techniques = [
    {
      name: "Box Breathing",
      duration: "2 min",
      description: "Calm your nervous system with 4-4-4-4 breathing pattern",
      icon: Wind,
      image:
        "https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/watch?v=aPYmZOhJF5Q",
    },
    {
      name: "Progressive Relaxation",
      duration: "5 min",
      description:
        "Release tension by relaxing each muscle group systematically",
      icon: Waves,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
      videoUrl: "https://www.youtube.com/watch?v=ClqPtWzozXs",
    },
    {
      name: "Quick Reset",
      duration: "1 min",
      description: "Instant stress relief with rapid grounding techniques",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1545389336-cf090694435e?w=300&h=200&fit=crop&crop=center",
      videoUrl: "https://www.youtube.com/watch?v=c1Ndym-IsQg",
    },
  ];

  const stressStats = [
    { label: "Sessions Completed", value: "47", icon: Timer },
    { label: "Stress Reduction", value: "32%", icon: Heart },
    { label: "Community Support", value: "1.2K", icon: Users },
  ];

  return (
    <section
      id="stress"
      className="relative px-4 py-2 scroll-mt-20 bg-gradient-to-b from-black via-gray-900 to-black md:px-20 font-head"
    >
      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <Heart className="h-8 w-8 text-red-400" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Stress Relief
          </h2>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Quick exercises to manage stress and anxiety. These evidence-based
          techniques help you calm your mind and regain focus instantly or over
          time.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stressStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg text-center p-4 shadow-md">
                  <stat.icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Emergency Card */}
          <div className="bg-gradient-to-br from-red-900/30 to-pink-900/20 border border-red-500/20 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Emergency Stress Relief
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Use these fast techniques when stress suddenly spikes. They're
              crafted to quickly engage your parasympathetic nervous system and
              restore calm.
            </p>
            <div className="space-y-4">
              {[
                "Take 5 deep breaths, counting to 4 on each inhale and exhale",
                "Name 5 things you can see, 4 you can touch, 3 you can hear",
                "Tense and release your shoulders, then shake out your hands",
              ].map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-200">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Techniques */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6 pt-2"
        >
          {techniques.map((technique, index) => (
            <motion.div
              key={technique.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="bg-gray-900/50 border border-gray-800 hover:border-red-500/50 transition-all duration-300 rounded-lg overflow-hidden shadow-sm">
                <div className="flex items-center">
                  <img
                    src={technique.image}
                    alt={technique.name}
                    className="w-32 ml-2 h-24 object-cover"
                  />
                  <div className="p-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">
                        {technique.name}
                      </h4>
                      <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
                        {technique.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      {technique.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <technique.icon className="w-5 h-5 text-red-400" />
                      <a
                        href={technique.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium cursor-pointer"
                      >
                        <Play className="w-3 h-3" />
                        Start
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StressReliefSection;
