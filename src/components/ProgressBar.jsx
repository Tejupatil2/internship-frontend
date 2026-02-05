export default function ProgressBar({ percent }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="bg-black h-full transition-all duration-500"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
