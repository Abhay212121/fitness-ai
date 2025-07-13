import { useEffect } from "react";
import Header from "../partials/Header";
import { Footer } from "../partials/Footer";
import Hero from "./Hero";
import WorkoutSection from "./WorkoutSection";
import MentalHealthSection from "./MentalHealth";
import TrackingSection from "./TrackingSection";

export function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
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
