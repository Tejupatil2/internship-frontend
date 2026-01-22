import { useState } from "react";

export default function Apply() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    domain: "Web Development (Frontend)",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.fullName.trim() || !form.email.trim() || !form.reason.trim()) {
      setError("Please fill all required fields.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
        <h2 className="text-2xl font-extrabold">Apply for Internship</h2>
        <p className="mt-2 text-gray-600">
          Fill in the form below and submit your application.
        </p>

        {submitted ? (
          <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200">
            <p className="font-semibold text-green-800">
              ✅ Application submitted successfully!
            </p>
            <p className="text-green-700 text-sm mt-1">
              You can now visit the Dashboard to track tasks.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="text-sm font-semibold">Full Name *</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="mt-2 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Domain</label>
              <select
                name="domain"
                value={form.domain}
                onChange={handleChange}
                className="mt-2 w-full border rounded-xl px-4 py-3"
              >
                <option>Web Development (Frontend)</option>
                <option>Web Development (Backend)</option>
                <option>Android App Development</option>
                <option>Data Science / Machine Learning</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Why should we select you? *
              </label>
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                className="mt-2 w-full border rounded-xl px-4 py-3 min-h-[120px]"
                placeholder="Write a short reason..."
              />
            </div>

            <button className="w-full bg-black text-white rounded-xl py-3 font-semibold hover:opacity-90 transition">
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
