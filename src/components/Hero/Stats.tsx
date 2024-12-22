import React from 'react';

const stats = [
  { number: '900+', label: 'Enterprise Clients' },
  { number: '27%', label: 'Higher Conversion Rate' },
  { number: '45%', label: 'Increased Engagement' },
  { number: '$12M+', label: 'Revenue Generated' },
];

export default function Stats() {
  return (
    <div className="bg-indigo-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white">{stat.number}</div>
              <div className="mt-2 text-indigo-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}