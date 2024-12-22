import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function SolutionCard({ title, description, icon: Icon }: SolutionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}