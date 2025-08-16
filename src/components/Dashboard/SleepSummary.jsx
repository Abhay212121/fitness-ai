import axios from "axios";
import { motion } from "framer-motion";
import { Moon, Clock, Calendar, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import { baseUrl } from "../../../constants/constant";

const SleepSummary = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const getSleepInsights = async () => {
  //     const response = await axios.get(`${baseUrl}/dashboard/sleepdata`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(response);
  //   };
  //   getSleepInsights();
  // });

  const sleepData = [
    {
      date: "Last Night",
      duration: "7h 45m",
      quality: 85,
      bedtime: "10:30 PM",
    },
    {
      date: "2 nights ago",
      duration: "8h 15m",
      quality: 92,
      bedtime: "10:00 PM",
    },
    {
      date: "3 nights ago",
      duration: "6h 30m",
      quality: 68,
      bedtime: "11:45 PM",
    },
    {
      date: "4 nights ago",
      duration: "7h 20m",
      quality: 78,
      bedtime: "10:15 PM",
    },
  ];

  const getQualityColor = (quality) => {
    if (quality >= 85)
      return "text-green-400 bg-green-900/20 border-green-500/30";
    if (quality >= 70)
      return "text-yellow-400 bg-yellow-900/20 border-yellow-500/30";
    return "text-orange-400 bg-orange-900/20 border-orange-500/30";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="rounded-lg border border-purple-500/20 bg-purple-900/10 p-6"
    >
      <div className="mb-4 flex items-center text-white text-2xl font-semibold tracking-tight">
        <Moon className="h-5 w-5 mr-2 text-purple-400" />
        Sleep Tracking
      </div>
      <div className="space-y-3">
        {sleepData.map((sleep, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center justify-between p-3 rounded-lg border ${getQualityColor(
              sleep.quality
            )}`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Moon className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <p className="font-medium text-white">{sleep.duration}</p>
                <p className="text-xs text-gray-400 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {sleep.date}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-white flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {sleep.quality}% quality
              </p>
              <p className="text-xs text-gray-400 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Bed: {sleep.bedtime}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SleepSummary;
