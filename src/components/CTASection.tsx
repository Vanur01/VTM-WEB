"use client";

import React from "react";
import { Rocket } from "lucide-react";

export default function CTASection() {
  return (
    <div className=" my-20 w-full bg-[#0B0011] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-500/30 bg-linear-to-br from-purple-950/50 via-purple-900/30 to-transparent p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
          {/* Glow effect */}
          <div className="absolute -left-10 -top-10 sm:-left-16 sm:-top-16 md:-left-20 md:-top-20 h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 sm:-bottom-16 sm:-right-16 md:-bottom-20 md:-right-20 h-40 w-40 sm:h-48 sm:w-48 md:h-60 md:w-60 rounded-full bg-blue-500/20 blur-3xl"></div>

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

            <button className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-purple-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:scale-105">
              <Rocket className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-12" />
              <span>Start a Project</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
