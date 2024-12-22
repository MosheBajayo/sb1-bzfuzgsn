import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-indigo-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Transform Your E-commerce Experience?
              </h2>
              <p className="mt-4 text-lg text-indigo-200">
                Join hundreds of leading brands using JourneyOptimize to boost conversions and revenue.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-indigo-50">
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-indigo-700">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}