import React from 'react';
import heroImage from '../assets/hero.png';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Aerial view of dense green forest" 
          className="w-full h-full object-cover opacity-60" 
          src={heroImage} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
        {/* Topographic pattern overlay */}
        <div className="absolute inset-0 topo-overlay opacity-30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-5xl">
          {/* Badge / Label - Simplified */}
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="h-px w-12 bg-brand-green"></div>
            <span className="text-brand-green font-mono text-xs uppercase tracking-[0.2em]">End-to-End Project Developer</span>
          </div>
          
          {/* Main Headline - Improved typography and spacing */}
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-10 animate-fade-in-up text-white" style={{ animationDelay: '0.1s' }}>
            Carbon Assets <br />
            <span className="text-brand-green font-bold">Built to Last</span>
          </h1>
          
          {/* Description Grid - Better scanning and hierarchy */}
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-16 mb-14 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <p className="text-xl text-gray-400 leading-relaxed">
                We originate, finance and steward a diversified portfolio of nature-based solutions and technology-enabled carbon removal projects.
              </p>
            </div>
            
            <div className="flex items-center">
               <div className="pl-6 border-l border-brand-green/30">
                  <p className="text-white text-lg font-medium leading-snug">
                    Building at the nexus of <span className="text-brand-green">Nature</span>, <span className="text-brand-green">Community</span> & <span className="text-brand-green">Capital</span>.
                  </p>
               </div>
            </div>
          </div>
          
          {/* Actions & Social Proof - Decoupled for clarity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a 
                className="group relative px-8 py-4 bg-white text-brand-black font-bold font-mono uppercase tracking-wider overflow-hidden hover:bg-brand-green transition-colors cursor-pointer" 
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
            >
              <span className="relative z-10 flex items-center gap-2">
                See what we build
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </a>
            
            {/* Live Stat Indicator */}
            <div className="flex items-center gap-3 py-2 px-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-mono font-bold">120k+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">tonnes originating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Reverted to bouncing center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce text-white pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Scroll</span>
        <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
      </div>
    </header>
  );
};

export default Hero;