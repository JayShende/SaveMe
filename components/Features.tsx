import React from 'react';
import { Search, Tag, Layout, Infinity, Sparkles, Zap, Shield, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Lightning Fast Search',
      description: 'Find any link instantly with our powerful search functionality. Search by title, URL, tags, or content.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      hoverBgColor: 'group-hover:bg-emerald-100',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Tag,
      title: 'Smart Tagging System',
      description: 'Organize your bookmarks with intelligent tags and categories that adapt to your workflow.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      hoverBgColor: 'group-hover:bg-green-100',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Layout,
      title: 'Dedicated Sections',
      description: 'Separate organized spaces for Instagram posts, Twitter threads, and web links for perfect organization.',
      color: 'text-teal-500',
      bgColor: 'bg-teal-50',
      hoverBgColor: 'group-hover:bg-teal-100',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: Infinity,
      title: 'Unlimited Storage',
      description: 'Save as many links as you want without any restrictions. Your digital library grows with you.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      hoverBgColor: 'group-hover:bg-emerald-100',
      gradient: 'from-emerald-600 to-green-500'
    }
  ];

  const additionalFeatures = [
    { icon: Zap, text: 'Real-time sync across devices' },
    { icon: Shield, text: 'Secure and private' },
    { icon: Globe, text: 'Works everywhere' },
    { icon: Sparkles, text: 'AI-powered suggestions' }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need to organize your links
          </h2>
          <p className="mt-6 max-w-3xl text-xl text-gray-600 lg:mx-auto leading-relaxed">
            BookmarkMe provides powerful tools to help you save, organize, and find your important links effortlessly. 
            Built for productivity and designed for simplicity.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="relative group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100/50 hover:border-emerald-200 transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon container */}
                  <div className="relative">
                    <div className={`rounded-2xl inline-flex p-4 ${feature.color} ${feature.bgColor} ${feature.hoverBgColor} transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    {/* Floating sparkle */}
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="mt-8 relative">
                    <h3 className="text-xl leading-6 font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional features */}
        <div className="mt-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/50">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">And much more...</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;