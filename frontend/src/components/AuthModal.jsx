import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [profilePreview, setProfilePreview] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  // Convert image to base64
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePreview(URL.createObjectURL(file));

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const url = isLogin ? "http://localhost:5000/api/auth/login" : "http://localhost:5000/api/auth/register";
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      // Save JWT token
      localStorage.setItem("token", data.token);
      console.log("User logged in:", data.user);
      onClose(); // close modal on success
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50 rounded-2xl w-full max-w-md shadow-2xl relative overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >×</button>

        {/* Header */}
        <div className="text-center pt-10 pb-6 px-8">
          <h2 className="text-2xl font-bold mb-1">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </h2>
          <p className="text-gray-500 text-sm">
            {isLogin ? "Login to your account" : "Enter your details to get started"}
          </p>

          {/* Avatar */}
          <div className="flex justify-center mt-5">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-md relative">
              {profilePreview ? (
                <img src={profilePreview} className="w-full h-full rounded-full object-cover" alt="Profile" />
              ) : (
                <FaUserCircle className="text-5xl text-pink-500" />
              )}
              {!isLogin && (
                <label className="absolute bottom-0 right-0 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 p-2 rounded-full cursor-pointer shadow-md">
                  <input type="file" accept="image/*" onChange={handleProfileChange} className="hidden" />
                  <span className="text-white text-xs font-bold">+</span>
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6 px-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-5 py-2 font-semibold rounded-full transition ${
              isLogin ? "bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-pink-100"
            }`}
          >Login</button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-5 py-2 font-semibold rounded-full transition ${
              !isLogin ? "bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-white shadow-lg" : "bg-white text-gray-700 hover:bg-pink-100"
            }`}
          >Register</button>
        </div>

        {/* Form */}
        <div className="px-8 pb-10">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              disabled={loading}
            >
              {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
            </button>
          </form>

          {/* Bottom text */}
          <p className="text-center text-sm text-gray-500 mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-pink-500 font-semibold hover:underline">
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
