// components/AuthModal.jsx
"use client";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function AuthModal({ mode, onModeChange, onClose, onSuccess }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isSignup = mode === "signup";

  // reset fields when switching between login / sign up
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setError("");
      setPassword("");
    });
    return () => window.cancelAnimationFrame(frame);
  }, [mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/${isSignup ? "signup" : "login"}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isSignup ? { username, email, password } : { email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        return;
      }
      onSuccess(data.user);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition text-gray-900";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div className="relative bg-white shadow-2xl max-w-md w-full h-auto max-h-[90vh] overflow-hidden rounded-lg">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-gray-400 hover:text-red-600 transition cursor-pointer"
          aria-label="Close modal"
        >
          <IoClose className="h-6 w-6" />
        </button>

        <div className="max-h-[90vh] overflow-y-auto p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="inline-block mb-3">
              <div className="relative text-3xl font-bold text-red-600 font-serif">
                ReadM
                <span className="relative inline-block">
                  <span className="absolute top-0 left-7 text-[8px] font-bold not-italic text-black">
                    About
                  </span>
                  ore
                </span>
              </div>
            </div>
            <h2 id="auth-modal-title" className="text-2xl font-bold text-gray-900 mb-1">
              {isSignup ? "Create your account" : "Welcome back"}
            </h2>
            <p className="text-gray-600 text-sm">
              {isSignup ? "Sign up to subscribe to our newsletter" : "Login to your account"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {isSignup && (
              <div>
                <label htmlFor="auth-username" className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <input
                  id="auth-username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your name"
                  autoComplete="username"
                  required
                  className={inputClass}
                />
              </div>
            )}

            <div>
              <label htmlFor="auth-email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                autoComplete="email"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="auth-password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isSignup ? "At least 6 characters" : "Your password"}
                autoComplete={isSignup ? "new-password" : "current-password"}
                required
                className={inputClass}
              />
            </div>

            {error && (
              <p role="alert" className="text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 rounded-lg font-semibold text-white transition ${
                loading ? "bg-gray-300 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 cursor-pointer"
              }`}
            >
              {loading ? "PLEASE WAIT..." : isSignup ? "SIGN UP" : "LOGIN"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-5">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => onModeChange(isSignup ? "login" : "signup")}
              className="font-semibold text-red-600 hover:text-red-700 cursor-pointer"
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
