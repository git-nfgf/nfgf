import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Process from './components/Process';
import Services from './components/Services';
import Impact from './components/Impact';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black text-brand-white">
      <Navbar />
      <Hero />
      <Projects />
      <Process />
      <Services />
      <Impact />
      <Contact />
    </div>
  );
};

export default App;