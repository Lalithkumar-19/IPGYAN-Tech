
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import About from '@/components/About';


const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative bg-white overflow-x-hidden">
      <Hero />
      <About/>
      <Services />
      <Contact/>
    </div>
  );
};

export default Index;
