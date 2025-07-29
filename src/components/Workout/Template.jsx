import axios from "axios";
import { BookOpen, Loader2, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../constants/constant";

export const Template = ({ setActiveTab }) => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const fetchTemplates = async () => {
      try {
        const response = await axios.get(`${baseUrl}/track/gettemplates`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        setTemplates(response.data.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  const startWorkout = (template) => {
    localStorage.setItem("selectedTemplate", JSON.stringify(template));
    setActiveTab("start");
  };

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20 text-white">
          <Loader2 className="animate-spin h-10 w-10 text-red-600 mb-4" />
          <p className="text-[#a4a6ab]">Loading workout templates...</p>
        </div>
      )}
      {!isLoading && (
        <div className="space-y-6 bg-black text-white p-6 rounded-xl shadow-lg md:px-10">
          <div className="bg-card rounded-lg border shadow-sm p-6 border-red-800 bg-[#111]">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-semibold ">Workout Templates</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates?.map((template) => (
                <div
                  key={template.id}
                  className="bg-black border border-red-900  rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{template.name}</h3>
                    <button
                      onClick={() => startWorkout(template)}
                      className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3" />
                      Start
                    </button>
                  </div>

                  <div className="space-y-1 text-sm text-[#a5a6ac]">
                    {template.exercises?.map((exercise) => (
                      <div key={exercise.id}>
                        {exercise.name} • {exercise.sets.length} sets
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 text-xs text-[#a5a6ac]">
                    Created {new Date(template.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
