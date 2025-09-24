import React from "react";
import {
  Save,
  FolderOpen,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Save,
      title: "Save Any Link",
      description:
        "Copy and paste any link from Instagram, Twitter, or the web into BookmarkMe with just one click.",
      step: "01",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      features: ["One-click saving", "Auto-detection", "Instant preview"],
    },
    {
      icon: FolderOpen,
      title: "Organize Smartly",
      description:
        "Add custom tags and categories to keep your links organized and easy to find with our smart system.",
      step: "02",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      features: ["Smart tags", "Custom categories", "Auto-suggestions"],
    },
    {
      icon: Zap,
      title: "Access Instantly",
      description:
        "Quickly search and access your saved links whenever and wherever you need them with lightning speed.",
      step: "03",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      features: ["Lightning search", "Cross-device sync", "Offline access"],
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-emerald-50/50 via-green-50/30 to-teal-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            How It Works
          </div>
          <h2 className="text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Simple as 1, 2, 3
          </h2>
          <p className="mt-6 max-w-3xl text-xl text-gray-600 lg:mx-auto leading-relaxed">
            Get started with BookmarkMe in three easy steps and never lose track
            of important links again. Our intuitive process makes bookmarking
            effortless.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center group">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      <span
                        className={`inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-xl shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        {step.step}
                      </span>
                      <div className="absolute -top-1 -right-1">
                        <CheckCircle className="h-6 w-6 text-yellow-400 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${step.bgColor} pt-16 pb-8 px-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100/50 hover:border-emerald-200 transform group-hover:-translate-y-2 transition-all duration-500 overflow-hidden relative`}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 right-4 w-20 h-20 bg-emerald-200 rounded-full blur-xl"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-green-200 rounded-full blur-xl"></div>
                    </div>

                    <div className="relative">
                      <div
                        className={`mx-auto flex items-center justify-center h-20 w-20 rounded-2xl ${step.bgColor} group-hover:scale-110 transition-all duration-300 shadow-lg`}
                      >
                        <Icon
                          className={`h-10 w-10 ${step.iconColor}`}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="mt-8">
                        <h3 className="text-2xl leading-6 font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Features list */}
                        <div className="mt-6 space-y-2">
                          {step.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center justify-center space-x-2 text-sm text-gray-600"
                            >
                              <CheckCircle className="h-4 w-4 text-emerald-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Top accent line */}
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color} rounded-t-2xl`}
                    ></div>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 right-0 transform translate-x-1/2 z-20">
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-300 to-green-300"></div>
                        <ArrowRight className="h-5 w-5 text-emerald-400 animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of users who are already organizing their links
              with BookmarkMe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                <Sparkles className="h-5 w-5 mr-2" />
                Start Bookmarking Now
              </button>
              {/* <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-200 text-base font-semibold rounded-xl text-emerald-700 bg-white/80 hover:bg-emerald-50 hover:border-emerald-300 transform hover:-translate-y-1 transition-all duration-300">
                Watch Demo
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
