import { useEffect, useState } from "react";
import LoaderSkeleton from "../components/LoaderSkeleton";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const tasks = [
    { week: "Week 1", title: "User Flow + Wireframes", status: "Completed" },
    { week: "Week 2", title: "Pages + Components", status: "Completed" },
    { week: "Week 3", title: "Responsive + UX Polish", status: "In Progress" },
    { week: "Week 4", title: "Lighthouse + Deployment", status: "Pending" },
  ];

  const getStatusStyle = (status) => {
    if (status === "Completed")
      return "bg-green-100 text-green-800 border-green-200";
    if (status === "In Progress")
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-white rounded-2xl shadow-sm border p-6 w-full md:w-1/3">
          <h2 className="text-xl font-extrabold">Student Profile</h2>

          {loading ? (
            <div className="mt-4">
              <LoaderSkeleton />
            </div>
          ) : (
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-semibold">Demo Student</p>

              <p className="text-sm text-gray-500 mt-4">Domain</p>
              <p className="font-semibold">Web Development (Frontend)</p>

              <p className="text-sm text-gray-500 mt-4">Application Status</p>
              <span className="inline-block px-3 py-1 rounded-lg text-sm font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                Active
              </span>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6 w-full md:w-2/3">
          <h2 className="text-xl font-extrabold">Internship Progress</h2>
          <p className="text-gray-600 mt-2">
            Track weekly tasks and completion status.
          </p>

          {loading ? (
            <div className="mt-6">
              <LoaderSkeleton />
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {tasks.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-3 border rounded-xl p-4"
                >
                  <div>
                    <p className="font-bold">{t.week}</p>
                    <p className="text-gray-600 text-sm">{t.title}</p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-semibold border ${getStatusStyle(
                      t.status
                    )}`}
                  >
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
