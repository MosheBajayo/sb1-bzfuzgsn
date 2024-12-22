import React from 'react';
import { Copy, LineChart, Brain, Zap } from 'lucide-react';
import Step from './Step';

const steps = [
  {
    title: 'Mirror Your Site',
    description: 'Our technology creates an interactive copy of your website for analysis without affecting your live site.',
    icon: Copy,
  },
  {
    title: 'Track & Measure',
    description: 'Automatically collect and analyze user behavior data across all customer touchpoints.',
    icon: LineChart,
  },
  {
    title: 'AI Analysis',
    description: 'Advanced AI processes patterns and generates actionable insights for optimization.',
    icon: Brain,
  },
  {
    title: 'Optimize & Scale',
    description: 'Implement AI-powered recommendations and see immediate results in your metrics.',
    icon: Zap,
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How JourneyOptimize Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple four-step process to transform your e-commerce experience
          </p>
        </div>
        <div className="grid gap-12 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step key={step.title} {...step} step={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}