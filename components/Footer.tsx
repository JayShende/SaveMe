"use client";
import React from "react";
import {
  Bookmark,
  Github,
  Twitter,
  Instagram,
  Mail,
  Heart,
  Sparkles,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Bookmark className="h-8 w-8 text-emerald-400" />
                  <Sparkles className="h-3 w-3 text-green-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-2xl font-bold text-white">
                  BookmarkMe
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Your safe place for all links. Save, organize, and access your
                bookmarks from anywhere with our powerful and intuitive
                platform.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 p-3 rounded-xl bg-gray-800/50 hover:bg-emerald-500/20 group"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-3 rounded-xl bg-gray-800/50 hover:bg-blue-500/20 group"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-all duration-300 p-3 rounded-xl bg-gray-800/50 hover:bg-pink-500/20 group"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 p-3 rounded-xl bg-gray-800/50 hover:bg-emerald-500/20 group"
                >
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center text-gray-400 mb-4 md:mb-0">
                <Heart className="h-4 w-4 text-red-400 mr-2 animate-pulse" />
                <span className="text-sm">
                  © 2025 BookmarkMe. All rights reserved. Built with ❤️ for link
                  lovers everywhere
                </span>
              </div>

              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-all duration-300 group"
              >
                <span className="text-sm">Back to top</span>
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
