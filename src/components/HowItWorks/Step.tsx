import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  step: number;
}

export default function Step({ title, description, icon: Icon, step }: StepProps) {
  return (
    <div className="relative">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
          {step}
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <Icon className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
        </div>
      </div>
      <p className="text-gray-600 ml-16">{description}</p>
    </div>
  );
}