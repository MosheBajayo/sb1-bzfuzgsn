import React from 'react';
import { LineChart, Brain, Eye, Zap } from 'lucide-react';

const features = [
  {
    name: 'Journey Visualization',
    description: 'Interactive journey mapping, real-time heat maps, and drop-off analysis to understand user behavior.',
    icon: Eye,
  },
  {
    name: 'Smart Analytics',
    description: 'Predefined metrics dashboard, custom KPI tracking, and revenue impact assessment.',
    icon: LineChart,
  },
  {
    name: 'AI Optimization',
    description: 'Predictive analytics, automated insights, and personalization engine powered by advanced AI.',
    icon: Brain,
  },
  {
    name: 'Lightning Fast',
    description: 'Real-time data processing and seamless integration capabilities for immediate insights.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to optimize your e-commerce
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Powerful tools to understand and improve your customer's journey.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}