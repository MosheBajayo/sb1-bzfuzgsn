import React, { useState } from 'react';
import { Menu, X, BarChart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <BarChart className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">JourneyOptimize</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-white hover:text-indigo-200">Solutions</a>
            <a href="#customers" className="text-white hover:text-indigo-200">Customers</a>
            <a href="#pricing" className="text-white hover:text-indigo-200">Pricing</a>
            <button className="bg-white text-indigo-900 px-4 py-2 rounded-md hover:bg-indigo-50">
              Request Demo
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-indigo-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#solutions" className="block px-3 py-2 text-white hover:bg-indigo-800">Solutions</a>
            <a href="#customers" className="block px-3 py-2 text-white hover:bg-indigo-800">Customers</a>
            <a href="#pricing" className="block px-3 py-2 text-white hover:bg-indigo-800">Pricing</a>
            <button className="w-full text-left px-3 py-2 text-white bg-indigo-800 hover:bg-indigo-700">
              Request Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}