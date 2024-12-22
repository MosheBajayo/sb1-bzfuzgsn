import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Stats from './Stats';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 to-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Transform Your E-commerce with AI-Powered Analytics
          </h1>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
            Unlock the power of AI to visualize, analyze, and optimize your customer journeys in real-time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-indigo-50">
              Request Demo <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-indigo-800">
              Watch Video <Play className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
}