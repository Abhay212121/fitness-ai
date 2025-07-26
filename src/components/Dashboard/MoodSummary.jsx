import { motion } from "framer-motion";
import { Smile, Heart, Calendar } from "lucide-react";

const MoodSummary = () => {
  const moodEntries = [
    { date: "Today", mood: 8, note: "Great workout session!", emoji: "😊" },
    { date: "Yesterday", mood: 6, note: "Feeling tired but okay", emoji: "😐" },
    {
      date: "2 days ago",
      mood: 9,
      note: "Amazing day with friends",
      emoji: "😄",
    },
    { date: "3 days ago", mood: 7, note: "Productive work day", emoji: "🙂" },
  ];

  const getMoodClasses = (mood) => {
    if (mood >= 8) return "text-green-400 bg-green-900/20 border-green-500/30";
    if (mood === 7)
      return "text-yellow-400 bg-yellow-900/20 border-yellow-500/30";
    if (mood === 6)
      return "text-orange-400 bg-orange-900/20 border-orange-500/30";
    return "text-gray-300 bg-gray-800 border-gray-600";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="rounded-lg border bg-green-900/10 border-green-500/20 text-white shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold tracking-tight flex items-center">
            <Smile className="h-5 w-5 mr-2 text-green-400" />
            Mood Journal
          </h3>
        </div>

        <div className="p-6 pt-0">
          <div className="space-y-3">
            {moodEntries.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center justify-between p-3 rounded-lg border ${getMoodClasses(
                  entry.mood
                )}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{entry.emoji}</div>
                  <div>
                    <p className="font-medium text-white">{entry.mood}/10</p>
                    <p className="text-xs text-gray-400 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {entry.date}
                    </p>
                  </div>
                </div>
                <div className="text-right max-w-32">
                  <p className="text-sm text-gray-300 truncate">{entry.note}</p>
                  <div className="flex items-center justify-end mt-1">
                    <Heart className="w-3 h-3 text-red-400 fill-current" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MoodSummary;
