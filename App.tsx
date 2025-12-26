import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);

  const scrollToSection = (id: SectionId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500 selection:text-white">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <div id={SectionId.HOME}>
          <Hero scrollToSection={scrollToSection} />
        </div>
        
        <div id={SectionId.FEATURES}>
          <Features />
        </div>
        
        <div id={SectionId.PRODUCTS}>
          <Products />
        </div>
        
        <div id={SectionId.CONTACT}>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
