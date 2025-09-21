"use client";
import { useState } from "react";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("");

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        @keyframes rotate-border {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
              0 0 30px rgba(255, 255, 255, 0.4);
          }
        }
        @keyframes morph {
          0% {
            border-radius: 9999px;
            transform: scale(1) rotate(0deg);
          }
          50% {
            border-radius: 12px;
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            border-radius: 8px;
            transform: scale(1.05) rotate(3deg);
          }
        }
      `}</style>
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        {/* Regular Navigation with Morphic Changes */}
        <div className="flex justify-center">
          <div className="flex space-x-8 bg-black/20 backdrop-blur-md rounded-full px-8 py-2 border border-white/10">
            <a
              href="#home"
              className={`px-4 py-2 text-gray-300 tracking-wide uppercase transition-all duration-300 ease-out
    ${
      activeButton === "nav-home"
        ? "text-[1.125rem] font-bold"
        : "text-[1rem] font-medium hover:text-[1.045rem] hover:font-bold"
    }`}
              onClick={() =>
                setActiveButton(activeButton === "nav-home" ? "" : "nav-home")
              }
            >
              Home
            </a>

            <a
              href="#about"
              className={`px-4 py-2 text-gray-300 tracking-wide uppercase transition-all duration-300 ease-out
    ${
      activeButton === "nav-home"
        ? "text-[1.125rem] font-bold"
        : "text-[1rem] font-medium hover:text-[1.045rem] hover:font-bold"
    }`}
              onClick={() =>
                setActiveButton(activeButton === "nav-about" ? "" : "nav-about")
              }
            >
              About
            </a>

            <a
              href="#services"
              className={`px-4 py-2 text-gray-300 tracking-wide uppercase transition-all duration-300 ease-out
    ${
      activeButton === "nav-home"
        ? "text-[1.125rem] font-bold"
        : "text-[1rem] font-medium hover:text-[1.045rem] hover:font-bold"
    }`}
              onClick={() =>
                setActiveButton(
                  activeButton === "nav-services" ? "" : "nav-services"
                )
              }
            >
              Services
            </a>

            <a
              href="#contact"
              className={`px-4 py-2 text-gray-300 tracking-wide uppercase transition-all duration-300 ease-out
    ${
      activeButton === "nav-home"
        ? "text-[1.125rem] font-bold"
        : "text-[1rem] font-medium hover:text-[1.045rem] hover:font-bold"
    }`}
              onClick={() =>
                setActiveButton(
                  activeButton === "nav-contact" ? "" : "nav-contact"
                )
              }
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
