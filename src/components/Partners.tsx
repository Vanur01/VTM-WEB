"use client";

import React from "react";
import { Code, Smartphone, Layers, Globe, Zap, Box } from "lucide-react";

export default function Partners() {
  const logos = [
    { icon: Box, text: "Logoipsum" },
    { icon: Zap, text: "LOGO" },
    { icon: Layers, text: "logoipsum" },
    { icon: Globe, text: "logoipsum" },
    { icon: Code, text: "LOGO" },
    { icon: Smartphone, text: "LOGOIPSUM" },
    { icon: Box, text: "Logoipsum" },
    { icon: Globe, text: "logo-ipsum" },
    { icon: Zap, text: "LOGO" },
    { icon: Layers, text: "logo ipsum" },
  ];

  // Split logos into two rows
  const firstRow = logos.slice(0, 5);
  const secondRow = logos.slice(5, 10);

  return (
    <div
      className=" my-30 flex items-center justify-center p-4 sm:p-6 md:p-8"
      style={{ backgroundColor: "#0A0012" }}
    >
      <div className="max-w-full w-full">
        {/* Header Text */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Partners </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            <span className="text-purple-400">✦</span> Trusted by{" "}
            <span className="text-white font-semibold">200+ innovators</span>{" "}
            worldwide. <span className="text-purple-400">✦</span>
          </p>
        </div>

        {/* Logo Scrolling Rows */}
        <div className="space-y-3 sm:space-y-4 overflow-hidden">
          {/* First Row - Scroll Right to Left */}
          <div className="relative">
            <div className="flex animate-scroll-left gap-3 sm:gap-4">
              {[...firstRow, ...firstRow, ...firstRow].map((logo, index) => (
                <div
                  key={index}
                  className="rounded-full border border-purple-900/50 bg-linear-to-br from-purple-950/20 to-transparent p-3 sm:p-4 md:p-6 flex items-center justify-center hover:border-purple-700/50 hover:bg-purple-950/30 transition-all duration-300 cursor-pointer group shrink-0"
                  style={{
                    backdropFilter: "blur(10px)",
                    minHeight: "48px",
                    minWidth: "140px",
                  }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 text-white opacity-60 group-hover:opacity-100 transition-opacity">
                    <logo.icon size={20} className="sm:w-7 sm:h-7" strokeWidth={2} />
                    <span className="font-semibold text-xs sm:text-sm">{logo.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Left to Right */}
          <div className="relative">
            <div className="flex animate-scroll-right gap-3 sm:gap-4">
              {[...secondRow, ...secondRow, ...secondRow].map((logo, index) => (
                <div
                  key={index}
                  className="rounded-full border border-purple-900/50 bg-linear-to-br from-purple-950/20 to-transparent p-3 sm:p-4 md:p-6 flex items-center justify-center hover:border-purple-700/50 hover:bg-purple-950/30 transition-all duration-300 cursor-pointer group shrink-0"
                  style={{
                    backdropFilter: "blur(10px)",
                    minHeight: "48px",
                    minWidth: "140px",
                  }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 text-white opacity-60 group-hover:opacity-100 transition-opacity">
                    <logo.icon size={20} className="sm:w-7 sm:h-7" strokeWidth={2} />
                    <span className="font-semibold text-xs sm:text-sm">{logo.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-33.333%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 20s linear infinite;
          }

          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
}
