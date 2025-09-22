"use client";

const About = () => {

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
              <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black text-center lg:text-left mb-6 sm:mb-8">
                ABOUT ME
              </h1>

              {/* Text Content */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl font-normal leading-relaxed text-white">
                  Third-year student at VIT, Pune pursuing B.Tech. in IT.
                  Passionate about programming with a focus on web development
                  and Al/ML. Eager to apply academic knowledge and contribute to
                  projects with a fresh perspective
                </p>

                {/* Experience Section */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-800/20 border border-gray-600/30 rounded-lg p-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">Tech Mahindra – SDE</h4>
                        <p className="text-gray-300 text-sm">Software Development Engineer</p>
                      </div>
                      <span className="text-gray-400 text-sm mt-2 sm:mt-0">Sep–Nov 2025</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-800/20 border border-gray-600/30 rounded-lg p-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">Unified Mentors – ML Intern</h4>
                        <p className="text-gray-300 text-sm">Machine Learning Internship</p>
                      </div>
                      <span className="text-gray-400 text-sm mt-2 sm:mt-0">Jun–Aug 2025</span>
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4">Achievements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-lg">🏆</span>
                        <span className="text-white font-medium text-sm">SIH'24 Finalist</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400 text-lg">🚀</span>
                        <span className="text-white font-medium text-sm">Innovate & Inspire S13 Winner</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 text-lg">🎯</span>
                        <span className="text-white font-medium text-sm">ISIH'24 Winner</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-red-400 text-lg">🏅</span>
                        <span className="text-white font-medium text-sm">National RollBall Champion</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Publications Section */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4">Publications</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-800/20 border border-gray-600/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">The Future of Skin Cancer Detection: ML & CNNs</h4>
                      <p className="text-gray-300 text-sm">IEEE ICDICI 2024</p>
                    </div>
                    <div className="bg-gray-800/20 border border-gray-600/30 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Smart Curve Guardian: Real-Time Vehicle Threat Detection</h4>
                      <p className="text-gray-300 text-sm">IET ICRTCIS 2025</p>
                    </div>
                  </div>
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
      </div>
    </div>
  );
};

export default About;
