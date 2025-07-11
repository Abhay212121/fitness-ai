import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Menu, User, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { userFlag, username } = useContext(UserContext);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Workouts", href: "/workouts" },
    { label: "Mental Health", href: "/mental-health" },
    { label: "Tracking", href: "/tracking" },
    { label: "About", href: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-red-900/20 font-head px-4 lg:px-24"
    >
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Dumbbell className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              FitTrack
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 relative group"
              >
                <Link to={item.href}>
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <button
              onClick={() => navigate(userFlag ? "/profile" : "/login")}
              className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-md rounded-xl cursor-pointer ${
                userFlag
                  ? "flex items-center gap-2 font-semibold font-head tracking-wide"
                  : ""
              }  transition duration-300`}
            >
              {
                <User
                  className={`w-4 h-4 ${userFlag ? "inline-block" : "hidden"}`}
                />
              }
              {userFlag ? `${capitalize(username)}` : "Get Started"}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 relative group w-fit"
                >
                  <Link to={item.href}>
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => navigate("/login")}
                className="bg-red-600 p-2 text-white text-sm rounded-md cursor-pointer font-semibold transition duration-300"
              >
                {
                  <User
                    className={`w-6 h-6 ${
                      userFlag ? "inline-block" : "hidden"
                    }`}
                  />
                }
                {userFlag ? `` : "Get Started"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;
