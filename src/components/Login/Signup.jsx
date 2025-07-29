import { motion } from "framer-motion";
import { Dumbbell, Lock, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "./InputBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../constants/constant";
import { Button } from "antd";

export const Signup = () => {
  const [signupFormData, setSignupFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [isMatch, setMatch] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationArr, setValidationArr] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (
      signupFormData.password == signupFormData.cpassword &&
      signupFormData.cpassword &&
      signupFormData.password
    ) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [signupFormData.password, signupFormData.cpassword]);

  const handeCreateBtn = async () => {
    setLoading(true);
    const { cpassword, ...rest } = signupFormData;
    const data = rest;
    console.log(data);
    try {
      const res = await axios.post(`${baseUrl}/user/register`, {
        ...data,
      });
      console.log(res.data);
      if (res.data.status == 201) {
        console.log("User registered Successfully!");
        navigate("/login");
      } else if (res.data.status == 400) {
        console.log("Error in registering user!");
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
            FitHub
          </span>
        </div>
        <p className="text-white font-bold text-3xl">Join FitHub</p>
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
          formData={signupFormData}
          setFormData={setSignupFormData}
          validationArr={validationArr}
        />
        <InputBox
          placeholder="Enter your email"
          inputType="email"
          Iconname={Mail}
          labelName="Email"
          inputId="email"
          formData={signupFormData}
          setFormData={setSignupFormData}
          validationArr={validationArr}
        />
        <InputBox
          placeholder="Enter your password"
          inputType="password"
          Iconname={Lock}
          labelName="Password"
          inputId="password"
          formData={signupFormData}
          setFormData={setSignupFormData}
          validationArr={validationArr}
        />
        <InputBox
          placeholder="Confirm your password"
          inputType="password"
          Iconname={Lock}
          labelName="Confirm Password"
          inputId="cpassword"
          formData={signupFormData}
          setFormData={setSignupFormData}
          validationArr={validationArr}
        />

        <div className="flex items-start space-x-2 mt-1">
          <input
            type="checkbox"
            onClick={() => setTermsCheck(!termsCheck)}
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

        {/* <button
          disabled={
            !termsCheck || !isMatch || !signupFormData.cpassword || loading
          }
          onClick={handeCreateBtn}
          className={`w-full rounded-xl p-3 text-white transition duration-300 ${
            termsCheck && isMatch && signupFormData.cpassword
              ? "bg-red-500 hover:bg-red-600 cursor-pointer"
              : "bg-red-400 cursor-not-allowed"
          }`}
        >
          Create Account
        </button> */}

        <Button
          disabled={
            !termsCheck || !isMatch || !signupFormData.cpassword || loading
          }
          loading={loading}
          onClick={handeCreateBtn}
          className={`!w-full !border-0 !rounded-lg !px-3 !py-6 !text-lg !font-semibold !font-head !text-white !transition !duration-300 ${
            termsCheck && isMatch && signupFormData.cpassword
              ? "!bg-red-500 !hover:bg-red-600 !cursor-pointer"
              : "!bg-red-400 !cursor-not-allowed"
          }`}
        >
          Create Account
        </Button>
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
