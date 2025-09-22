"use client";

import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const projectsData = [
  {
    title: "DataPilot-AutoML-Assistant",
    year: "2025",
    link: "#",
    image: "/images/datapilot.png",
    description: [
      "Built AutoML, a web app with Streamlit, automating the ML pipeline — data cleaning, EDA, preprocessing, hyperparameter tuning (Optuna), ensemble modeling, and deployment-ready outputs.",
      "Integrated scikit-learn, XGBoost, LightGBM, SMOTE, and Google Gemini AI to automate classification/regression, visualize performance, and provide AI-powered insights in an interactive interface.",
    ],
    technologies: [
      "Streamlit",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "SMOTE",
      "Google Gemini AI",
      "Optuna",
    ],
  },
  {
    title: "Gram Nirman Mitra",
    year: "2024",
    link: "#",
    badge: "SIH Finalist",
    image: "/images/gramnirman.png",
    description: [
      "Developed an immersive, multiplayer, multilingual Unity-based game for rural planning, integrating Mapbox for real-world GIS data and Photon Engine for real-time interactions. Designed intuitive gameplay with features like markets, panchayats, and infrastructure planning to foster sustainability awareness, financial literacy, and strategic decision-making.",
    ],
    technologies: [
      "Unity",
      "C#",
      "Mapbox SDK",
      "Photon Engine",
      "GIS",
      "Multiplayer Networking",
    ],
  },
  {
    title: "CrispCast",
    year: "2025",
    link: "#",
    image: "/images/crispcast.png",
    description: [
      "Developed CrispCast, an intelligent news summarization agent that autonomously fetches, scrapes, and summarizes articles using HuggingFace NLP models.",
      "Designed a retrieval + summarization pipeline with a Python backend (FastAPI) and React frontend, enabling date-based news discovery.",
      "Delivered a modern, responsive UI that empowers users with concise, AI-driven news insights.",
    ],
    technologies: ["FastAPI", "React", "HuggingFace", "NLP", "Python"],
  },
  //   {
  //     title: "DocuMate",
  //     year: "2025",
  //     link: "#",
  //     image: "/images/documate.png",
  //     description: [
  //       "Developed DocuMate, an agentic RAG system that autonomously ingests PDFs & PPTX files, builds vector embeddings, and answers user queries contextually.",
  //       "Engineered a FastAPI + React full-stack agent with ChromaDB-powered memory and model caching for faster, intelligent document retrieval."
  //     ],
  //     technologies: ["FastAPI", "React", "ChromaDB", "RAG", "Vector Embeddings", "Python"]
  //   },
  {
    title: "RealTime DDOS Attack Detection",
    year: "2024",
    link: "#",
    image: "/images/ddos.png",
    description: [
      "Network details are fetched using Scapy and fed as input to the trained model for analysis.",
      "Demonstrated on live web server under DoS attack.",
      "Used hping3 on Kali Linux for flooding servers.",
    ],
    technologies: [
      "Scapy",
      "Python",
      "Machine Learning",
      "Kali Linux",
      "Network Security",
    ],
  },
  {
    title: "NexStay",
    year: "2025",
    link: "#",
    image: "/images/nexstay.png",
    description: [
      "Developed a full-stack MERN application enabling guests and hosts to manage property rentals, inspired by Airbnb.",
      "Built an AI-powered chatbot using Groq's Llama-3.1-8B-Instant and LangGraph to provide booking assistance, recommendations, and query handling.",
      "Implemented property listing management, booking system, PDF downloads, and multi-role authentication (guest, host, admin).",
    ],
    technologies: [
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Groq",
      "LangGraph",
      "AI Chatbot",
    ],
  },
  {
    title: "Skin Cancer Detection: ML & CNNs",
    year: "2024",
    link: "#",
    image: "/images/skincancer.png",
    description: [
      "Engineered a deep learning-based skin cancer detection system using a Hybrid CNN-Autoencoder Model, optimizing feature extraction and classification for enhanced accuracy.",
      "Developed a web-based platform using HTML, CSS, and Machine Learning, enabling users to upload skin lesion images for analysis while continuously improving model performance through medical feedback.",
    ],
    technologies: [
      "CNN",
      "Autoencoder",
      "Deep Learning",
      "HTML",
      "CSS",
      "Machine Learning",
      "Medical AI",
    ],
  },
];

const miniProjects = [
  {
    title: "Portfolio Website",
    year: "2025",
    description: "Interactive portfolio built with Next.js and Tailwind CSS featuring modern animations and responsive design.",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    icon: "🎨",
    color: "purple"
  },
  {
    title: "API Experiments",
    year: "2024",
    description: "Various REST API prototypes and microservices for learning different backend technologies.",
    technologies: ["Node.js", "Express", "MongoDB"],
    icon: "⚡",
    color: "green"
  },
  {
    title: "ML Notebooks",
    year: "2024",
    description: "Jupyter notebooks for data analysis, model training, and machine learning experiments.",
    technologies: ["Python", "Jupyter", "Pandas"],
    icon: "🤖",
    color: "orange"
  },
  {
    title: "Weather App",
    year: "2024",
    description: "Real-time weather application with location-based forecasts and beautiful UI.",
    technologies: ["React", "API", "CSS"],
    icon: "🌤️",
    color: "blue"
  },
  {
    title: "Task Manager",
    year: "2024",
    description: "Simple task management application with drag-and-drop functionality.",
    technologies: ["Vue.js", "LocalStorage", "CSS"],
    icon: "📝",
    color: "indigo"
  },
  {
    title: "Calculator App",
    year: "2024",
    description: "Advanced calculator with scientific functions and modern interface design.",
    technologies: ["JavaScript", "HTML", "CSS"],
    icon: "🧮",
    color: "pink"
  },
  {
    title: "Color Palette Generator",
    year: "2024",
    description: "Tool for generating and managing color palettes for design projects.",
    technologies: ["Vanilla JS", "Canvas", "CSS"],
    icon: "🎨",
    color: "teal"
  },
  {
    title: "Password Generator",
    year: "2024",
    description: "Secure password generator with customizable options and strength indicators.",
    technologies: ["JavaScript", "Crypto", "CSS"],
    icon: "🔐",
    color: "red"
  }
];

// Mini Project Card Component
const MiniProjectCard = ({ project }: { project: typeof miniProjects[0] }) => {
  const colorClasses = {
    purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
    green: "from-green-500/20 to-green-600/20 border-green-500/30",
    orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30",
    blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
    indigo: "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30",
    pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30",
    teal: "from-teal-500/20 to-teal-600/20 border-teal-500/30",
    red: "from-red-500/20 to-red-600/20 border-red-500/30",
  };

  const iconColorClasses = {
    purple: "text-purple-400",
    green: "text-green-400",
    orange: "text-orange-400",
    blue: "text-blue-400",
    indigo: "text-indigo-400",
    pink: "text-pink-400",
    teal: "text-teal-400",
    red: "text-red-400",
  };

  return (
    <div className="group flex-shrink-0 w-80 bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-600/30 backdrop-blur-sm rounded-xl p-6 hover:bg-gradient-to-br hover:from-gray-700/30 hover:to-gray-800/30 hover:border-gray-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-900/20">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[project.color as keyof typeof colorClasses]} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-2xl">{project.icon}</span>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold group-hover:text-gray-100 transition-colors">
              {project.title}
            </h4>
            <p className="text-gray-400 text-sm">{project.year}</p>
          </div>
        </div>
        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses[project.color as keyof typeof colorClasses].split(' ')[0]} opacity-60 group-hover:opacity-100 transition-opacity`}></div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={tech}
            className={`px-3 py-1.5 rounded-full text-xs font-medium bg-gray-700/40 border border-gray-600/40 text-gray-300 group-hover:bg-gray-600/50 group-hover:border-gray-500/50 transition-all duration-200 hover:scale-105`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default function Projects() {
  return (
    <div id="projects" className="w-full bg-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-gray-800/5 to-gray-700/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl"></div>

      {/* Section Title */}
      <div className="relative z-10 text-center pt-20 pb-12 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          PROJECTS
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-gray-400 to-white mx-auto rounded-full"></div>
        <p className="text-gray-400 text-base mt-4 max-w-xl mx-auto">
          Showcasing innovative solutions across AI, web development, and
          machine learning
        </p>
      </div>

      {/* Projects Navigation Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-8">
        <div className="bg-gray-800/20 border border-gray-600/30 backdrop-blur-sm rounded-xl p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-white text-lg font-semibold">
                Featured Projects
              </h3>
              <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md text-xs font-medium">
                {projectsData.length} Projects
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Scroll to explore</span>
              <svg
                className="w-4 h-4 animate-bounce"
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
          </div>
        </div>
      </div>

      {/* ScrollStack Container */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 mb-16">
        <ScrollStack
          useWindowScroll={false}
          className="h-[60vh]"
          itemDistance={90}
          itemStackDistance={26}
          stackPosition="15%"
          scaleEndPosition="5%"
          baseScale={0.9}
          itemScale={0.01}
        >
          {projectsData.map((project, index) => (
            <ScrollStackItem
              key={index}
              itemClassName="bg-gray-800/20 border border-gray-600/30 backdrop-blur-lg rounded-xl shadow-2xl min-h-[350px] lg:min-h-[400px]"
            >
              <div className="h-full flex flex-col lg:flex-row gap-6 p-6">
                {/* Project Number & Image */}
                <div className="flex-shrink-0 w-full lg:w-2/5 relative">
                  {/* Project Number */}
                  {/* <div className="absolute -top-3 -left-3 z-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {(index + 1).toString().padStart(2, "0")}
                  </div> */}

                  {project.image && (
                    <div className="relative overflow-hidden rounded-xl border border-gray-600/30 bg-gray-900/20 h-64 lg:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                      {/* Project Status Badge */}
                      {/* <div className="absolute top-3 right-3">
                        <span className="bg-green-500/20 border border-green-500/40 text-green-400 px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm">
                          Completed
                        </span>
                      </div> */}
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col justify-between min-h-0">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-white text-xl lg:text-2xl font-bold mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <div className="text-gray-400 text-sm font-medium">
                          Project #{(index + 1).toString().padStart(2, "0")} •{" "}
                          {project.year}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {project.badge && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1.5 rounded-full text-xs font-bold">
                            {project.badge}
                          </span>
                        )}
                        {project.link && project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500/20 border border-blue-500/40 text-blue-400 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-blue-500/30 transition-colors duration-200"
                          >
                            View Project
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3 mb-4 flex-1">
                    {project.description.map((desc, i) => (
                      <p
                        key={i}
                        className="text-gray-300 leading-relaxed text-sm"
                      >
                        • {desc}
                      </p>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-700/40 border border-gray-600/40 text-gray-200 px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-600/40 hover:border-gray-500/40 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* Mini Projects Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-16">
        <div className="text-center mb-8">
          <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3">
            Mini Projects & Experiments
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gray-500 to-gray-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm mt-3">
            Quick prototypes and learning experiments
          </p>
        </div>

        {/* Horizontal Scrolling Animation */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="flex animate-scroll gap-6 w-max">
            {/* First set of cards */}
            {miniProjects.map((project, index) => (
              <MiniProjectCard key={index} project={project} />
            ))}
            {/* Duplicate for seamless loop */}
            {miniProjects.map((project, index) => (
              <MiniProjectCard key={`dup-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Pause on hover */}
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 60s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

    </div>
  );
}
