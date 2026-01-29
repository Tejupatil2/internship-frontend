export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-white text-lg">NotWorking</h3>
          <p className="mt-2 text-sm">
            A learning-first internship platform focused on real-world skills,
            guided projects, and career readiness.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Internships</h4>
          <ul className="space-y-1 text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Data Science</li>
            <li>Android Development</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm">support@notworking.com</p>
          <p className="text-sm">India</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} NotWorking Internship Program
      </div>
    </footer>
  );
}
