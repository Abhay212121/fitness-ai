import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Signup } from "./components/Login/Signup";
import { Login } from "./components/Login/Login";
import About from "./components/About/About";
import MentalComponent from "./components/Mental Health/MentalComponent";
import PersonalizedPlanForm from "./components/Personalized Form/PersonalizedForm";
import Tracking from "./components/Tracking/Tracking";
import { Workout } from "./components/Workout/Workout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/register"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/mental-health"
          element={<MentalComponent />}
        />
        <Route
          path="/personalized-plan"
          element={<PersonalizedPlanForm />}
        />
        <Route
          path="/tracking"
          element={<Tracking />}
        />
        <Route
          path="/workouts"
          element={<Workout />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
