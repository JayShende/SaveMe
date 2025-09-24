import React from "react";
import {
  Smartphone,
  Instagram,
  Twitter,
  Globe,
  Sparkles,
  Zap,
  Shield,
  Download,
} from "lucide-react";
import Image from "next/image";

const MobilePreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 text-sm font-medium mb-6">
              <Smartphone className="h-4 w-4 mr-2" />
              Mobile First Design
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Access your bookmarks
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500">
                anywhere, anytime
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-xl text-gray-600 leading-relaxed">
              BookmarkMe works seamlessly across all your devices. Whether
              you&apos;re on your phone, tablet, or desktop, your saved links are
              always just a tap away with our responsive design.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Instagram className="h-5 w-5 text-pink-500" />
                <span>Instagram posts & stories</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Twitter className="h-5 w-5 text-blue-500" />
                <span>Twitter threads & tweets</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Globe className="h-5 w-5 text-emerald-500" />
                <span>Any web link or article</span>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Live Sync
                  </span>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-[3rem] h-[650px] w-[320px] shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Phone details */}
                <div className="h-[40px] w-[4px] bg-gray-800 absolute -left-[20px] top-[80px] rounded-l-lg"></div>
                <div className="h-[50px] w-[4px] bg-gray-800 absolute -left-[20px] top-[140px] rounded-l-lg"></div>
                <div className="h-[50px] w-[4px] bg-gray-800 absolute -left-[20px] top-[200px] rounded-l-lg"></div>
                <div className="h-[70px] w-[4px] bg-gray-800 absolute -right-[20px] top-[150px] rounded-r-lg"></div>

                <div className="rounded-[2.5rem] overflow-hidden w-[288px] h-[618px] bg-white">
                  {/* Phone screen content */}
                  <div className="bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 h-full p-5 flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-white text-sm font-medium mb-6">
                      <span className="font-mono">9:41</span>
                      <div className="flex items-center space-x-1">
                        <Sparkles className="h-4 w-4" />
                        <span className="font-semibold">BookmarkMe</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-6 h-3 border border-white rounded-sm">
                          <div className="w-full h-full bg-white rounded-sm"></div>
                        </div>
                        <span className="text-xs">100%</span>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="flex-1 bg-white rounded-3xl p-5 shadow-2xl">
                      <div className="space-y-4">
                        {/* Search bar */}
                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 text-center text-gray-500 text-sm border border-gray-200">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span>Search your bookmarks...</span>
                          </div>
                        </div>

                        {/* Sample bookmarks */}
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-pink-100 to-pink-50 p-4 rounded-2xl border-l-4 border-pink-400 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center text-xs text-pink-600 mb-2">
                              <Instagram className="h-4 w-4 mr-2" />
                              Instagram • 2h ago
                            </div>
                            <p className="text-sm font-semibold text-gray-800 mb-1">
                              Amazing sunset photo
                            </p>
                            <p className="text-xs text-gray-600">
                              #photography #nature
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-2xl border-l-4 border-blue-400 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center text-xs text-blue-600 mb-2">
                              <Twitter className="h-4 w-4 mr-2" />
                              Twitter • 1d ago
                            </div>
                            <p className="text-sm font-semibold text-gray-800 mb-1">
                              React best practices thread
                            </p>
                            <p className="text-xs text-gray-600">
                              #react #programming
                            </p>
                          </div>

                          <div className="bg-gradient-to-r from-emerald-100 to-emerald-50 p-4 rounded-2xl border-l-4 border-emerald-400 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center text-xs text-emerald-600 mb-2">
                              <Globe className="h-4 w-4 mr-2" />
                              Web • 3d ago
                            </div>
                            <p className="text-sm font-semibold text-gray-800 mb-1">
                              CSS Grid tutorial
                            </p>
                            <p className="text-xs text-gray-600">
                              #css #tutorial
                            </p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-xs text-gray-500 mb-3 font-medium">
                            Popular Tags
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-medium">
                              tutorial
                            </span>
                            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                              design
                            </span>
                            <span className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-xs font-medium">
                              inspiration
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePreview;
