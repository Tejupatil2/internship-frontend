import { useEffect, useState } from "react";
import LoaderSkeleton from "../components/LoaderSkeleton";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const roadmap = [
    { week: "Week 1", task: "User Flow & Wireframes", status: "Completed" },
    { week: "Week 2", task: "Component Development", status: "Completed" },
    { week: "Week 3", task: "Responsive Refinement", status: "Completed" },
    { week: "Week 4", task: "Deployment & QA", status: "Completed" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Intern Dashboard</h2>

      {loading ? (
        <LoaderSkeleton />
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {roadmap.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm text-gray-500">{item.week}</p>
              <h3 className="font-bold text-lg mt-1">{item.task}</h3>
              <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
