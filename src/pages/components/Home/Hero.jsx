import React from 'react';

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <span className="block">Mindora</span>
          <span className="block text-blue-600 mt-2">Your Path to Inner Peace</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-gray-600">
          Discover tranquility through guided meditation, mindfulness practices, and personalized wellness journeys.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/get-started"
            className="rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
          >
            Get Started
          </a>
          <a
            href="/learn-more"
            className="rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-50 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
