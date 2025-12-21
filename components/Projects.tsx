import React, { useRef } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-brand-dark border-b border-white/5 scroll-mt-28" id="projects">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-4">What We Build</h2>
          <h3 className="text-4xl font-bold text-white mb-2">High-Integrity Projects</h3>
          <p className="text-gray-400 max-w-2xl">Strictly vetted for additionality, permanence and leakage. We only build what matters.</p>
        </div>
        <div className="flex gap-2">
          <button
            className="w-12 h-12 border border-white/10 hover:bg-white/5 flex items-center justify-center transition-colors text-white"
            onClick={() => scroll(-400)}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            className="w-12 h-12 border border-white/10 hover:bg-white/5 flex items-center justify-center transition-colors text-white"
            onClick={() => scroll(400)}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 max-w-[100vw] hide-scrollbar"
        id="project-scroller"
        ref={scrollRef}
      >
        {PROJECTS.map((project) => (
          <div key={project.id} className="min-w-[85vw] md:min-w-[400px] snap-center group relative bg-brand-gray border border-white/5 hover:border-brand-green/30 transition-all duration-300 flex flex-col h-[500px]">
            <div className="h-1/2 relative overflow-hidden">
              {project.status === 'Feasibility' ? (
                <div className="w-full h-full bg-black flex items-center justify-center relative">
                  <img
                    alt={project.name}
                    className="w-full h-full object-cover opacity-60"
                    src={project.img}
                  />
                </div>
              ) : (
                <img
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  src={project.img}
                />
              )}

              <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur px-3 py-1 text-xs font-mono border border-brand-green/20 text-brand-green">
                {project.type}
              </div>
            </div>

            <div className={`p-8 flex flex-col ${project.status === 'Feasibility' ? 'justify-center text-center' : 'justify-between'} flex-grow`}>
              {project.status === 'Feasibility' ? (
                <>
                  <h4 className="text-2xl font-bold mb-2 text-white">{project.name}</h4>
                  <p className="text-gray-400 text-sm mb-6">We have 5+ projects currently in feasibility or structuring phases across 4 states.</p>
                  <button className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-xs uppercase tracking-widest text-white mx-auto">
                    Request Access
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{project.name}</h4>
                      <span className="material-symbols-outlined text-brand-green">
                        {project.type.includes('Biochar') ? 'factory' : project.type.includes('Blue') ? 'water_drop' : 'park'}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">{project.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-500">
                      <div>
                        <div className="text-white text-lg">{project.permanence}</div>
                        PERMANENCE
                      </div>
                      <div>
                        <div className="text-white text-lg">{project.removal_annual}</div>
                        {project.type.includes('Blue') || project.type.includes('Bamboo') || project.type.includes('Reforestation') ? 'AREA RESTORED' : 'ANNUAL REMOVAL'}
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-brand-green text-sm font-medium">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    {project.location}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;