import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export default function TestimonialCard({ quote, author, role, company, image }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-6">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={image}
          alt={author}
        />
        <div className="ml-4">
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
          <div className="text-sm text-indigo-600">{company}</div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
}