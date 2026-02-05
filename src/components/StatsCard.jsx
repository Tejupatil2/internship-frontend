export default function StatsCard({ value, label }) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm text-center transition hover:shadow-md">
      <p className="text-3xl font-extrabold text-black">{value}</p>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
}
