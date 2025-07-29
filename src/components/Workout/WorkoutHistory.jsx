import { useEffect, useState } from "react";
import { History, Loader2 } from "lucide-react";
import axios from "axios";
import { baseUrl } from "../../../constants/constant";

export const WorkoutHistory = () => {
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const fetchWorkoutHistory = async () => {
      try {
        const response = await axios.get(`${baseUrl}/track/gethistory`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        setWorkoutHistory(response.data.data);
      } catch (error) {
        console.error("Failed to fetch workout history:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutHistory();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20 text-white">
          <Loader2 className="animate-spin h-10 w-10 text-red-600 mb-4" />
          <p className="text-[#a4a6ab]">Loading workout history...</p>
        </div>
      )}
      {!isLoading && (
        <div className="bg-card bg-black text-white rounded-lg border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <History className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-semibold ">Workout History</h2>
          </div>

          {workoutHistory.length === 0 ? (
            <div className="text-center py-12">
              <History className="w-12 h-12 text-[#a4a6ab] mx-auto mb-4" />
              <p className="text-[#a4a6ab]">
                No workout history yet. Complete your first workout to see it
                here!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {workoutHistory.map((workout) => (
                <div
                  key={workout.id}
                  className="bg-[#28292B33] rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#FAFAFA]">
                      {workout.name}
                    </h3>
                    <div className="text-sm text-[#a4a6ab]">
                      {workout.date
                        ? new Date(
                            workout.date.seconds
                              ? workout.date.seconds * 1000
                              : workout.date
                          ).toLocaleDateString()
                        : "Invalid date"}{" "}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {workout.exercises.map((exercise) => (
                      <div
                        key={exercise.id}
                        className="text-sm"
                      >
                        <span className="font-medium text-[#FAFAFA]">
                          {exercise.name}
                        </span>
                        <ul className="ml-4 list-disc text-[#a4a6ab]">
                          {exercise.sets.map(
                            (set, index) =>
                              set.weight != null && (
                                <li key={index}>
                                  {set.completed ? "✅" : "❌"} Set {index + 1}{" "}
                                  — {set.reps} reps{" "}
                                  {set.weight ? `@ ${set.weight}kg` : ""}
                                </li>
                              )
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {workout.notes && (
                    <div className="mt-2 text-sm text-[#a4a6ab] italic">
                      "{workout.notes}"
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
