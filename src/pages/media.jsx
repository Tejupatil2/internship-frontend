export default function Media() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10">Media & Sessions</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <iframe
          className="w-full h-64 rounded-xl"
          src="https://www.youtube.com/embed/Ke90Tje7VS0"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-64 rounded-xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
