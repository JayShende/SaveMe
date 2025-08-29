import React from 'react';
import { Smartphone, Instagram, Twitter, Globe } from 'lucide-react';

const MobilePreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Access your bookmarks
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
                anywhere, anytime
              </span>
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              BookmarkMe works seamlessly across all your devices. Whether you're on your phone, tablet, or desktop, 
              your saved links are always just a tap away.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Instagram className="h-6 w-6 text-pink-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Save Instagram posts and stories</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Twitter className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Bookmark Twitter threads and tweets</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Globe className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Store any web link or article</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                  {/* Phone screen content */}
                  <div className="bg-gradient-to-br from-emerald-500 to-green-400 h-full p-4 flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-white text-sm font-medium mb-4">
                      <span>9:41</span>
                      <span>BookmarkMe</span>
                      <span>100%</span>
                    </div>

                    {/* App content */}
                    <div className="flex-1 bg-white rounded-2xl p-4 shadow-lg">
                      <div className="space-y-3">
                        {/* Search bar */}
                        <div className="bg-gray-100 rounded-lg p-3 text-center text-gray-500 text-sm">
                          🔍 Search your bookmarks...
                        </div>

                        {/* Sample bookmarks */}
                        <div className="space-y-2">
                          <div className="bg-gradient-to-r from-pink-100 to-pink-50 p-3 rounded-lg border-l-4 border-pink-400">
                            <div className="flex items-center text-xs text-pink-600 mb-1">
                              <Instagram className="h-3 w-3 mr-1" />
                              Instagram
                            </div>
                            <p className="text-sm font-medium text-gray-700 truncate">Amazing sunset photo</p>
                          </div>

                          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                            <div className="flex items-center text-xs text-blue-600 mb-1">
                              <Twitter className="h-3 w-3 mr-1" />
                              Twitter
                            </div>
                            <p className="text-sm font-medium text-gray-700 truncate">React best practices thread</p>
                          </div>

                          <div className="bg-gradient-to-r from-emerald-100 to-emerald-50 p-3 rounded-lg border-l-4 border-emerald-400">
                            <div className="flex items-center text-xs text-emerald-600 mb-1">
                              <Globe className="h-3 w-3 mr-1" />
                              Web
                            </div>
                            <p className="text-sm font-medium text-gray-700 truncate">CSS Grid tutorial</p>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="pt-4">
                          <p className="text-xs text-gray-500 mb-2">Popular Tags</p>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs">tutorial</span>
                            <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">design</span>
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs">inspiration</span>
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