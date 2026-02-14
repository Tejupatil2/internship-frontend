import { Link } from "react-router-dom";
import StatsCard from "../components/StatsCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQItem from "../components/FAQItem";

export default function Home() {
  return (
    <div>
      {/* VIDEO HERO */}
      <section className="relative h-[90vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-working-on-laptop-1608/1080p.mp4"
        />
        <div className="relative z-10 bg-black/60 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Build Industry-Ready Skills
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-200">
              Learn by building real projects under structured mentorship.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/apply"
                className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
              >
                Apply Now
              </Link>
              <Link
                to="/programs"
                className="border border-white px-6 py-3 rounded-xl"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard value="25,000+" label="Applications" />
        <StatsCard value="120+" label="Mentors" />
        <StatsCard value="15+" label="Domains" />
        <StatsCard value="92%" label="Completion Rate" />
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">What Interns Say</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <TestimonialCard
            name="Ananya Sharma"
            role="Web Intern"
            text="This internship felt like working in a real company."
            image="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <TestimonialCard
            name="Rahul Verma"
            role="Data Intern"
            text="Structured roadmap helped me stay consistent."
            image="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <TestimonialCard
            name="Sneha Patil"
            role="UI/UX Intern"
            text="Best learning experience so far."
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
              answer="The internship focuses on learning and certification."
            />
            <FAQItem
              question="Is there a certificate?"
              answer="Yes, certificates are provided after completion."
            />
            <FAQItem
              question="Is it beginner friendly?"
              answer="Yes, the roadmap is designed for beginners."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
