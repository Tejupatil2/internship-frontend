export default function Mentors() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">Meet Our Mentors</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          ["Rahul Mehta", "Senior Frontend Engineer"],
          ["Anita Desai", "Product Designer"],
          ["Kunal Shah", "Data Scientist"],
        ].map(([name, role], i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border text-center">
            <img
              src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <p className="mt-4 font-bold">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
