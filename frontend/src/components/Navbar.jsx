import { useState } from "react";
import Container from "./Container";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 bg-white/30 backdrop-blur-lg border-b border-pink-300 py-4">
        <Container>
          <div className="flex items-center justify-between">

            {/* Gradient Title with animated shine */}
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent 
                bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 
                animate-gradient-x hover:scale-105 transition-transform duration-500">
              CV Spark
            </h1>

            {/* Login Button with hover glow */}
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 
                  text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 
                  transition-all duration-300"
            >
              Login / Sign Up
            </button>
          </div>
        </Container>

        {/* Extra styles for gradient animation */}
        <style jsx>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease infinite;
          }
        `}</style>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
