export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500 flex flex-col md:flex-row gap-2 justify-between">
        <p>© {new Date().getFullYear()} NotWorking Internship Portal</p>
        <p className="italic">Think. Build. Create.</p>
      </div>
    </footer>
  );
}
