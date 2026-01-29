import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Build Real Skills. <br /> Not Just Certificates.
            </h1>
            <p className="mt-5 text-gray-300 text-lg">
              Join the NotWorking Internship Program and work on real-world
              projects designed to make you industry-ready.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                to="/apply"
                className="bg-white text-black px-6 py-3 rounded-xl font-semibold transition hover:scale-105"
              >
                Apply Now
              </Link>
              <Link
                to="/dashboard"
                className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
              >
                View Dashboard
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Internship"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Why NotWorking?</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Real Projects",
              text: "Work on industry-style tasks instead of theoretical assignments.",
            },
            {
              title: "Structured Roadmap",
              text: "Weekly learning roadmap with clear milestones.",
            },
            {
              title: "Career Focused",
              text: "Designed to strengthen resumes and portfolios.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAINS */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Internship Domains
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Web Development",
              "UI / UX Design",
              "Data Science",
              "Android Development",
            ].map((domain, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border text-center font-semibold transition hover:scale-105"
              >
                {domain}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
