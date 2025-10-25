"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      // Success! Clear the form
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "siddhi@example.com",
      href: "mailto:siddhi@example.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Mumbai, India",
      href: "#"
    }
  ];

  return (
    <div id="contact" className="w-full bg-black relative min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-gray-800/5 to-gray-700/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-gray-400 to-white mx-auto rounded-full"></div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-3xl sm:text-4xl font-bold mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 text-lg sm:text-xl font-normal leading-relaxed">
                I&apos;m currently looking for new opportunities and would love to hear from you. 
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/20 border border-gray-700/30 backdrop-blur-sm hover:bg-gray-700/30 hover:border-gray-600/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-500/20 to-gray-400/20 border border-gray-500/30 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg group-hover:text-gray-100 transition-colors">
                      {item.label}
                    </p>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-gray-300 text-sm mb-4">Follow me on</p>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", icon: "🐙", href: "#" },
                  { name: "LinkedIn", icon: "💼", href: "#" },
                  { name: "Twitter", icon: "🐦", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-gray-800/30 border border-gray-700/40 flex items-center justify-center text-lg hover:bg-gray-700/50 hover:border-gray-600/50 hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gray-800/20 border border-gray-700/30 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-8">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/20 border border-green-500/40 rounded-xl text-green-400 text-sm">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-xl text-red-400 text-sm">
                  ❌ Unable to send your message. Please try again or contact me directly at {contactInfo[0].value}.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
