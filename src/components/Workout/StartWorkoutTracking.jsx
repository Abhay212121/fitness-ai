import { useEffect, useState } from "react";
import {
  Activity,
  BookOpen,
  Check,
  Clock,
  CodeSquare,
  Pause,
  Play,
  Plus,
  Save,
} from "lucide-react";
import axios from "axios";

export const StartWorkoutTracking = () => {
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [workoutTimer, setWorkoutTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState([]);
  const [workoutNotes, setWorkoutNotes] = useState("");

  const startWorkout = () => {
    setIsWorkoutActive(true);
    setWorkoutTimer(0);
    setCurrentWorkout([]);
    setWorkoutName("");
    setWorkoutNotes("");
  };

  const setWorkoutView = (view) => {
    console.log("Switching to view:", view);
  };

  useEffect(() => {
    let intervalId;

    if (isWorkoutActive && !isPaused) {
      intervalId = setInterval(() => {
        setWorkoutTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId); // cleanup when isWorkoutActive changes
  }, [isWorkoutActive, isPaused]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const addExercise = () => {
    const name = prompt("Enter Exercise: ");
    if (name) {
      const newExercise = {
        id: Date.now(),
        name: name,
        sets: [],
      };
      setCurrentWorkout((prev) => [...prev, newExercise]);
    }
  };

  const addSet = (exerciseId) => {
    setCurrentWorkout((prev) =>
      prev.map((exercise) =>
        exercise.id === exerciseId
          ? {
              ...exercise,
              sets: [
                ...exercise.sets,
                { weight: "", reps: "", completed: false },
              ],
            }
          : exercise
      )
    );
  };

  const updateSet = (exerciseId, setIndex, field, value) => {
    setCurrentWorkout((prev) =>
      prev.map((exercise) => {
        if (exercise.id !== exerciseId) return exercise;
        const updatedSets = [...exercise.sets];
        updatedSets[setIndex] = {
          ...updatedSets[setIndex],
          [field]: value,
        };
        return { ...exercise, sets: updatedSets };
      })
    );
  };

  const toggleSetComplete = (exerciseId, setIndex) => {
    setCurrentWorkout((prev) =>
      prev.map((exercise) => {
        if (exercise.id !== exerciseId) return exercise;
        const updatedSets = [...exercise.sets];
        updatedSets[setIndex] = {
          ...updatedSets[setIndex],
          completed: !updatedSets[setIndex].completed,
        };
        return { ...exercise, sets: updatedSets };
      })
    );
  };

  const saveAsTemplate = () => {
    console.log("Saved as template:", { workoutName, currentWorkout });
  };

  const endWorkout = async () => {
    console.log("Workout finished:", {
      workoutName,
      currentWorkout,
      workoutNotes,
    });
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:3000/track/workout",
        {
          workoutName,
          currentWorkout,
          workoutNotes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.data.status === 200) {
        setIsWorkoutActive(false);
        setWorkoutTimer(0);
        setCurrentWorkout([]);
        setWorkoutName("");
        setWorkoutNotes("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="space-y-6 bg-black text-white p-6 rounded-xl shadow-lg">
      {!isWorkoutActive ? (
        <div className="bg-[#111] rounded-lg border border-red-800 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold">Start New Workout</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={startWorkout}
              className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-red-600/40 rounded-lg hover:border-red-500 hover:bg-red-950 transition-all duration-200 cursor-pointer"
            >
              <Plus className="w-6 h-6 text-red-500" />
              <div className="text-left">
                <div className="font-semibold">Quick Start</div>
                <div className="text-sm text-gray-400">Start empty workout</div>
              </div>
            </button>

            <button
              onClick={() => setWorkoutView("templates")}
              className="flex items-center justify-center gap-3 p-6 border-2 border-dashed border-red-600/40 rounded-lg hover:border-red-500 hover:bg-red-950 transition-all duration-200 cursor-pointer"
            >
              <BookOpen className="w-6 h-6 text-red-500" />
              <div className="text-left">
                <div className="font-semibold">Use Template</div>
                <div className="text-sm text-gray-400">Start from template</div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#111] rounded-lg border border-red-800 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-red-600" />
              <div>
                <h2 className="text-2xl font-bold">
                  {workoutName || "Current Workout"}
                </h2>
                <div className="text-sm text-gray-400">
                  {formatTime(workoutTimer)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="flex items-center gap-2 px-3 py-2 bg-red-900 text-white rounded-md hover:bg-red-800 transition-colors cursor-pointer"
              >
                {isPaused ? (
                  <Play className="w-4 h-4" />
                ) : (
                  <Pause className="w-4 h-4" />
                )}
                {isPaused ? "Resume" : "Pause"}
              </button>

              <button
                onClick={saveAsTemplate}
                className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-red-900 transition-colors cursor-pointer"
              >
                <Save className="w-4 h-4" />
                Save Template
              </button>

              <button
                onClick={endWorkout}
                className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors cursor-pointer"
              >
                <Check className="w-4 h-4" />
                Finish
              </button>
            </div>
          </div>

          <input
            type="text"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            placeholder="Enter workout name..."
            className="w-full px-3 py-2 border border-red-800 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-6"
          />

          <div className="space-y-4 mb-6">
            {currentWorkout.map((exercise, exerciseIndex) => (
              <div
                key={exercise.id}
                className="bg-black border border-red-900 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{exercise.name}</h3>
                  <button
                    onClick={() => addSet(exercise.id)}
                    className="flex items-center gap-1 px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3 h-3" /> Add Set
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-2 text-sm font-medium text-gray-400">
                  <div>Set</div>
                  <div>Weight (kg)</div>
                  <div>Reps</div>
                  <div>✓</div>
                </div>

                <div className="space-y-2">
                  {exercise.sets.map((set, setIndex) => (
                    <div
                      key={setIndex}
                      className="grid grid-cols-4 gap-2 items-center"
                    >
                      <div className="text-sm font-medium">{setIndex + 1}</div>

                      <input
                        type="number"
                        value={set.weight}
                        onChange={(e) =>
                          updateSet(
                            exercise.id,
                            setIndex,
                            "weight",
                            Number(e.target.value)
                          )
                        }
                        className="px-2 py-1 border border-red-800 rounded bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-600 text-sm"
                        placeholder="0"
                      />

                      <input
                        type="number"
                        value={set.reps}
                        onChange={(e) =>
                          updateSet(
                            exercise.id,
                            setIndex,
                            "reps",
                            Number(e.target.value)
                          )
                        }
                        className="px-2 py-1 border border-red-800 rounded bg-black text-white focus:outline-none focus:ring-1 focus:ring-red-600 text-sm"
                        placeholder="0"
                      />

                      <button
                        onClick={() => toggleSetComplete(exercise.id, setIndex)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors cursor-pointer ${
                          set.completed
                            ? "bg-green-500 border-green-500 text-white"
                            : "border-gray-500 hover:border-red-600"
                        }`}
                      >
                        {set.completed && <Check className="w-3 h-3" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={addExercise}
            className="w-full flex items-center justify-center gap-2 p-4 border-2 border-dashed border-red-600/40 rounded-lg hover:border-red-500 hover:bg-red-950 transition-all duration-200 cursor-pointer"
          >
            <Plus className="w-5 h-5 text-red-500" />
            <span className="font-medium">Add Exercise</span>
          </button>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">
              Workout Notes
            </label>
            <textarea
              value={workoutNotes}
              onChange={(e) => setWorkoutNotes(e.target.value)}
              className="w-full px-3 py-2 border border-red-800 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
              rows={3}
              placeholder="How did you feel? Any observations?"
            />
          </div>
        </div>
      )}
    </div>
  );
};
