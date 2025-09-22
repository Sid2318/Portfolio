"use client";
import { useState } from "react";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("");

  const navItems = [
    { href: "#", label: "Home", id: "nav-home" },
    { href: "#about", label: "About", id: "nav-about" },
    { href: "#skills", label: "Skills", id: "nav-skills" },
    { href: "#projects", label: "Projects", id: "nav-projects" },
    { href: "#contact", label: "Contact", id: "nav-contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-center">
        <div className="flex space-x-2 bg-black/20 backdrop-blur-md rounded-full px-6 py-2 border border-white/10">
          {navItems.map((item) => {
            const isActive = activeButton === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`
                  relative px-4 py-2 text-sm font-medium text-gray-300 
                  tracking-wide uppercase transition-all duration-300 ease-out
                  group focus:outline-none focus:ring-2 focus:ring-white/50 
                  focus:ring-offset-2 focus:ring-offset-black/20 rounded-lg
                  ${isActive 
                    ? 'text-white font-bold text-lg' 
                    : 'hover:text-white hover:font-semibold hover:text-base'
                  }
                `}
                onClick={() =>
                  setActiveButton(activeButton === item.id ? "" : item.id)
                }
              >
                <span className="relative z-10">{item.label}</span>
                <div 
                  className={`
                    absolute inset-0 rounded-lg border transition-all duration-300 ease-out
                    ${isActive
                      ? 'border-white/60 bg-white/10 shadow-lg shadow-white/20'
                      : 'border-transparent group-hover:border-white/30 group-hover:bg-white/5'
                    }
                  `}
                />
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
