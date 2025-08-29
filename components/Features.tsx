import React from 'react';
import { Search, Tag, Layout, Infinity } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: 'Fast Search',
      description: 'Quickly find any link with our powerful search functionality. Search by title, URL, or tags.',
      color: 'text-emerald-500'
    },
    {
      icon: Tag,
      title: 'Tags on Links',
      description: 'Organize your bookmarks with custom tags. Create categories that make sense for your workflow.',
      color: 'text-green-500'
    },
    {
      icon: Layout,
      title: 'Dedicated Pages',
      description: 'Separate sections for Instagram posts, Twitter URLs, and general web links for better organization.',
      color: 'text-emerald-600'
    },
    {
      icon: Infinity,
      title: 'Unlimited Links',
      description: 'Save as many links as you want without any restrictions. Your digital library grows with you.',
      color: 'text-green-400'
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to organize your links
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            BookmarkMe provides powerful tools to help you save, organize, and find your important links effortlessly.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <span className={`rounded-lg inline-flex p-3 ${feature.color} bg-emerald-50 group-hover:bg-emerald-100 transition-colors duration-200`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-400 rounded-t-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;