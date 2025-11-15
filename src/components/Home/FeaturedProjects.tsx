"use client";

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturedProjects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Wallife Concepts',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, Headless WordPress, Netlify)',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
      tag: 'Web Design'
    },
    {
      id: 2,
      title: 'Zilusion',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, DataCMS, Vercel)',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
      tag: 'Web Design'
    },
    {
      id: 3,
      title: 'OVM Memorial School',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, DataCMS, Vercel)',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      tag: 'Web Design'
    },
    {
      id: 4,
      title: 'Aatmaan Foundation',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, Headless WordPress, Netlify)',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      tag: 'Web Design'
    },
    {
      id: 5,
      title: 'Tech Innovators',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(React, Node.js, AWS)',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tag: 'Mobile App'
    },
    {
      id: 6,
      title: 'Creative Studio',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Vue.js, Firebase, Netlify)',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      tag: 'Web Design'
    },
    {
      id: 7,
      title: 'Digital Marketing Hub',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, Sanity, Vercel)',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tag: 'CRM'
    },
    {
      id: 8,
      title: 'E-Commerce Platform',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(React, Shopify, AWS)',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tag: 'Web Design'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any
      }
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 py-20" style={{ backgroundColor: '#0A0012' }}>
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-purple-500 mb-6 sm:mb-8"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-purple-400 italic text-xs sm:text-sm">Featured Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight"
          >
            <span className="text-white">Glide Through Our</span>
            <br className="hidden sm:block" />
            <span className="text-purple-500 italic">Infinite</span>
            <span className="text-white"> Creations</span>
          </motion.h1>

          {/* Decorative Line with Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="w-px h-12 sm:h-16 bg-linear-to-b from-purple-500 to-transparent"></div>
            <div className="absolute">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white p-1 sm:p-2 flex items-center justify-center">
                <img src="/images/logo-1.png" alt="Logo" className="w-full h-full object-cover rounded-full" />
                </div>
            </div>
          </motion.div>
        </div>

        {/* Projects Grid - Alternating Layout */}
        <div className="space-y-6 sm:space-y-8 mt-12 sm:mt-20">
          {/* Row 1: 40% - 60% */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="w-full lg:w-[40%]"
            >
              <ProjectCard project={projects[0]} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
            </motion.div>
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="w-full lg:w-[60%]"
            >
              <ProjectCard project={projects[1]} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
            </motion.div>
          </div>

          {/* Row 2: 60% - 40% */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="w-full lg:w-[60%]"
            >
              <ProjectCard project={projects[2]} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
            </motion.div>
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="w-full lg:w-[40%]"
            >
              <ProjectCard project={projects[3]} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
            </motion.div>
          </div>

          {/* Row 3: 40% - 60% */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="w-full lg:w-[40%]"
            >
              <ProjectCard project={projects[4]} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
            </motion.div>
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="w-full lg:w-[60%]"
            >
              <ProjectCard project={projects[5]} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
            </motion.div>
          </div>

          {/* Row 4: 60% - 40% */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <motion.div
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="w-full lg:w-[60%]"
            >
              <ProjectCard project={projects[6]} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
            </motion.div>
            <motion.div
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="w-full lg:w-[40%]"
            >
              <ProjectCard project={projects[7]} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            <span className="text-white">Endless Scroll Got</span>
            <br />
            <span className="text-white">You </span>
            <span className="text-purple-500 italic">Dizzy</span>
            <span className="text-white">?</span>
          </h2>
          
          <p className="text-gray-400 text-sm md:text-lg mb-8">
            Ground yourself—see our projects in a single view.
          </p>

            <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg border border-purple-500 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10">Land on Projects</span>
              <svg 
              className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            </div>
        </motion.div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string;
    image: string;
    tag: string;
  };
  hoveredCard: number | null;
  setHoveredCard: (id: number | null) => void;
}

function ProjectCard({ project, hoveredCard, setHoveredCard }: ProjectCardProps) {
  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setHoveredCard(project.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Card Container */}
      <div className="h-full rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/20 to-transparent overflow-hidden hover:border-purple-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
        {/* Content Section */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="text-xs text-purple-400 mb-3 sm:mb-4">{project.tech}</div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            {project.description}
          </p>
          <div className="inline-block">
            <span className="px-4 sm:px-6 py-2 rounded-full bg-purple-600 text-white text-xs sm:text-sm font-semibold hover:bg-purple-500 transition-colors cursor-pointer">
              {project.tag}
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
          <div
            className="rounded-xl sm:rounded-2xl overflow-hidden transform transition-transform duration-700 group-hover:scale-105"
            style={{
              boxShadow: hoveredCard === project.id ? '0 20px 60px rgba(168, 85, 247, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.5)'
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-700 group-hover:brightness-110"
            />
          </div>
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"
        style={{ zIndex: -1 }}
      ></div>
    </div>
  );
}