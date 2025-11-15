"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { CometCard } from '@/components/ui/comet-card';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Design', 'Marketing', 'SEO'];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the cutting-edge technologies and frameworks shaping the future of web development.',
      category: 'Web Development',
      date: 'Nov 10, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      tags: ['React', 'Next.js', 'AI']
    },
    {
      id: '2',
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Learn why prioritizing mobile experiences is crucial for modern digital success.',
      category: 'Design',
      date: 'Nov 8, 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['UX', 'Mobile', 'Design']
    },
    {
      id: '3',
      title: 'SEO Strategies That Actually Work in 2025',
      excerpt: 'Discover proven SEO tactics to boost your website\'s visibility and organic traffic.',
      category: 'SEO',
      date: 'Nov 5, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['SEO', 'Marketing', 'Content']
    },
    {
      id: '4',
      title: 'Building Scalable Mobile Apps with React Native',
      excerpt: 'A comprehensive guide to creating cross-platform mobile applications that scale.',
      category: 'Mobile Apps',
      date: 'Nov 2, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['React Native', 'Mobile', 'Development']
    },
    {
      id: '5',
      title: 'The Power of Brand Identity in Digital Marketing',
      excerpt: 'How a strong brand identity can transform your digital marketing efforts.',
      category: 'Marketing',
      date: 'Oct 28, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop',
      tags: ['Branding', 'Marketing', 'Strategy']
    },
    {
      id: '6',
      title: 'Mastering UI/UX: Principles for Better User Experiences',
      excerpt: 'Essential design principles to create intuitive and engaging user interfaces.',
      category: 'Design',
      date: 'Oct 25, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop',
      tags: ['UI', 'UX', 'Design']
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8" style={{ backgroundColor: '#0A0012' }}>
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-900/20 text-gray-400 hover:bg-purple-900/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CometCard className="h-full">
                <Link href={`/blog/${post.id}`}>
                  <div className="h-full rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/30 to-purple-900/10 overflow-hidden hover:border-purple-600 transition-all duration-500 group cursor-pointer">
                    {/* Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#0A0012]/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs sm:text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-linear-to-t from-[#0A0012] via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-purple-900/30 text-purple-400 text-xs">
                            <Tag size={12} />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-gray-500 text-xs sm:text-sm border-t border-purple-900/30 pt-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight size={16} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </CometCard>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No blog posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
