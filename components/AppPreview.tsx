import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const AppPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            App Preview
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            See BookmarkMe in action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the clean, intuitive interface that makes organizing your
            links effortless.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <Image
                src="/images/preview.png"
                alt="BookmarkMe App Preview"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-lg"
                priority
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Live Demo
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float delay-1000">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-medium text-gray-700">
                  Try it now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
