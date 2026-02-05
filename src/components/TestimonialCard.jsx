export default function TestimonialCard({ name, role, text, image }) {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm transition hover:shadow-md">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <p className="mt-4 text-gray-700 text-sm">“{text}”</p>
      <p className="mt-3 font-semibold">{name}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  );
}
