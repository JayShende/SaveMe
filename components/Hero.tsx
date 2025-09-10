import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-emerald-50 to-green-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Your safe place</span>{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500 xl:inline">
                  for all links
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                BookmarkMe lets you save and organize unlimited links from
                Instagram, Twitter, and the web. Never lose track of important
                content again.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/dashboard"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200 md:py-4 md:text-lg md:px-10"
                  >
                    Start Bookmarking
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-l-3xl"
          src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="BookmarkMe App Preview"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-400/20 rounded-l-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
