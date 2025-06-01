import React from 'react';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import DashboardPreview from './components/sections/DashboardPreview';
import ThreatStats from './components/sections/ThreatStats';
import Solutions from './components/sections/Solutions';
import CTA from './components/sections/CTA';
import Footer from './components/common/Footer';
import BackgroundEffects from './components/common/BackgroundEffects';

function App() {
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
}

export default App;
