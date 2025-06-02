// src/components/pages/HomePage.jsx
import React from 'react';
import Header from '../common/Header';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import DashboardPreview from '../sections/DashboardPreview';
import ThreatStats from '../sections/ThreatStats';
import Solutions from '../sections/Solutions';
import CTA from '../sections/CTA';
import Footer from '../common/Footer';
import BackgroundEffects from '../common/BackgroundEffects';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <ThreatStats />
        <Features />
        <Solutions />
        <DashboardPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;