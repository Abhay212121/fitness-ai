import { motion } from "framer-motion";
import { Dumbbell, Lock, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "./InputBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../constants/constant";

export const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [validationArr, setValidationArr] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleLoginBtn = async () => {
    setLoading(true);
    console.log(loginFormData);
    try {
      const res = await axios.post(`${baseUrl}user/login`, {
        ...loginFormData,
      });
      console.log(res.data);
      if (res.data.status == 200) {
        navigate("/");
      } else if (res.data.status == 401 || res.data.status == 404) {
        setValidationArr(res.data.errors);
      }
    } catch (error) {
      console.log("Err:", error);
    } finally {
      setLoading(false);
    }
  };

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
        <p className="text-white font-bold text-3xl">Welcome Back</p>
        <p className="text-gray-400 tracking-wide text-lg">
          Sign in to continue your fitness journey
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full max-w-md bg-[#111827] flex flex-col space-y-5 text-white px-6 py-6 rounded-xl mt-8"
      >
        <p className="text-2xl font-semibold text-center">Sign In</p>

        <InputBox
          placeholder="Enter your email"
          inputType="email"
          Iconname={Mail}
          labelName="Email"
          inputId="email"
          formData={loginFormData}
          setFormData={setLoginFormData}
          validationArr={validationArr}
        />
        <InputBox
          placeholder="Enter your password"
          inputType="password"
          Iconname={Lock}
          labelName="Password"
          inputId="password"
          formData={loginFormData}
          setFormData={setLoginFormData}
          validationArr={validationArr}
        />

        <button
          onClick={handleLoginBtn}
          disabled={!loginFormData.email || !loginFormData.password}
          className={`w-full rounded-xl p-3 text-white transition duration-300 ${
            loginFormData.email && loginFormData.password
              ? "bg-red-500 hover:bg-red-600 cursor-pointer"
              : "bg-red-400 cursor-not-allowed"
          }`}
        >
          Log in
        </button>

        <p className="text-md text-gray-300 text-center">
          Don't have an Account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="font-semibold text-red-400 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </motion.div>
    </section>
  );
};
