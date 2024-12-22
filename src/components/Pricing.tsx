import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 499,
    features: [
      'Website mirroring',
      'Basic journey analytics',
      'Real-time heatmaps',
      'Up to 100,000 monthly visitors',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: 999,
    features: [
      'Everything in Starter',
      'Advanced AI insights',
      'Custom KPI tracking',
      'Up to 500,000 monthly visitors',
      'Priority support',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Professional',
      'Unlimited visitors',
      'Custom integrations',
      'Dedicated success manager',
      'SLA guarantee',
      'On-premise deployment option',
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                  </span>
                  {typeof tier.price === 'number' && <span className="text-base font-medium text-gray-500">/month</span>}
                </p>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-6 w-6 text-green-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700">
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}