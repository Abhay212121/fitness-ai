import { Dumbbell } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-red-900/20 py-8 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Dumbbell className="h-6 w-6 text-red-500" />
            <span className="text-lg font-bold text-white">FitTrack</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 FitTrack. Your AI-powered fitness companion.
          </div>
        </div>
      </div>
    </footer>
  );
};
