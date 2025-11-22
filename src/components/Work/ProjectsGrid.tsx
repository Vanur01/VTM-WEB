"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projectApi, Project, categoryApi, Category } from '@/api';

export default function ProjectsGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Fetch all data once
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        // Fetch categories
        const categoriesResponse = await categoryApi.getAllCategories({ limit: 100 });
        if (categoriesResponse.success && categoriesResponse.result && Array.isArray(categoriesResponse.result)) {
          const validCategories = categoriesResponse.result.filter(
            (cat): cat is Category => typeof cat === 'object' && cat !== null && 'name' in cat
          );
          setCategories(validCategories);
        }

        // Fetch all projects
        const projectsResponse = await projectApi.getAllProjects({
          page: 1,
          limit: 1000, // Fetch all projects
        });

        if (projectsResponse.success) {
          setAllProjects(projectsResponse.result.projects);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Frontend filtering
  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => {
        const categoryId = typeof project.category === 'string' 
          ? project.category 
          : project.category?._id;
        return categoryId === selectedCategory;
      });

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const projects = filteredProjects.slice(startIndex, endIndex);

  const projectsOld = [
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
            <button
              onClick={() => {
                setSelectedCategory('All');
                setCurrentPage(1);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-purple-900/20 text-gray-400 border border-purple-900/50 hover:border-purple-600 hover:text-white'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => {
                  setSelectedCategory(category._id);
                  setCurrentPage(1);
                }}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category._id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-purple-900/20 text-gray-400 border border-purple-900/50 hover:border-purple-600 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="text-center py-20">
            <p className="text-red-400 text-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Projects Grid - Alternating Layout */}
        {!isLoading && !error && (
          <div className="space-y-6 sm:space-y-8">
            {projects.length === 0 ? (
            <div className="text-center py-12 sm:py-20">
              <p className="text-gray-400 text-lg sm:text-xl">No projects found in this category.</p>
            </div>
          ) : (
            <>
              {/* Render projects in alternating layout */}
              {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, rowIndex) => {
                const project1 = projects[rowIndex * 2];
                const project2 = projects[rowIndex * 2 + 1];
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-6 py-2 rounded-full bg-purple-900/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-900/40 transition-colors"
                >
                  Previous
                </button>
                <span className="text-gray-400">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-6 py-2 rounded-full bg-purple-900/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-900/40 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  hoveredCard: number | null;
  setHoveredCard: (id: number | null) => void;
}

function ProjectCard({ project, hoveredCard, setHoveredCard }: ProjectCardProps) {
  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setHoveredCard(parseInt(project._id.slice(-4), 16))}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Card Container */}
      <div className="h-full rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/20 to-transparent overflow-hidden hover:border-purple-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
        {/* Content Section */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="text-xs text-purple-400 mb-3 sm:mb-4">
            {typeof project.category === 'string' ? project.category : project.category?.name || 'Uncategorized'}
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 sm:px-4 py-1 rounded-full bg-purple-900/30 text-purple-400 text-xs sm:text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
          <div 
            className="rounded-xl sm:rounded-2xl overflow-hidden transform transition-transform duration-700 group-hover:scale-105"
            style={{
              boxShadow: hoveredCard === parseInt(project._id.slice(-4), 16) ? '0 20px 60px rgba(168, 85, 247, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.5)'
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
