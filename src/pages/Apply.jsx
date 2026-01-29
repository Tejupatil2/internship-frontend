import { useState } from "react";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white p-10 rounded-2xl border shadow-sm">
        <h2 className="text-3xl font-bold">Internship Application</h2>
        <p className="text-gray-600 mt-2">
          Fill in your details carefully. Our team will review your application.
        </p>

        {submitted ? (
          <div className="mt-6 text-green-700 font-semibold">
            ✅ Application submitted successfully!
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-8 grid gap-6"
          >
            <input required placeholder="Full Name" className="p-3 border rounded-xl" />
            <input required type="email" placeholder="Email" className="p-3 border rounded-xl" />
            <select className="p-3 border rounded-xl">
              <option>Web Development</option>
              <option>UI / UX Design</option>
              <option>Data Science</option>
              <option>Android Development</option>
            </select>
            <textarea
              placeholder="Why should we select you?"
              className="p-3 border rounded-xl min-h-[120px]"
            />

            <button className="bg-black text-white py-3 rounded-xl font-semibold transition hover:scale-105">
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
