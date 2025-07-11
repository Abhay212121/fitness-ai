// import { motion } from "framer-motion";
// import { Heart, Wind, Waves, Zap, Play, Timer, Users } from "lucide-react";

// const StressReliefSection = () => {
//   const techniques = [
//     {
//       name: "Box Breathing",
//       duration: "2 min",
//       description: "Calm your nervous system with 4-4-4-4 breathing pattern",
//       icon: Wind,
//       image:
//         "https://images.unsplash.com/photo-1545389336-cf090694435e?w=300&h=200&fit=crop&crop=center",
//     },
//     {
//       name: "Progressive Relaxation",
//       duration: "5 min",
//       description:
//         "Release tension by relaxing each muscle group systematically",
//       icon: Waves,
//       image:
//         "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
//     },
//     {
//       name: "Quick Reset",
//       duration: "1 min",
//       description: "Instant stress relief with rapid grounding techniques",
//       icon: Zap,
//       image:
//         "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop&crop=center",
//     },
//   ];

//   const stressStats = [
//     { label: "Sessions Completed", value: "47", icon: Timer },
//     { label: "Stress Reduction", value: "32%", icon: Heart },
//     { label: "Community Support", value: "1.2K", icon: Users },
//   ];

//   return (
//     <section className="relative">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center mb-12"
//       >
//         <div className="flex justify-center items-center gap-3 mb-4">
//           <Heart className="h-8 w-8 text-red-400" />
//           <h2 className="text-3xl md:text-4xl font-bold">Stress Relief</h2>
//         </div>
//         <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//           Quick exercises to manage stress and anxiety in the moment. Our
//           evidence-based techniques help you regain control, reduce overwhelm,
//           and build resilience for both immediate relief and long-term stress
//           management.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-6"
//         >
//           <div className="grid grid-cols-3 gap-4">
//             {stressStats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="bg-red-900/20 border-red-500/30 text-center p-4">
//                   <div className="p-0">
//                     <stat.icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
//                     <p className="text-2xl font-bold text-white">
//                       {stat.value}
//                     </p>
//                     <p className="text-xs text-gray-400">{stat.label}</p>
//                   </div>
//                 </d>
//               </motion.div>
//             ))}
//           </div>

//           <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border-red-500/30 p-6">
//             <div className="p-0">
//               <h3 className="text-xl font-semibold mb-4">
//                 Emergency Stress Relief
//               </h3>
//               <p className="text-gray-300 mb-4">
//                 When stress hits suddenly, use these quick techniques to regain
//                 your composure. Each exercise is designed to activate your
//                 body's relaxation response within minutes.
//               </p>
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
//                     <span className="text-white text-sm font-bold">1</span>
//                   </div>
//                   <p className="text-sm">
//                     Take 5 deep breaths, counting to 4 on each inhale and exhale
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
//                     <span className="text-white text-sm font-bold">2</span>
//                   </div>
//                   <p className="text-sm">
//                     Name 5 things you can see, 4 you can touch, 3 you can hear
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
//                     <span className="text-white text-sm font-bold">3</span>
//                   </div>
//                   <p className="text-sm">
//                     Tense and release your shoulders, then shake out your hands
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-4"
//         >
//           {techniques.map((technique, index) => (
//             <motion.div
//               key={technique.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="bg-gray-900/50 border-gray-800 hover:border-red-500/50 transition-all duration-300 overflow-hidden">
//                 <div className="p-0">
//                   <div className="flex">
//                     <img
//                       src={technique.image}
//                       alt={technique.name}
//                       className="w-32 h-24 object-cover"
//                     />
//                     <div className="p-4 flex-1">
//                       <div className="flex items-center justify-between mb-2">
//                         <h4 className="font-semibold text-white">
//                           {technique.name}
//                         </h4>
//                         <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
//                           {technique.duration}
//                         </span>
//                       </div>
//                       <p className="text-sm text-gray-400 mb-3">
//                         {technique.description}
//                       </p>
//                       <div className="flex items-center justify-between">
//                         <technique.icon className="w-5 h-5 text-red-400" />
//                         <Button
//                           size="sm"
//                           className="bg-red-600 hover:bg-red-700 text-white"
//                         >
//                           <Play className="w-3 h-3 mr-1" />
//                           Start
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-3">
//               Access All Stress Relief Tools
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default StressReliefSection;

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
        "https://images.unsplash.com/photo-1545389336-cf090694435e?w=300&h=200&fit=crop&crop=center",
    },
    {
      name: "Progressive Relaxation",
      duration: "5 min",
      description:
        "Release tension by relaxing each muscle group systematically",
      icon: Waves,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
    },
    {
      name: "Quick Reset",
      duration: "1 min",
      description: "Instant stress relief with rapid grounding techniques",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop&crop=center",
    },
  ];

  const stressStats = [
    { label: "Sessions Completed", value: "47", icon: Timer },
    { label: "Stress Reduction", value: "32%", icon: Heart },
    { label: "Community Support", value: "1.2K", icon: Users },
  ];

  return (
    <section className="relative px-4 py-20 bg-gradient-to-b from-black via-gray-900 to-black md:px-20 font-head">
      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
        {/* Left - Stats and Emergency Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stressStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg text-center p-4 shadow-md">
                  <stat.icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Emergency Stress Relief Card */}
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

        {/* Right - Techniques */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {techniques.map((technique, index) => (
            <motion.div
              key={technique.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gray-900/50 border border-gray-800 hover:border-red-500/50 transition-all duration-300 rounded-lg overflow-hidden shadow-sm">
                <div className="flex">
                  <img
                    src={technique.image}
                    alt={technique.name}
                    className="w-32 h-24 object-cover"
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
                      <button className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium">
                        <Play className="w-3 h-3" />
                        Start
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 rounded-md shadow-md transition-all duration-300 cursor-pointer">
              Access All Stress Relief Tools
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StressReliefSection;
