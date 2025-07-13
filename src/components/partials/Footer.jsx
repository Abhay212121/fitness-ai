import { motion } from "framer-motion";
import { Dumbbell, Github, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 font-head">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-5 text-center"
        >
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              FitTrack
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-gray-400 max-w-lg">
            Your AI-powered companion for fitness, nutrition, and mental
            wellness.
          </p>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>© 2025 FitTrack. Made by Abhay</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for your wellbeing.</span>
          </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/Abhay212121"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            <Github className="w-5 h-5 text-red-500" />
            <span>Abhay's GitHub</span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};
