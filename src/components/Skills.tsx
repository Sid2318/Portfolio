"use client";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: [
        "C++",
        "Python",
        "HTML5",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Java",
        "C",
        "C#",
      ],
      color: "from-gray-200 to-white",
      bgColor: "bg-gray-600/20",
      borderColor: "border-gray-400/40",
      hoverColor: "hover:border-gray-200 hover:bg-gray-500/30",
    },
    {
      category: "Frameworks",
      skills: [
        "Flask",
        "Node.js",
        "React",
        "Express.js",
        "FastAPI",
        "Next.js",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "XGBoost",
        "Transformers",
        "Unity",
      ],
      color: "from-gray-200 to-white",
      bgColor: "bg-gray-600/20",
      borderColor: "border-gray-400/40",
      hoverColor: "hover:border-gray-200 hover:bg-gray-500/30",
    },
    {
      category: "Tools / Technologies",
      skills: [
        "Git",
        "Machine Learning",
        "Data Science",
        "GenAI",
        "LangChain",
        "LangGraph",
        "LangSmith",
        "Docker",
        "REST API",
      ],
      color: "from-gray-200 to-white",
      bgColor: "bg-gray-600/20",
      borderColor: "border-gray-400/40",
      hoverColor: "hover:border-gray-200 hover:bg-gray-500/30",
    },
    {
      category: "Libraries",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "OpenCV"],
      color: "from-gray-200 to-white",
      bgColor: "bg-gray-600/20",
      borderColor: "border-gray-400/40",
      hoverColor: "hover:border-gray-200 hover:bg-gray-500/30",
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL"],
      color: "from-gray-200 to-white",
      bgColor: "bg-gray-600/20",
      borderColor: "border-gray-400/40",
      hoverColor: "hover:border-gray-200 hover:bg-gray-500/30",
    },
  ];

  return (
    <div
      id="skills"
      className="w-full bg-black min-h-screen py-16 sm:py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-gray-800/5 to-gray-700/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 mt-1.5">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            SOFTWARE DEVELOPMENT
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-gray-400 to-white mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg sm:text-xl font-normal leading-relaxed mt-4 max-w-xl mx-auto">
            Comprehensive expertise across modern development technologies and
            frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="group"
              style={{
                animationDelay: `${categoryIndex * 200}ms`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              {/* Category Header */}
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-6 h-6 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold">
                    {category.category}
                  </h3>
                </div>
                <div
                  className={`h-0.5 bg-gradient-to-r ${category.color} w-16 rounded-full`}
                ></div>
              </div>

              {/* Skills Container */}
              <div
                className={`${category.bgColor} ${category.borderColor} border backdrop-blur-sm rounded-xl p-4 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl`}
              >
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill}
                      className={`${category.borderColor} border ${category.hoverColor} rounded-lg px-3 py-2 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group/skill`}
                      style={{
                        animationDelay: `${categoryIndex * 200 + index * 50}ms`,
                        animation: "slideInScale 0.6s ease-out forwards",
                      }}
                    >
                      <span className="text-gray-300 group-hover/skill:text-white font-medium text-sm transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Hint
        <div className="text-center mt-20">
          <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-4">
            Next Section
          </div>
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div> */}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;
