"use client";

import React, { useState } from "react";
import { Rocket, Phone, MessageSquare, Send } from "lucide-react";

export default function CTASection() {
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Add API call here
    console.log({ mobile, message });
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setMobile("");
      setMessage("");
      alert("Message sent successfully!");
    }, 1000);
  };

  return (
    <div className=" my-20 w-full bg-[#0B0011] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-500/30 bg-linear-to-br from-purple-950/50 via-purple-900/30 to-transparent p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          {/* Glow effect */}
          <div className="absolute -left-10 -top-10 sm:-left-16 sm:-top-16 md:-left-20 md:-top-20 h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 rounded-full bg-purple-500/20 blur-3xl"></div>
          {/* <div className="absolute -bottom-10 -right-10 sm:-bottom-16 sm:-right-16 md:-bottom-20 md:-right-20 h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 rounded-full bg-purple-500/20 blur-3xl"></div> */}

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              Big Ideas Deserve{" "}
              <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Bold Execution
              </span>
            </h2>
            
            <p className="mx-auto mb-6 sm:mb-8 md:mb-10 max-w-2xl text-sm sm:text-base md:text-lg text-gray-300">
              Let's turn your vision into a standout digital experience,
              <br className="hidden sm:block" />
              designed to scale and built to perform.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4 sm:space-y-6">
              {/* Mobile Number Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                  <Phone size={20} />
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  pattern="[0-9]{10}"
                  className="w-full rounded-xl sm:rounded-2xl border border-purple-500/30 bg-purple-950/30 px-12 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <div className="absolute left-4 top-4 text-purple-400">
                  <MessageSquare size={20} />
                </div>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full rounded-xl sm:rounded-2xl border border-purple-500/30 bg-purple-950/30 px-12 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-white font-semibold text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Gradient Background */}
                <span className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600"></span>
                
                {/* Hover Effect */}
                <span className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
