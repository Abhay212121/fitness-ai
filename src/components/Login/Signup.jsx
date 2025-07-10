import { motion } from "framer-motion";
import { Dumbbell, Lock, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "./InputBox";
import { useEffect } from "react";

export const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="min-h-screen bg-black font-head py-6 px-4 flex flex-col items-center justify-start">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-3 text-center"
      >
        <div
          onClick={() => navigate("/")}
          className="flex justify-center space-x-2 mb-2 cursor-pointer"
        >
          <Dumbbell className="h-8 w-8 text-red-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            FitTrack
          </span>
        </div>
        <p className="text-white font-bold text-3xl">Join FitTrack</p>
        <p className="text-gray-400 tracking-wide text-lg">
          Start your fitness journey today
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full max-w-md bg-[#111827] flex flex-col space-y-5 text-white px-6 py-6 rounded-xl mt-8"
      >
        <p className="text-2xl font-semibold text-center">Create Account</p>

        <InputBox
          placeholder="Enter your full name"
          inputType="text"
          Iconname={User}
          labelName="Full Name"
          inputId="fullName"
        />
        <InputBox
          placeholder="Enter your email"
          inputType="email"
          Iconname={Mail}
          labelName="Email"
          inputId="email"
        />
        <InputBox
          placeholder="Enter your password"
          inputType="password"
          Iconname={Lock}
          labelName="Password"
          inputId="password"
        />
        <InputBox
          placeholder="Confirm your password"
          inputType="password"
          Iconname={Lock}
          labelName="Confirm Password"
          inputId="cpassword"
        />

        <div className="flex items-start space-x-2 mt-1">
          <input
            type="checkbox"
            name="termsAndCondition"
            id="termsAndCondition"
            className="mt-1"
          />
          <label
            htmlFor="termsAndCondition"
            className="text-sm text-gray-300"
          >
            I agree to the{" "}
            <span className="font-semibold text-red-400">
              Terms of Services
            </span>{" "}
            and{" "}
            <span className="font-semibold text-red-400">Privacy Policy</span>
          </label>
        </div>

        <button className="w-full rounded-xl p-3 bg-red-500 hover:bg-red-600 text-white transition duration-300">
          Create Account
        </button>

        <p className="text-md text-gray-300 text-center">
          Already have an Account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="font-semibold text-red-400 hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </motion.div>
    </section>
  );
};
