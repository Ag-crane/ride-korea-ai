
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AIAssistant from '@/components/AIAssistant';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import SurveyModal from '@/components/SurveyModal';
import { useSurveyModal } from '@/contexts/SurveyModalContext';

const Index = () => {
  const { isSurveyOpen, closeSurvey } = useSurveyModal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AIAssistant />
      <MapSection />
      <Footer />
      <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} />
    </div>
  );
};

export default Index;
