export default function Programs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">Internship Programs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {["Web Development", "UI / UX Design", "Data Science", "Android Development"].map(
          (p, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="font-bold">{p}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Industry-aligned curriculum with weekly deliverables.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
