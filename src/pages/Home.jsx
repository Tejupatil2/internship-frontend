import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <section className="bg-white rounded-2xl shadow-sm border p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Build your internship journey like a real product 🚀
            </h1>
            <p className="mt-3 text-gray-600 text-base md:text-lg">
              This portal is a demo frontend for an internship/learning platform
              — with responsive UI, clean flow, and a dashboard experience.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <Link
                to="/apply"
                className="px-5 py-3 rounded-xl bg-black text-white font-semibold hover:opacity-90 transition"
              >
                Apply Now
              </Link>
              <Link
                to="/dashboard"
                className="px-5 py-3 rounded-xl bg-gray-100 text-black font-semibold hover:bg-gray-200 transition"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-2xl border bg-gray-100 p-6">
              <p className="text-sm font-semibold text-gray-700">
                Platform Highlights
              </p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>✅ Responsive layouts (Mobile-first)</li>
                <li>✅ Internship application flow</li>
                <li>✅ Dashboard + progress tracking</li>
                <li>✅ UX refinement (loading skeletons)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Home",
            desc: "Landing page + clear CTA for students.",
          },
          {
            title: "Apply",
            desc: "Form-based internship application UI.",
          },
          {
            title: "Dashboard",
            desc: "Shows task progress & application status.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="mt-2 text-gray-600">{card.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
