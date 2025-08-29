import React from 'react';
import { Save, FolderOpen, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Save,
      title: 'Save',
      description: 'Copy and paste any link from Instagram, Twitter, or the web into BookmarkMe.',
      step: '01'
    },
    {
      icon: FolderOpen,
      title: 'Organize',
      description: 'Add custom tags and categories to keep your links organized and easy to find.',
      step: '02'
    },
    {
      icon: Zap,
      title: 'Access',
      description: 'Quickly search and access your saved links whenever and wherever you need them.',
      step: '03'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-b from-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple as 1, 2, 3
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Get started with BookmarkMe in three easy steps and never lose track of important links again.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </span>
                  </div>

                  <div className="bg-white pt-12 pb-8 px-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-emerald-200 transform group-hover:-translate-y-1 transition-all duration-300">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors duration-200">
                      <Icon className="h-8 w-8 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 group-hover:text-emerald-700 transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 right-0 transform translate-x-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-green-300"></div>
                      <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-emerald-400 border-t-2 border-t-transparent border-b-2 border-b-transparent transform translate-x-1"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;