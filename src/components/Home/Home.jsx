import { useEffect } from "react";
import Header from "../partials/Header";
import { Footer } from "../partials/Footer";
import Hero from "./Hero";
import WorkoutSection from "./WorkoutSection";
import MentalHealthSection from "./MentalHealth";
import TrackingSection from "./TrackingSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constant";

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const checkDataFilled = async () => {
      const token = localStorage.getItem("token");

      const response = await axios.get(`${baseUrl}/user/check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.data.status === 404) {
        setTimeout(() => {
          navigate("/personalized-plan");
        }, 5000);
      }
    };
    checkDataFilled();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <WorkoutSection />
      <MentalHealthSection />
      <TrackingSection />
      <Footer />
    </>
  );
}
