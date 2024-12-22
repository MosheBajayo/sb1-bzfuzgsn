import React from 'react';

interface PartnerLogoProps {
  name: string;
  logo: string;
}

export default function PartnerLogo({ name, logo }: PartnerLogoProps) {
  return (
    <div className="flex items-center justify-center p-8">
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-12 opacity-50 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}