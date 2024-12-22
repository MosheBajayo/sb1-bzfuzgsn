import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Solutions from './components/Solutions/Solutions';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Testimonials from './components/Testimonials/Testimonials';
import Partners from './components/Partners/Partners';
import Pricing from './components/Pricing';
import CTA from './components/CTA/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Solutions />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <Pricing />
      <CTA />
    </div>
  );
}

export default App;