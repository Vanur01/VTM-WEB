import React from 'react';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" style={{ backgroundColor: '#0B0011' }}>
      <div className="w-full max-w-7xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #6B21A8 0%, #4C1D95 100%)' }}>
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-4 mb-12 sm:mb-16">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Fuel Your Growth</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">with VanurTech Media</h2>
          </div>
          <button className="bg-white text-purple-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto">
            Subscribe to Newsletter
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-400 mb-8 sm:mb-12"></div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">About Vanurtech Media</h3>
            <p className="text-purple-200 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-white hover:text-purple-300 transition-colors">
                <Twitter size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">
                <Facebook size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">
                <Instagram size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors text-sm sm:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors text-sm sm:text-base">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors text-sm sm:text-base">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors text-sm sm:text-base">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Resources</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors text-sm sm:text-base">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors text-sm sm:text-base">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}