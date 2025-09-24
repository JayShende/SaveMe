"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Bookmark, Sparkles } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm shadow-sm"
      } sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a
              href="#"
              className="group flex items-center space-x-3 text-emerald-600 hover:text-emerald-700 transition-all duration-300"
            >
              <div className="relative">
                <Bookmark className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="h-3 w-3 text-green-500 animate-pulse" />
                </div>
              </div>
              <span className="font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                BookmarkMe
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white/80 backdrop-blur-sm rounded-xl p-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group py-2"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#features"
              className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group py-2"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#how-it-works"
              className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group py-2"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="/dashboard"
              className="group ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-xl text-white bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <Sparkles className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-2xl shadow-2xl ring-1 ring-black ring-opacity-5 bg-white/95 backdrop-blur-md divide-y-2 divide-gray-100">
            <div className="pt-6 pb-6 px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-emerald-600">
                  <div className="relative">
                    <Bookmark className="h-8 w-8" />
                    <Sparkles className="h-3 w-3 text-green-500 absolute -top-1 -right-1 animate-pulse" />
                  </div>
                  <span className="font-bold text-xl">BookmarkMe</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-emerald-50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <nav className="grid gap-y-6">
                  <a
                    href="#home"
                    className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-3 rounded-lg hover:bg-emerald-50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#features"
                    className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-3 rounded-lg hover:bg-emerald-50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-3 rounded-lg hover:bg-emerald-50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How It Works
                  </a>
                  <a
                    href="#about"
                    className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-3 rounded-lg hover:bg-emerald-50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-6 space-y-4">
              <Link
                href="/dashboard"
                className="w-full flex items-center justify-center px-6 py-4 border border-transparent rounded-xl text-white bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
