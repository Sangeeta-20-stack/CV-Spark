import { FaEdit, FaPalette, FaChartLine } from "react-icons/fa";
import Button from "./Button";
import Container from "./Container";
import hero from "../assets/hero.png";

export default function HeroSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-pink-50 to-purple-50 border-4 border-pink-300 rounded-2xl mt-6 px-6 md:px-16">

      {/* HERO CONTENT */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE CONTENT */}
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent 
                bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 leading-tight">
              Build your perfect Resume <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400">
                in Minutes
              </span>
            </h2>

            <p className="text-gray-700 mt-4 text-lg md:text-xl font-medium">
              Create ATS-friendly, beautiful resumes with live templates, smart editing, and one-click PDF export.
            </p>

            <div className="mt-8">
              <button className="px-8 py-3 text-white font-bold rounded-full 
                bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 
                shadow-lg hover:from-purple-500 hover:to-pink-500 hover:scale-105 
                transition-all duration-300 animate-pulse">
                GET STARTED
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">
            <img src={hero} className="w-[400px] md:w-[550px] hover:scale-105 transition-transform duration-500 shadow-2xl rounded-3xl" />
          </div>
        </div>
      </Container>

      {/* FEATURES SECTION */}
      <div className="py-20 mt-20">
        <Container>
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 
              bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500">
            <span>Features </span>
            <span>that make you shine</span>
          </h2>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* CARD 1 */}
            <div className="bg-white shadow-xl border border-pink-200 rounded-3xl p-6 
                hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center relative overflow-hidden">
              <FaEdit className="text-pink-500 mx-auto text-5xl mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-pink-600 mb-3">
                Live Resume Editor
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Real-time editor with instant preview for a fast, distraction-free
                resume-building experience. 
                <span className="text-pink-600 font-medium">
                  {" "}Every edit updates instantly—no reload, no delay.
                </span>
              </p>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/50 to-transparent rounded-b-3xl pointer-events-none"></div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white shadow-xl border border-pink-200 rounded-3xl p-6 
                hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center relative overflow-hidden">
              <FaPalette className="text-orange-500 mx-auto text-5xl mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-pink-600 mb-3">
                Professional Templates
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Switch between modern, minimal templates and personalize with
                tech-inspired color palettes & gradients. Clean layouts optimized
                for clarity and 
                <span className="text-orange-500 font-medium">
                  {" "}recruiter-friendly scan patterns.
                </span>
              </p>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/50 to-transparent rounded-b-3xl pointer-events-none"></div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white shadow-xl border border-pink-200 rounded-3xl p-6 
                hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center relative overflow-hidden">
              <FaChartLine className="text-purple-500 mx-auto text-5xl mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-pink-600 mb-3">
                ATS Score Analyzer
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Run your resume through an ATS compatibility check and instantly
                download a polished PDF.  
                <span className="text-orange-500 font-medium">
                  {" "}Keyword analysis, readability score, formatting validation,
                  and improvement suggestions.
                </span>
              </p>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/50 to-transparent rounded-b-3xl pointer-events-none"></div>
            </div>

          </div>
        </Container>
      </div>

   {/* FOOTER */}
<footer className="w-full py-10 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-white text-center mt-20">
  <p className="text-lg md:text-xl font-semibold">
    &copy; {new Date().getFullYear()} CV Spark. All rights reserved.
  </p>
  <p className="mt-2 text-sm md:text-base">
    Crafting perfect resumes with style and ease.
  </p>
</footer>



    </div>
  );
}
