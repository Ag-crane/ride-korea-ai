
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AIAssistant from '@/components/AIAssistant';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AIAssistant />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
