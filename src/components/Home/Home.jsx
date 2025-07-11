import { useEffect } from "react";
import Header from "../partials/Header";
import Hero from "./Hero";
import WorkoutSection from "./WorkoutSection";

export function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <WorkoutSection />
    </>
  );
}
