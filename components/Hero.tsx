import React from "react";
import { ArrowRight, Sparkles, Bookmark, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 py-20 sm:py-24 md:py-32 lg:py-20">
          <main className="px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 text-sm font-semibold mb-8 animate-fade-in shadow-lg">
                <Sparkles className="h-5 w-5 mr-3" />
                New: Enhanced search & organization
              </div>

              <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl mb-8">
                <span className="block animate-slide-up">Your safe place</span>{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 animate-slide-up delay-200">
                  for all links
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-600 sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300 font-light">
                BookmarkMe lets you save and organize unlimited links from
                Instagram, Twitter, and the web. Never lose track of important
                content again with our powerful search and tagging system.
              </p>

              {/* Feature highlights */}
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-base text-gray-600 animate-fade-in delay-500">
                <div className="flex items-center bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <Bookmark className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="font-medium">Unlimited bookmarks</span>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <Zap className="h-5 w-5 text-green-500 mr-3" />
                  <span className="font-medium">Lightning fast search</span>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <Sparkles className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="font-medium">Smart organization</span>
                </div>
              </div>

              <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6 animate-fade-in delay-700">
                <div className="rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <Link
                    href="/dashboard"
                    className="group flex items-center justify-center px-10 py-5 border border-transparent text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-300 md:py-6 md:text-xl md:px-16"
                  >
                    Start Bookmarking
                    <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
                {/* <div>
                  <button className="flex items-center justify-center px-10 py-5 border-2 border-emerald-200 text-lg font-bold rounded-2xl text-emerald-700 bg-white/90 hover:bg-emerald-50 hover:border-emerald-300 transform hover:-translate-y-2 transition-all duration-300 md:py-6 md:text-xl md:px-16 shadow-lg hover:shadow-xl">
                    Watch Demo
                  </button>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Hero;
