import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Target,
  TrendingUp,
  Dumbbell,
  Heart,
  Zap,
  BarChart3,
  Calendar,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import UserContext from "../../context/UserContext";
import { Footer } from "../partials/Footer";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const { userFlag } = useContext(UserContext);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Our smart AI checks your workout data and gives you easy-to-follow tips that help improve performance day by day.",
    },
    {
      icon: Target,
      title: "Customized Routines",
      description:
        "Get daily workout and meal plans made just for you, based on your fitness level, goals, and lifestyle habits.",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description:
        "Track all your reps, sets, and goals in one place, with clean charts and updates to show how far you’ve come.",
    },
    {
      icon: Zap,
      title: "Real-time Suggestions",
      description:
        "Get live feedback during your workouts, helping you fix form, push harder, and get faster results over time.",
    },
  ];

  const benefits = [
    "Track daily workouts with detailed sets and reps",
    "AI analyzes your performance patterns",
    "Get personalized workout suggestions",
    "Receive customized diet recommendations",
    "Monitor physical and mental progress",
    "Adaptive training intensity recommendations",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Overlay to darken the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80 z-10"></div>

          {/* Single image that fully covers the section responsively */}
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')",
            }}
          ></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + i * 8}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 py-32 relative z-30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-md font-medium backdrop-blur-sm">
                <Brain className="w-5 h-5 mr-3" />
                Your AI-Powered Fitness Revolution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Transform Your
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent block mt-2">
                Fitness Journey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-head"
            >
              Experience the future of fitness with our AI-powered workout
              tracker that learns from your data to provide{" "}
              <span className="text-red-400 font-medium">
                personalized coaching
              </span>
              , nutrition plans, and performance insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link to={userFlag ? "/tracking" : "/register"}>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-5 rounded-xl font-bold tracking-wide text-lg hover:from-red-800 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-red-500/25 group cursor-pointer"
                >
                  {userFlag
                    ? "Track your progress"
                    : "Start Your Transformation"}
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform inline" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                {
                  value: "50+",
                  label: "Active Users",
                  sublabel: "Training Daily",
                },
                {
                  value: "1k+",
                  label: "Workouts Analyzed",
                  sublabel: "By Our AI",
                },
                {
                  value: "100%",
                  label: "Success Rate",
                  sublabel: "Goal Achievement",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">{stat.sublabel}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powered by <span className="text-red-500">Intelligence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI doesn't just track your workouts - it understands them,
              analyzes patterns, and provides actionable insights to accelerate
              your fitness journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-red-900/20 hover:border-red-500/50 transition-all duration-300 flex flex-col"
              >
                <motion.div
                  animate={{
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-red-500 mb-4 place-self-center"
                >
                  <feature.icon size={48} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white place-self-center">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-md font-head">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-red-950/10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="text-red-500">Works</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple steps to unlock your full potential with AI-powered fitness
              coaching
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center md:px-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <CheckCircle
                      className="text-red-500 flex-shrink-0"
                      size={24}
                    />
                  </motion.div>
                  <span className="text-lg text-gray-300 font-head">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-x-hidden"
            >
              <div className="bg-gradient-to-br from-red-900/20 to-red-950/40 p-8 rounded-2xl border border-red-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    className="bg-black/50 p-4 rounded-lg text-center"
                  >
                    <BarChart3
                      className="text-red-400 mx-auto mb-2"
                      size={32}
                    />
                    <div className="text-sm text-gray-300">
                      Progress Analytics
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="bg-black/50 p-4 rounded-lg text-center"
                  >
                    <Heart
                      className="text-red-400 mx-auto mb-2"
                      size={32}
                    />
                    <div className="text-sm text-gray-300">
                      Health Monitoring
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="bg-black/50 p-4 rounded-lg text-center"
                  >
                    <Calendar
                      className="text-red-400 mx-auto mb-2"
                      size={32}
                    />
                    <div className="text-sm text-gray-300">Smart Planning</div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    className="bg-black/50 p-4 rounded-lg text-center"
                  >
                    <Award
                      className="text-red-400 mx-auto mb-2"
                      size={32}
                    />
                    <div className="text-sm text-gray-300">
                      Achievement Tracking
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="text-red-500">Fitness Journey?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-head">
              Join thousands of users who have already discovered the power{" "}
              <br /> of AI-driven fitness coaching. Your personalized trainer is
              waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={userFlag ? "/profile" : "/register"}>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-5 rounded-xl font-bold tracking-wide text-lg hover:from-red-800 hover:to-red-800 transition-all duration-300 shadow-md hover:shadow-red-500/25 group cursor-pointer"
                >
                  {userFlag ? "My Dashboard" : `Let's get started`}
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform inline" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
