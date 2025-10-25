"use client";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-black min-h-screen py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-gray-800/5 to-gray-700/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-4 mt-1.5">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-8xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent animate-fadeIn">
            ABOUT ME
          </h2>
        </div>

        {/* Bio Section */}
        <div className="mb-8">
          <p className="text-gray-200 text-lg leading-relaxed text-center">
            Third-year student at{" "}
            <span className="text-white font-medium">VIT, Pune</span> pursuing
            B.Tech. in IT. Passionate about programming with a focus on web
            development and AI. Eager to apply academic knowledge and contribute
            to projects with a fresh perspective.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/3 relative animate-slideInLeft group">
            {/* Image with glass effect */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-gray-800/30 to-gray-700/30 p-1 backdrop-blur-sm border border-gray-600/20">
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-gray-500/20 to-gray-300/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/images/profile.png"
                  alt="Siddhi Mohol"
                  className="w-full h-auto object-cover rounded-xl shadow-xl transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-2/3 space-y-8 animate-slideInRight">
            {/* Experience Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-gradient-to-r from-blue-400 to-blue-300"></div>
                <h3 className="text-xl font-bold text-white">Experience</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-5 hover:border-blue-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        Tech Mahindra
                      </h4>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        Sep–Nov 2025
                      </span>
                    </div>
                    <p className="text-blue-300/90 font-medium mb-2">
                      Software Development Engineer
                    </p>
                    <p className="text-gray-400 text-sm">
                      Worked on building innovative web applications using
                      modern technologies.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-5 hover:border-purple-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        Unified Mentors
                      </h4>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        Jun–Aug 2025
                      </span>
                    </div>
                    <p className="text-purple-300/90 font-medium mb-2">
                      Machine Learning Intern
                    </p>
                    <p className="text-gray-400 text-sm">
                      Developed and implemented machine learning models for data
                      analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-gradient-to-r from-yellow-400 to-yellow-300"></div>
                <h3 className="text-xl font-bold text-white">Achievements</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="border border-yellow-500/20 group-hover:border-yellow-500/40 p-4 transition-colors duration-300 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-yellow-400 text-xl bg-yellow-400/10 p-2 rounded-full">
                        🏆
                      </span>
                      <h4 className="text-white font-bold text-lg">
                        SIH&apos;24 Finalist
                      </h4>
                    </div>
                    <p className="text-yellow-300/80 text-sm">Runner Up</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="border border-purple-500/20 group-hover:border-purple-500/40 p-4 transition-colors duration-300 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-purple-400 text-xl bg-purple-400/10 p-2 rounded-full">
                        🚀
                      </span>
                      <h4 className="text-white font-bold text-lg">
                        Innovate & Inspire S13
                      </h4>
                    </div>
                    <p className="text-purple-300/80 text-sm">Winner</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="border border-green-500/20 group-hover:border-green-500/40 p-4 transition-colors duration-300 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-green-400 text-xl bg-green-400/10 p-2 rounded-full">
                        🎯
                      </span>
                      <h4 className="text-white font-bold text-lg">
                        ISIH&apos;24 Winner
                      </h4>
                    </div>
                    <p className="text-green-300/80 text-sm">Winner</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="border border-red-500/20 group-hover:border-red-500/40 p-4 transition-colors duration-300 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-red-400 text-xl bg-red-400/10 p-2 rounded-full">
                        🏅
                      </span>
                      <h4 className="text-white font-bold text-lg">
                        National RollBall Champion
                      </h4>
                    </div>
                    <p className="text-red-300/80 text-sm">2nd Place</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Section - Modern Design */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-0.5 w-8 bg-gradient-to-r from-gray-400 to-white"></div>
            <h3 className="text-2xl font-bold text-white text-center">
              Publications
            </h3>
            <div className="h-0.5 w-8 bg-gradient-to-r from-white to-gray-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-orange-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors mb-3">
                  The Future of Skin Cancer Detection: ML & CNNs
                </h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                    IEEE ICDICI 2024
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Research paper on innovative machine learning applications for
                  early skin cancer detection.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 hover:border-orange-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-orange-500/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors mb-3">
                  Smart Curve Guardian: Real-Time Vehicle Threat Detection
                </h4>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                    IET ICRTCIS 2025
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Research on real-time computer vision systems for vehicle
                  threat detection on curved roads.
                </p>
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
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out 0.2s forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.4s forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
