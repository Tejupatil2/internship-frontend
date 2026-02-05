export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg">NotWorking</h3>
          <p className="text-sm mt-3">
            A skill-first internship platform focused on real-world learning,
            practical tasks, and career readiness.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Internship Domains</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>UI / UX Design</li>
            <li>Data Science</li>
            <li>Android Development</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">support@notworking.com</p>
          <p className="text-sm">India</p>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-700 py-4">
        © {new Date().getFullYear()} NotWorking Internship Program
      </div>
    </footer>
  );
}
