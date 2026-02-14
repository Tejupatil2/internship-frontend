import { NavLink } from "react-router-dom";

export default function Navbar() {
  const link = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-semibold transition ${
      isActive ? "bg-black text-white" : "hover:bg-gray-200"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-4">
        <div className="font-bold text-lg">NotWorking</div>
        <nav className="flex gap-2 flex-wrap">
          <NavLink to="/" className={link}>Home</NavLink>
          <NavLink to="/programs" className={link}>Programs</NavLink>
          <NavLink to="/mentors" className={link}>Mentors</NavLink>
          <NavLink to="/media" className={link}>Media</NavLink>
          <NavLink to="/dashboard" className={link}>Dashboard</NavLink>
          <NavLink to="/apply" className={link}>Apply</NavLink>
        </nav>
      </div>
    </header>
  );
}
