import { Link } from "react-router-dom";
import StatsCard from "../components/StatsCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQItem from "../components/FAQItem";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build Industry-Ready Skills
            </h1>
            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              NotWorking is a structured internship platform focused on real
              projects, real deadlines, and real growth.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                to="/apply"
                className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Apply Now
              </Link>
              <Link
                to="/dashboard"
                className="border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
              >
                Dashboard
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
            alt="Team work"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard value="25,000+" label="Students Applied" />
        <StatsCard value="120+" label="Mentors" />
        <StatsCard value="15+" label="Internship Domains" />
        <StatsCard value="92%" label="Completion Rate" />
      </section>

      {/* ROADMAP */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            4-Week Internship Roadmap
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              "Orientation & Fundamentals",
              "Project Development",
              "Refinement & Optimization",
              "Deployment & Review",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border shadow-sm"
              >
                <h3 className="font-bold text-lg">Week {i + 1}</h3>
                <p className="text-gray-600 mt-2">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">What Interns Say</h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <TestimonialCard
            name="Ananya Sharma"
            role="Web Development Intern"
            text="This internship felt like working in a real startup."
            image="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <TestimonialCard
            name="Rahul Verma"
            role="Data Science Intern"
            text="Weekly roadmap kept me disciplined and focused."
            image="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <TestimonialCard
            name="Sneha Patil"
            role="UI/UX Intern"
            text="Best learning experience I’ve had so far."
            image="https://randomuser.me/api/portraits/women/65.jpg"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">FAQs</h2>

          <div className="mt-10 space-y-4">
            <FAQItem
              question="Is this internship paid?"
              answer="This internship focuses on skill-building and certification."
            />
            <FAQItem
              question="Is there a certificate?"
              answer="Yes, certificates are provided after successful completion."
            />
            <FAQItem
              question="Is it beginner friendly?"
              answer="Yes, structured roadmap supports beginners."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
