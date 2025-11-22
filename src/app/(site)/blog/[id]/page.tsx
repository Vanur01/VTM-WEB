"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles';
import CTASection from '@/components/CTASection';
import { useParams } from 'next/navigation';
import { blogApi, Blog } from '@/api';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const [post, setPost] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      
      setIsLoading(true);
      setError('');
      
      try {
        const response = await blogApi.getBlogById(id);
        if (response.success) {
          setPost(response.result);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blog post');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Format date helper
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0012]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0012]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{error || 'Blog Post Not Found'}</h1>
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
                {typeof post.category === 'string' ? post.category : post.category?.name || 'Uncategorized'}
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

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-400 mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  {post.author.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-medium">{post.author.name}</div>
                  <div className="text-sm">{post.author.email}</div>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readingTime} min read
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
          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-3xl prose-h1:sm:text-4xl prose-h1:mb-4 prose-h1:mt-8
              prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mb-4 prose-h2:mt-8
              prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mb-3 prose-h3:mt-6
              prose-h4:text-lg prose-h4:sm:text-xl prose-h4:mb-2 prose-h4:mt-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300 hover:prose-a:underline
              prose-ul:text-gray-300 prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
              prose-ol:text-gray-300 prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
              prose-li:mb-2 prose-li:text-gray-300
              prose-code:text-purple-400 prose-code:bg-purple-900/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
              prose-pre:bg-gray-900 prose-pre:text-gray-300 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
              prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400 prose-blockquote:my-6
              prose-strong:text-white prose-strong:font-bold
              prose-em:text-gray-200 prose-em:italic
              prose-img:rounded-lg prose-img:my-6
              prose-hr:border-purple-900/30 prose-hr:my-8
              prose-table:border-collapse prose-table:w-full prose-table:my-6
              prose-th:border prose-th:border-purple-900/30 prose-th:bg-purple-900/20 prose-th:p-3 prose-th:text-left prose-th:text-white
              prose-td:border prose-td:border-purple-900/30 prose-td:p-3 prose-td:text-gray-300"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

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
