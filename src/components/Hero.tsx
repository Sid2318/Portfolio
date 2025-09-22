"use client";

import LightRays from "@/components/LightRay-bg";
import { FaLinkedin, FaGithub, FaEnvelope, FaEye } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState } from "react";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Light Rays Background */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFFFFF"
          raysSpeed={0}
          lightSpread={1.2}
          rayLength={2.3}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.0}
          distortion={0.0}
          className="custom-rays"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-18">
        {/* Top Labels */}
        <div className="flex flex-row justify-between items-center mb-0">
          <div className="text-lg sm:text-xl font-light tracking-wider">
            SOFTWARE
          </div>
          <div className="text-lg sm:text-xl font-light tracking-wider">
            SCROLL TO EXPLORE
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10">
          {/* Left Side - Main Text */}
          <div className="flex-1 w-full lg:w-auto">
            {/* Large DEVELOPER Text */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[15rem] font-black leading-none tracking-tight font-mono mb-4">
              <b> DEVELOPER</b>
            </h1>

            {/* Location */}
            {/* <div className="text-base sm:text-lg font-light tracking-wide mb-8 md:mb-9">
              Based in Madhya Pradesh, India
            </div> */}

            <div className="flex w-full lg:w-auto">
              {/* Description */}
              <div className=" lg:max-w-5xl">
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed text-white px-5">
                  <span className="text-gray-500">
                    Turning ideas into elegant digital products, websites, and
                    apps
                  </span>{" "}
                  by blending design, code, and problem-solving to empower
                  businesses, enhance user experiences, and deliver meaningful
                  impact.
                </p>

                {/* Social Media Links and CV Download */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-8 px-5 gap-6">
                  {/* Social Media Icons */}
                  <div className="flex space-x-4 sm:space-x-6">
                    <a
                      href="https://www.linkedin.com/in/siddhimohol23/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                    >
                      <FaLinkedin size={40} />
                    </a>
                    <a
                      href="https://github.com/siddhimohol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                    >
                      <FaGithub size={40} />
                    </a>
                    <a
                      href="https://leetcode.com/siddhimohol/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-400 transition-colors duration-300 hover:scale-110 transform"
                    >
                      <SiLeetcode size={40} />
                    </a>
                    <a
                      href="mailto:siddhimohol23@gmail.com"
                      className="text-red-500 hover:text-red-400 transition-colors duration-300 hover:scale-110 transform"
                    >
                      <FaEnvelope size={40} />
                    </a>
                  </div>

                  {/* View Resume Button */}
                  <button
                    onClick={openResume}
                    className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-base"
                  >
                    <FaEye size={18} />
                    <span>View Resume</span>
                  </button>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0 mx-3">
                <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl lg:w-96 xl:w-[450px] h-48 sm:h-56 lg:h-64 xl:h-72 rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/images/video-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
