import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "JourneyOptimize transformed how we understand our customers. We've seen a 40% increase in conversion rates since implementation.",
    author: "Sarah Chen",
    role: "Head of E-commerce",
    company: "Fashion Retail Co",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The AI-powered insights have been game-changing for our optimization strategy. Highly recommended!",
    author: "Michael Rodriguez",
    role: "Digital Marketing Director",
    company: "Tech Solutions Inc",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Setup was quick, and the results were immediate. Our team now has clear direction on optimization priorities.",
    author: "Emma Thompson",
    role: "CTO",
    company: "Global Commerce Ltd",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how companies are transforming their e-commerce experience with JourneyOptimize.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}