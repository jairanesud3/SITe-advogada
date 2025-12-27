import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackgroundOrbs from './components/BackgroundOrbs';

// AOS Declaration
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS with "Luxury" settings
    if (window.AOS) {
      window.AOS.init({
        duration: 1000, 
        once: true,
        easing: 'ease-out-quart',
        mirror: false,
        anchorPlacement: 'top-bottom',
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-matte text-gray-100">
      {/* Fundo Animado Global */}
      <BackgroundOrbs />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Features />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default App;