import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate position with 100px offset for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-brand-black/90 backdrop-blur' : 'bg-transparent'}`} id="navbar">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-brand-green/20 border border-brand-green flex items-center justify-center">
            <span className="material-symbols-outlined text-brand-green text-sm">forest</span>
          </div>
          <span className="font-mono font-bold text-xl tracking-tighter text-white">NFGF</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-wide text-gray-400">
          <a 
            className="hover:text-brand-green transition-colors cursor-pointer" 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
          >
            PROJECTS
          </a>
          <a 
            className="hover:text-brand-green transition-colors cursor-pointer" 
            href="#platform"
            onClick={(e) => scrollToSection(e, 'platform')}
          >
            PLATFORM
          </a>
          <a 
            className="hover:text-brand-green transition-colors cursor-pointer" 
            href="#impact"
            onClick={(e) => scrollToSection(e, 'impact')}
          >
            IMPACT
          </a>
        </div>
        
        <a 
            className="hidden md:block px-6 py-2 border border-white/20 hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5 transition-all font-mono text-sm uppercase tracking-wider text-white cursor-pointer" 
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
        >
            Partner With Us
        </a>
        
        <button className="md:hidden text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;