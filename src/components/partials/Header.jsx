import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Menu, User, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { userFlag, username } = useContext(UserContext);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Workouts", href: "/workouts" },
    { label: "Mental Health", href: "/mental-health" },
    { label: "Tracking", href: "/tracking" },
    { label: "About", href: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-red-900/20 font-head px-4 lg:px-24"
    >
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                FitHub
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 relative group"
              >
                <Link to={item.href}>
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
            <button
              onClick={() => navigate(userFlag ? "/profile" : "/login")}
              className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-md rounded-xl cursor-pointer ${
                userFlag
                  ? "flex items-center gap-2 font-semibold font-head tracking-wide"
                  : ""
              }  transition duration-300`}
            >
              {userFlag && <User className="w-4 h-4" />}
              {userFlag ? `${username}` : "Get Started"}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white pr-4"
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
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 px-8 space-y-4"
            >
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-200 relative group w-fit"
                >
                  <Link to={item.href}>
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </div>
              ))}
              <button
                onClick={() => navigate("/login")}
                className="bg-red-600 p-2 text-white text-sm rounded-md cursor-pointer font-semibold transition duration-300"
              >
                {userFlag && <User className="w-6 h-6" />}
                {userFlag ? `` : "Get Started"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;
