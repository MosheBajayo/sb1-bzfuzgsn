import React from 'react';
import { LineChart, Brain, Eye, Zap, ShoppingCart, Users } from 'lucide-react';
import SolutionCard from './SolutionCard';

const solutions = [
  {
    title: 'Journey Visualization',
    description: 'See exactly how customers navigate your site with interactive journey mapping and real-time heat maps.',
    icon: Eye,
  },
  {
    title: 'Smart Analytics',
    description: 'Track custom KPIs and get detailed insights into your customer behavior patterns.',
    icon: LineChart,
  },
  {
    title: 'AI Optimization',
    description: 'Let AI analyze your data and provide actionable recommendations for improvement.',
    icon: Brain,
  },
  {
    title: 'Real-time Processing',
    description: 'Get instant insights with our lightning-fast data processing capabilities.',
    icon: Zap,
  },
  {
    title: 'Conversion Optimization',
    description: 'Boost your conversion rates with AI-powered recommendations and A/B testing.',
    icon: ShoppingCart,
  },
  {
    title: 'Customer Segmentation',
    description: 'Create detailed customer segments for targeted optimization strategies.',
    icon: Users,
  },
];

export default function Solutions() {
  return (
    <div id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solutions for Every E-commerce Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools to understand and optimize every aspect of your customer journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </div>
  );
}