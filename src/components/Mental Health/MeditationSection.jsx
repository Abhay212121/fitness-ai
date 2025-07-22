import { motion } from "framer-motion";
import { Brain, Play, Clock, Users, Award } from "lucide-react";
import { useEffect } from "react";

const MeditationSection = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0 });
  // }, []);

  const meditationFeatures = [
    {
      icon: Clock,
      title: "5-60 Minutes",
      description: "Sessions for every schedule",
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Professional meditation instructors",
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description: "Monitor your meditation journey",
    },
  ];

  const meditationTypes = [
    {
      name: "Mindfulness",
      duration: "10-20 min",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
    },
    {
      name: "Sleep Meditation",
      duration: "15-30 min",
      image:
        "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=300&h=200&fit=crop&crop=center",
    },
    {
      name: "Stress Relief",
      duration: "5-15 min",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop&crop=center",
    },
  ];

  return (
    <section
      id="meditation"
      className="py-20 px-4 bg-black text-white md:px-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center items-center gap-3 mb-4 font-head">
          <Brain className="h-8 w-8 text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Meditation Sessions
          </h2>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-head">
          Discover inner peace and mental clarity through our guided meditation
          sessions. Whether you're a beginner or experienced practitioner, find
          the perfect session to reduce stress, improve focus, and enhance your
          overall self.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Features + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {meditationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center font-head"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-900/30 rounded-full flex items-center justify-center border border-blue-500/30">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Description + CTA */}
          <div className="font-head">
            <h3 className="text-xl font-semibold mb-4">Meditation Programs</h3>
            <p className="text-gray-300 mb-6">
              Our meditation library includes various techniques from
              mindfulness and body scans to loving-kindness and concentration
              practices. Each session is carefully crafted to help you develop a
              sustainable meditation practice that fits your lifestyle.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium inline-flex items-center gap-2 transition-colors cursor-pointer">
              <Play className="w-4 h-4" />
              Start Meditation
            </button>
          </div>
        </motion.div>

        {/* Right: Meditation Types List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {meditationTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-lg overflow-hidden transition-all duration-300 font-head hover:scale-102">
                <div className="flex items-center p-4 sm:p-6">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-24 h-20 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <h4 className="font-semibold text-white">{type.name}</h4>
                    <p className="text-sm text-gray-400">{type.duration}</p>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 p-2 rounded-md transition-colors cursor-pointer">
                    <Play className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeditationSection;
