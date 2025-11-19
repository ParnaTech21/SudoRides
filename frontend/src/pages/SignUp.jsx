// src/pages/Signup.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";

/*
  SIGNUP PAGE
  -------------------------
  - Collects name, email, password
  - Sends data to backend (POST /auth/signup)
  - Automatically redirects to login after success
  - Includes basic client-side validation
*/

export default function Signup() {
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Loading & error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send signup request to backend (API URL stored in .env)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong.");
        setLoading(false);
        return;
      }

      // Redirect user to login page after successful signup
      navigate("/login");
    } catch (err) {
      setError("Network error. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex justify-center items-center min-h-[80vh] px-6">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
            Create Account
          </h2>

          {error && (
            <p className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">
              {error}
            </p>
          )}

          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            {/* Full Name */}
            <Input
              label="Full Name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
              {/* Password */}
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter a strong password"
              value={form.password}
              onChange={handleChange}
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition"
            >
            {loading ? "Creating account..." : "Sign Up"}
            </button>
                 </form>

          <p className="text-center mt-4 text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

