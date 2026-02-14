import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Dashboard from "./pages/Dashboard";
import Programs from "./pages/Programs";
import Mentors from "./pages/Mentors";
import Media from "./pages/Media";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
