import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">Intern Dashboard</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          ["85%", "Overall Progress"],
          ["12", "Tasks Completed"],
          ["3", "Mentor Sessions"],
          ["7 Days", "Streak"],
        ].map(([value, label], i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border shadow-sm">
            <p className="text-3xl font-extrabold">{value}</p>
            <p className="text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white p-6 rounded-2xl border">
        <h3 className="font-bold mb-4">Progress</h3>
        <ProgressBar percent={85} />
      </div>
    </div>
  );
}
