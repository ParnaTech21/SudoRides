// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

/*
  Home Page Component
  - Displays the landing header, description, and "Get Started" button
  - Navbar is imported from components/
  - Uses Tailwind classes for clean UI styling
*/

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">
          Your Ride, Simplified.
        </h1>

        <p className="max-w-xl text-gray-600 mb-8 text-lg">
          SudoRides lets you request fast, safe and reliable rides anytime,
          anywhere.
        </p>

        <Link
          to="/login"
          className="px-8 py-3 bg-blue-600 text-white rounded-xl text-lg shadow hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center mt-20 py-6 text-gray-500">
        © {new Date().getFullYear()} SudoRides — All rights reserved.
      </footer>
    </div>
  );
}
