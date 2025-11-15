"use client";

import React, { useState } from 'react';
import { ArrowUpRight, Code, Smartphone, Layers, Zap } from 'lucide-react';
import { CometCard } from '@/components/ui/comet-card';

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      category: 'Custom SEO',
      title: 'Website Development',
      icon: Code,
      features: [
        {
          title: 'SEO-First Architecture:',
          description: 'semantic HTML, schema & on-page best practices'
        },
        {
          title: 'High-Performance:',
          description: 'sub-2s load times, image & script optimization'
        },
        {
          title: 'Conversion-Focused:',
          description: 'A/B-tested CTAs, integrated analytics'
        }
      ]
    },
    {
      id: 2,
      category: 'Business-Ready',
      title: 'Mobile App Services',
      icon: Smartphone,
      features: [
        {
          title: 'Cross-Platform Expertise:',
          description: 'native iOS/Android & React Native'
        },
        {
          title: 'End-to-end QA:',
          description: 'real-device testing, performance profiling'
        },
        {
          title: 'App Store Optimization:',
          description: 'keyword strategy, metadata & ASO'
        }
      ]
    },
    {
      id: 3,
      category: 'Tailored Software',
      title: 'Development Services',
      icon: Layers,
      features: [
        {
          title: 'Scalable Architecture:',
          description: 'microservices, cloud-native deployments'
        },
        {
          title: 'Seamless Integrations:',
          description: 'API connections & third-party tools'
        },
        {
          title: 'Real-Time Analytics:',
          description: 'dashboards, alerts & actionable insights'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#0A0012' }}>
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-purple-500 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-purple-400 italic text-xs sm:text-sm">Our Services</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
            From pixel-perfect design to<br />
            data-driven strategies
          </h1>
          
          <p className="text-gray-400 text-lg sm:text-xl">
            Experience VanurTech Media's complete digital solutions.
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-4 sm:space-y-6">
          {/* Row 1: 50% - 50% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 1 - 50% */}
            <CometCard className="w-full lg:w-1/2">
              <div
                className="h-[350px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
              <div className="mb-4 sm:mb-6">
                <div className="text-purple-400 text-xs sm:text-sm mb-2">{services[0].category}</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">{services[0].title}</h3>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {services[0].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white mt-1 text-sm">•</span>
                    <div className="text-sm sm:text-base">
                      <span className="text-white font-semibold">{feature.title}</span>
                      <span className="text-gray-400"> {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <ArrowUpRight className="text-purple-600" size={20} />
                </div>
              </div> */}

              <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>

            {/* Card 2 - 50% */}
            <CometCard className="w-full lg:w-1/2">
              <div
                className="h-[350px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
              <div className="mb-4 sm:mb-6">
                <div className="text-purple-400 text-xs sm:text-sm mb-2">{services[1].category}</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">{services[1].title}</h3>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {services[1].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white mt-1 text-sm">•</span>
                    <div className="text-sm sm:text-base">
                      <span className="text-white font-semibold">{feature.title}</span>
                      <span className="text-gray-400"> {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <ArrowUpRight className="text-purple-600" size={20} />
                </div>
              </div> */}

              <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>
          </div>

          {/* Row 2: 70% - 30% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 3 - 70% */}
            <CometCard className="w-full lg:w-[70%]">
              <div
                className="h-[350px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
              <div className="mb-4 sm:mb-6">
                <div className="text-purple-400 text-xs sm:text-sm mb-2">{services[2].category}</div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">{services[2].title}</h3>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {services[2].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-white mt-1 text-sm">•</span>
                    <div className="text-sm sm:text-base">
                      <span className="text-white font-semibold">{feature.title}</span>
                      <span className="text-gray-400"> {feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <ArrowUpRight className="text-purple-600" size={20} />
                </div>
              </div> */}

              <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>

            {/* Card 4 - 30% CTA Card */}
            <CometCard className="w-full lg:w-[30%]">
              <div
                className="h-[350px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden flex flex-col items-center justify-center text-center"
                onMouseEnter={() => setHoveredCard(4)}
                onMouseLeave={() => setHoveredCard(null)}
              >
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
                That's Not All!
              </h4>
              
              <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-all duration-300 group-hover:scale-105 font-semibold text-sm sm:text-base">
                <span>Explore More</span>
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
              </button>

              <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>
          </div>
        </div>
      </div>
    </div>
  );
}