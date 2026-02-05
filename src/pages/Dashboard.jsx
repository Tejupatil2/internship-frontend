import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">Intern Dashboard</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* PROFILE */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-bold">Profile</h3>
          <p className="text-sm text-gray-600 mt-2">Web Development Intern</p>
          <p className="mt-4 font-semibold">Progress</p>
          <ProgressBar percent={85} />
        </div>

        {/* ANNOUNCEMENTS */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm lg:col-span-2">
          <h3 className="font-bold mb-4">Announcements</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>📌 Final project submission deadline: Friday</li>
            <li>🎥 Mentor review session on Thursday</li>
            <li>📄 Resume workshop recording uploaded</li>
          </ul>
        </div>
      </div>

      {/* TASKS */}
      <div className="mt-12">
        <h3 className="font-bold mb-6">Weekly Tasks</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border shadow-sm"
            >
              <p className="font-semibold">{week}</p>
              <p className="text-sm text-gray-600 mt-1">
                Tasks completed successfully
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
