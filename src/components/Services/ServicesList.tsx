"use client";

import React, { useState } from 'react';
import { ArrowUpRight, Globe, Smartphone, Database, TrendingUp, Palette, Megaphone } from 'lucide-react';
import { CometCard } from '@/components/ui/comet-card';

export default function ServicesList() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      category: 'Digital Solutions',
      title: 'Website Design',
      icon: Globe,
      features: [
        {
          title: 'Responsive Design:',
          description: 'mobile-first, pixel-perfect layouts'
        },
        {
          title: 'Modern UI/UX:',
          description: 'intuitive navigation & engaging interfaces'
        },
        {
          title: 'Brand Identity:',
          description: 'consistent visual language across platforms'
        }
      ]
    },
    {
      id: 2,
      category: 'Native & Hybrid',
      title: 'Mobile Application',
      icon: Smartphone,
      features: [
        {
          title: 'Cross-Platform:',
          description: 'iOS & Android development'
        },
        {
          title: 'User-Centric:',
          description: 'seamless experiences & smooth performance'
        },
        {
          title: 'App Store Ready:',
          description: 'optimization & deployment support'
        }
      ]
    },
    {
      id: 3,
      category: 'Business Management',
      title: 'CRM Solutions',
      icon: Database,
      features: [
        {
          title: 'Custom Workflows:',
          description: 'tailored to your business needs'
        },
        {
          title: 'Data Integration:',
          description: 'seamless third-party connections'
        },
        {
          title: 'Analytics Dashboard:',
          description: 'real-time insights & reporting'
        }
      ]
    },
    {
      id: 4,
      category: 'Search Optimization',
      title: 'SEO Services',
      icon: TrendingUp,
      features: [
        {
          title: 'On-Page SEO:',
          description: 'keyword optimization & content strategy'
        },
        {
          title: 'Technical SEO:',
          description: 'site speed, schema & core web vitals'
        },
        {
          title: 'Link Building:',
          description: 'authority growth & organic rankings'
        }
      ]
    },
    {
      id: 5,
      category: 'Visual Identity',
      title: 'Graphics Design',
      icon: Palette,
      features: [
        {
          title: 'Brand Assets:',
          description: 'logos, icons & visual systems'
        },
        {
          title: 'Marketing Materials:',
          description: 'brochures, banners & social media'
        },
        {
          title: 'Illustrations:',
          description: 'custom graphics & 3D visuals'
        }
      ]
    },
    {
      id: 6,
      category: 'Growth Strategy',
      title: 'Digital Marketing',
      icon: Megaphone,
      features: [
        {
          title: 'Social Media:',
          description: 'content strategy & community management'
        },
        {
          title: 'PPC Campaigns:',
          description: 'Google Ads, Facebook & targeted advertising'
        },
        {
          title: 'Email Marketing:',
          description: 'automation & conversion optimization'
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
            Complete Digital Solutions<br />
            for Your Business
          </h1>
          
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Discover VanurTech Media's comprehensive service offerings.
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-4 sm:space-y-6">
          {/* Row 1: 50% - 50% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 1 */}
            <CometCard className="w-full lg:w-1/2">
              <div
                className="h-[350px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                // style={{
                //   animation: 'fadeInUp 0.6s ease-out both'
                // }}
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

            

              <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>

            {/* Card 2 */}
            <CometCard className="w-full lg:w-1/2">
              <div
                className="h-[350px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                // style={{
                //   animation: 'fadeInUp 0.6s ease-out 0.2s both'
                // }}
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

            {/* Card 4 - 30% */}
            <CometCard className="w-full lg:w-[30%]">
              <div
                className="h-[350px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(4)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">{services[3].category}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">{services[3].title}</h3>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {services[3].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white mt-1 text-xs sm:text-sm">•</span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-semibold">{feature.title}</span>
                        <span className="text-gray-400"> {feature.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <ArrowUpRight className="text-purple-600" size={16} />
                  </div>
                </div> */}

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>
          </div>

          {/* Row 3: 30% - 70% */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Card 5 - 30% */}
            <CometCard className="w-full lg:w-[30%]">
              <div
                className="h-[350px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(5)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">{services[4].category}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">{services[4].title}</h3>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {services[4].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-white mt-1 text-xs sm:text-sm">•</span>
                      <div className="text-xs sm:text-sm">
                        <span className="text-white font-semibold">{feature.title}</span>
                        <span className="text-gray-400"> {feature.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <ArrowUpRight className="text-purple-600" size={16} />
                  </div>
                </div> */}

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>

            {/* Card 6 - 70% */}
            <CometCard className="w-full lg:w-[70%]">
              <div
                className="h-[350px] rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 p-4 sm:p-6 md:p-8 hover:border-purple-600 transition-all duration-500 group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(6)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="text-purple-400 text-xs sm:text-sm mb-2">{services[5].category}</div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">{services[5].title}</h3>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {services[5].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-white mt-1 text-sm">•</span>
                      <div className="text-sm sm:text-base">
                        <span className="text-white font-semibold">{feature.title}</span>
                        <span className="text-gray-400"> {feature.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
{/* 
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <ArrowUpRight className="text-purple-600" size={20} />
                  </div>
                </div> */}

                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </CometCard>
          </div>
        </div>
      </div>
    </div>
  );
}