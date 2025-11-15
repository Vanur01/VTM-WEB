"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';
import CTASection from '@/components/CTASection';
import { useParams } from 'next/navigation';

// Mock blog data - in production, this would come from a CMS or API
const getBlogPost = (id: string) => {
  const posts: { [key: string]: any } = {
    '1': {
      id: '1',
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the cutting-edge technologies and frameworks shaping the future of web development.',
      category: 'Web Development',
      date: 'Nov 10, 2025',
      readTime: '5 min read',
      author: 'Sarah Johnson',
      authorRole: 'Senior Web Developer',
      tags: ['React', 'Next.js', 'AI', 'Web3'],
      content: `
        <h2>Introduction</h2>
        <p>The web development landscape is evolving at an unprecedented pace. As we navigate through 2025, several key trends are emerging that will define how we build digital experiences for years to come.</p>
        
        <h2>1. AI-Powered Development Tools</h2>
        <p>Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. From code completion to automated testing, AI assistants are helping developers work smarter and faster.</p>
        
        <h3>Key Benefits:</h3>
        <ul>
          <li>Faster code writing with intelligent suggestions</li>
          <li>Automated bug detection and fixes</li>
          <li>Smart code refactoring recommendations</li>
          <li>Natural language to code conversion</li>
        </ul>
        
        <h2>2. Server Components and Edge Computing</h2>
        <p>The rise of server components, particularly with frameworks like Next.js 14+, is revolutionizing how we think about rendering. Edge computing brings computation closer to users, dramatically improving performance.</p>
        
        <blockquote>
          "The future of web development lies in finding the perfect balance between server and client rendering, optimizing for both performance and user experience."
        </blockquote>
        
        <h2>3. Web3 and Decentralized Applications</h2>
        <p>While the initial hype has settled, Web3 technologies are maturing and finding practical applications. Developers are exploring blockchain integration, decentralized storage, and smart contracts in meaningful ways.</p>
        
        <h2>4. Progressive Web Apps (PWA) 2.0</h2>
        <p>PWAs are experiencing a renaissance with improved capabilities, better browser support, and enhanced offline functionality. The line between web and native apps continues to blur.</p>
        
        <h2>Conclusion</h2>
        <p>As we look ahead, the web development ecosystem will continue to evolve with a focus on performance, user experience, and developer productivity. Staying current with these trends will be crucial for building modern, competitive web applications.</p>
      `
    },
    '2': {
      id: '2',
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Learn why prioritizing mobile experiences is crucial for modern digital success.',
      category: 'Design',
      date: 'Nov 8, 2025',
      readTime: '4 min read',
      author: 'Michael Chen',
      authorRole: 'UX Design Lead',
      tags: ['UX', 'Mobile', 'Design', 'Responsive'],
      content: `
        <h2>The Mobile-First Imperative</h2>
        <p>In today's digital landscape, mobile devices account for over 60% of all web traffic. This shift demands a fundamental change in how we approach design and development.</p>
        
        <h2>Why Mobile-First?</h2>
        <p>Mobile-first design isn't just about making your site look good on small screens—it's about rethinking the entire user experience from the ground up.</p>
        
        <h3>Core Principles:</h3>
        <ul>
          <li>Prioritize content hierarchy for small screens</li>
          <li>Optimize touch targets for finger navigation</li>
          <li>Design with bandwidth constraints in mind</li>
          <li>Progressive enhancement for larger screens</li>
        </ul>
        
        <h2>Performance Considerations</h2>
        <p>Mobile users expect lightning-fast experiences. Page load time directly impacts bounce rates, conversions, and SEO rankings.</p>
        
        <blockquote>
          "A 1-second delay in mobile load times can impact conversions by up to 20%."
        </blockquote>
        
        <h2>Best Practices</h2>
        <p>Implementing mobile-first design requires a strategic approach that balances aesthetics with functionality and performance.</p>
      `
    },
    '3': {
      id: '3',
      title: 'SEO Strategies That Actually Work in 2025',
      excerpt: 'Discover proven SEO tactics to boost your website\'s visibility and organic traffic.',
      category: 'SEO',
      date: 'Nov 5, 2025',
      readTime: '6 min read',
      author: 'Emily Rodriguez',
      authorRole: 'SEO Specialist',
      tags: ['SEO', 'Marketing', 'Content', 'Analytics'],
      content: `
        <h2>The SEO Landscape in 2025</h2>
        <p>Search Engine Optimization continues to evolve with Google's algorithm updates and changing user behaviors. Here's what's working now.</p>
        
        <h2>1. E-E-A-T and Content Quality</h2>
        <p>Experience, Expertise, Authoritativeness, and Trustworthiness remain paramount. Google's AI is better than ever at identifying high-quality, authoritative content.</p>
        
        <h2>2. Core Web Vitals</h2>
        <p>Technical performance metrics are now critical ranking factors:</p>
        <ul>
          <li>Largest Contentful Paint (LCP)</li>
          <li>First Input Delay (FID)</li>
          <li>Cumulative Layout Shift (CLS)</li>
        </ul>
        
        <h2>3. Semantic Search Optimization</h2>
        <p>Understanding search intent and creating comprehensive topic clusters is more important than keyword density.</p>
        
        <h2>Conclusion</h2>
        <p>SEO success in 2025 requires a holistic approach combining technical excellence, content quality, and user experience.</p>
      `
    }
  };

  return posts[id] || null;
};

const BlogDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const post = getBlogPost(id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0012]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-purple-500 hover:text-purple-400">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0B0011]">
      {/* Hero Section */}
      <div className="relative w-full py-10 overflow-hidden" style={{ backgroundColor: '#0A0012' }}>
        {/* Sparkles Background */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-purple-900/20 via-transparent to-[#0A0012]"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0012] via-transparent to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium">
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-400 mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  {post.author.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-medium">{post.author}</div>
                  <div className="text-sm">{post.authorRole}</div>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime}
              </span>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {post.tags.map((tag: string) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-purple-900/30 text-purple-400 text-sm">
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-linear-to-t from-[#0A0012] to-transparent"></div>
      </div>

      {/* Article Content */}
      <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16" style={{ backgroundColor: '#0A0012' }}>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          {/* Featured Image Placeholder */}
          <div className="mb-12 rounded-2xl overflow-hidden bg-linear-to-br from-purple-900/40 to-pink-900/40 h-64 sm:h-96"></div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mb-4 prose-h2:mt-8
              prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mb-3 prose-h3:mt-6
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-gray-300 prose-ul:my-4
              prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400
              prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-purple-900/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-white font-bold text-lg">Share this article</h3>
              <div className="flex gap-3">
                <button className="p-3 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50 transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="p-3 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50 transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="p-3 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50 transition-colors">
                  <Linkedin size={20} />
                </button>
                <button className="p-3 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      <CTASection />
    </div>
  );
};

export default BlogDetailPage;
