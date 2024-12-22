import React from 'react';
import PartnerLogo from './PartnerLogo';

const partners = [
  {
    name: 'Shopify',
    logo: 'https://cdn.shopify.com/s/files/1/0558/2739/6741/files/Shopify_logo_black.png',
  },
  {
    name: 'WooCommerce',
    logo: 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce.svg',
  },
  {
    name: 'Magento',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magento_Logo.svg/2560px-Magento_Logo.svg.png',
  },
  {
    name: 'BigCommerce',
    logo: 'https://www.bigcommerce.com/assets/images/logos/bigcommerce-logo-dark.svg',
  },
];

export default function Partners() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Integration Partners
          </h2>
          <p className="text-gray-600">
            Seamlessly integrate with your favorite e-commerce platforms
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} {...partner} />
          ))}
        </div>
      </div>
    </div>
  );
}