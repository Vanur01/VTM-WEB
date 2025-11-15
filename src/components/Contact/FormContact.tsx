"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interests: [] as string[]
  });

  const interests = [
    'Website Design',
    'Mobile Application',
    'CRM Solutions',
    'Graphics Design',
    'SEO Services',
    'Digital Marketing'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#0A0012' }}>
      <div className="max-w-4xl w-full">
        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl border border-purple-900/50 bg-linear-to-br from-purple-950/20 to-transparent p-6 sm:p-8 md:p-12"
        >
          {/* Form Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="text-white">Get in </span>
              <span className="text-purple-500">Touch</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm mb-3 font-medium">
                  Name <span className="text-purple-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Who's reaching out?"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-500 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-3 font-medium">
                  Email <span className="text-purple-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Where can we reply?"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-500 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Company/Brand */}
            <div>
              <label className="block text-white text-sm mb-3 font-medium">
                Company / Brand <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full bg-transparent border-b-2 border-gray-700 text-white placeholder-gray-500 py-3 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            {/* What's in your mind */}
            <div>
              <label className="block text-white text-sm mb-3 sm:mb-4 font-medium">
                What's in your mind <span className="text-purple-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-300 text-sm sm:text-base ${
                      formData.interests.includes(interest)
                        ? 'border-purple-500 bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                        : 'border-gray-700 bg-transparent text-gray-400 hover:border-purple-500 hover:text-white'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-white text-sm mb-3 font-medium">
                Message <span className="text-purple-500">*</span>
              </label>
              <textarea
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={5}
                className="w-full bg-transparent border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 p-4 focus:border-purple-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="group relative px-12 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 bg-linear-to-r from-purple-600 to-pink-600 inline-flex items-center gap-3"
              >
                Let's Talk
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-6 text-gray-400 text-sm">
                Or{' '}
                <a 
                  href="mailto:info@vanurmedia.com" 
                  className="text-white underline hover:text-purple-400 transition-colors"
                >
                  email us at info@vanurmedia.com
                </a>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2 text-green-400 text-sm">
                <Check size={16} />
                <span>We usually reply within a few hours</span>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-900/30 bg-purple-950/10"
          >
            <div className="text-purple-500 text-xl sm:text-2xl mb-2 sm:mb-3">📧</div>
            <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
            <p className="text-gray-400 text-xs sm:text-sm">info@vanurmedia.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-900/30 bg-purple-950/10"
          >
            <div className="text-purple-500 text-xl sm:text-2xl mb-2 sm:mb-3">📱</div>
            <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Phone</h3>
            <p className="text-gray-400 text-xs sm:text-sm">+1 (555) 123-4567</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-900/30 bg-purple-950/10 sm:col-span-2 lg:col-span-1"
          >
            <div className="text-purple-500 text-xl sm:text-2xl mb-2 sm:mb-3">📍</div>
            <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Location</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Remote & Worldwide</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
