"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectsGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Web Design', 'Mobile App', 'CRM', 'Dashboard'];

  const projects = [
    {
      id: 1,
      title: 'Wallife Concepts',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, Headless WordPress, Netlify)',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
      category: 'Web Design'
    },
    {
      id: 2,
      title: 'Zilusion',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, DataCMS, Vercel)',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
      category: 'Web Design'
    },
    {
      id: 3,
      title: 'OVM Memorial School',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, DataCMS, Vercel)',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      category: 'Web Design'
    },
    {
      id: 4,
      title: 'Aatmaan Foundation',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, Headless WordPress, Netlify)',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      category: 'Web Design'
    },
    {
      id: 5,
      title: 'Tech Innovators',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(React, Node.js, AWS)',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'Mobile App'
    },
    {
      id: 6,
      title: 'Creative Studio',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Vue.js, Firebase, Netlify)',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      category: 'Web Design'
    },
    {
      id: 7,
      title: 'Digital Marketing Hub',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, Sanity, Vercel)',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      category: 'CRM'
    },
    {
      id: 8,
      title: 'E-Commerce Platform',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(React, Shopify, AWS)',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      category: 'Web Design'
    },
    {
      id: 9,
      title: 'Fitness Tracker Pro',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(React Native, Firebase, Cloud Functions)',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop',
      category: 'Mobile App'
    },
    {
      id: 10,
      title: 'Restaurant Booking System',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, Prisma, PostgreSQL)',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      category: 'Web Design'
    },
    {
      id: 11,
      title: 'Healthcare Dashboard',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(React, Node.js, MongoDB)',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      category: 'Dashboard'
    },
    {
      id: 12,
      title: 'Real Estate Portal',
      description: 'Lorem ipsum dolor sit amet consectetur. Non in et et tristique scelerisque adipiscing faucibus',
      tech: '(Next.js, Strapi, Vercel)',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop',
      category: 'Web Design'
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any
      }
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#0B0011' }}>
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
          >
            <span className="text-white">All </span>
            <span className="text-purple-500">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8"
          >
            Explore our complete portfolio of digital creations
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-purple-900/20 text-gray-400 border border-purple-900/50 hover:border-purple-600 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid - Alternating Layout */}
        <div className="space-y-6 sm:space-y-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 sm:py-20">
              <p className="text-gray-400 text-lg sm:text-xl">No projects found in this category.</p>
            </div>
          ) : (
            <>
              {/* Render filtered projects in alternating layout */}
              {Array.from({ length: Math.ceil(filteredProjects.length / 2) }).map((_, rowIndex) => {
                const project1 = filteredProjects[rowIndex * 2];
                const project2 = filteredProjects[rowIndex * 2 + 1];
                const isEvenRow = rowIndex % 2 === 0;

                return (
                  <div key={rowIndex} className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                    {project1 && (
                      <motion.div 
                        custom={rowIndex * 2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        className={`w-full ${isEvenRow ? 'lg:w-[40%]' : 'lg:w-[60%]'}`}
                      >
                        <ProjectCard project={project1} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
                      </motion.div>
                    )}
                    {project2 && (
                      <motion.div 
                        custom={rowIndex * 2 + 1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariants}
                        className={`w-full ${isEvenRow ? 'lg:w-[60%]' : 'lg:w-[40%]'}`}
                      >
                        <ProjectCard project={project2} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
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
    category: string;
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
          <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="inline-block">
            <span className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-purple-600 text-white text-xs sm:text-sm font-semibold hover:bg-purple-500 transition-colors cursor-pointer">
              {project.category}
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
