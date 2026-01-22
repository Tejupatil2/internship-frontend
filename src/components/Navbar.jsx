import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition ${
      isActive
        ? "bg-black text-white"
        : "text-gray-700 hover:bg-gray-200 hover:text-black"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center font-bold">
            NW
          </div>
          <div>
            <p className="font-bold leading-4">NotWorking</p>
            <p className="text-xs text-gray-500">Intern Portal</p>
          </div>
        </div>

        <nav className="flex gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/apply" className={linkClass}>
            Apply
          </NavLink>
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
