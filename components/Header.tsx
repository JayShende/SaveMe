"use client"
import React, { useState } from 'react';
import { Menu, X, Bookmark } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors duration-200">
              <Bookmark className="h-8 w-8" />
              <span className="font-bold text-xl">BookmarkMe</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200">
              How It Works
            </a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200">
              About
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#get-started"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-white bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-emerald-600">
                  <Bookmark className="h-8 w-8" />
                  <span className="font-bold text-xl">BookmarkMe</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#home" className="text-gray-700 hover:text-emerald-600 font-medium">Home</a>
                  <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium">Features</a>
                  <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium">How It Works</a>
                  <a href="#about" className="text-gray-700 hover:text-emerald-600 font-medium">About</a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <a
                href="#get-started"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-white bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 font-medium shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;