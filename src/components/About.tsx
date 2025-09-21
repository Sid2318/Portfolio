"use client";
import { FaLinkedin, FaGithub, FaEnvelope, FaEye } from "react-icons/fa";
import { useState } from "react";

const About = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <div id="about" className="w-full bg-black min-h-screen py-16 sm:py-20">
      <div className="w-[90%] mx-auto border-b-2 border-gray-800 pb-1 sm:pb-32">
        {/* Main Content Section */}
        <div className="w-full pt-8 sm:pt-14">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-16 items-center">
            {/* Left Side - Image */}
            <div className="animate-slideInLeft w-full lg:w-[45%] relative">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 border-2 border-gray-600 rounded-lg transform rotate-12" />
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 border-2 border-gray-600 rounded-lg transform -rotate-12" />

                {/* Main Image Container */}
                <div className="relative max-w-[350px] sm:max-w-lg mx-auto hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/40 to-gray-100/30 rounded-2xl transform rotate-4" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/30 to-gray-500/40 rounded-2xl transform -rotate-4" />
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    {/* Profile Image */}
                    <img
                      src="/images/profile.png" // <-- your image path here
                      alt="Siddhi Mohol"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="animate-slideInRight w-full lg:w-[55%]">
              {/* Title */}
              <h1 className="text-white text-[10vw] sm:text-[8vw] lg:text-[6vw] font-black text-center lg:text-left mb-6 sm:mb-8">
                ABOUT ME
              </h1>

              {/* Text Content */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
                  Third-year student at VIT, Pune pursuing B.Tech. in IT.
                  Passionate about programming with a focus on web development
                  and Al/ML. Eager to apply academic knowledge and contribute to
                  projects with a fresh perspective
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
                  With expertise in problem-solving, I constantly explore new
                  tools and technologies to create innovative digital solutions
                  that meet both business needs and user expectations.
                </p>
                {/* <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed">
                  My skills span programming languages, frameworks, and AI/ML
                  technologies, enabling me to design, develop, and deploy
                  high-quality projects efficiently.
                </p> */}

                {/* Social Media Links and CV Download */}
                <div className="flex items-center justify-between w-full mt-8">
                  {/* Social Media Icons */}
                  <div className="flex space-x-6">
                    <a
                      href="https://www.linkedin.com/in/siddhimohol23/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                    >
                      <FaLinkedin size={50} />
                    </a>
                    <a
                      href="https://github.com/siddhimohol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub size={50} />
                    </a>
                    <a
                      href="mailto:siddhimohol23@gmail.com"
                      className="text-red-500 hover:text-red-400 transition-colors duration-300"
                    >
                      <FaEnvelope size={50} />
                    </a>
                  </div>

                  {/* View Resume Button */}
                  <button
                    onClick={openResume}
                    className="flex items-center space-x-2 bg-gradient-to-r from-gray-200 to-gray-200 hover:from-white hover:to-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg mr-10 text-lg"
                  >
                    <FaEye size={20} />
                    <span>View Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }

          .animate-slideInLeft {
            animation: slideInLeft 0.5s ease-out 0.2s both;
          }

          .animate-slideInRight {
            animation: slideInRight 0.5s ease-out 0.4s both;
          }
        `}</style>

        {/* Resume Modal */}
        {isResumeOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full h-[90vh] relative">
              {/* Close Button */}
              <button
                onClick={closeResume}
                className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg transition-colors"
              >
                ×
              </button>

              {/* PDF Viewer */}
              <iframe
                src="/images/Siddhi_Mohol_VIT_IT.pdf"
                className="w-full h-full rounded-lg"
                title="Siddhi Mohol Resume"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
