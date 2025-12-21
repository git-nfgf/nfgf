import React, { useState } from 'react';

type ProjectType = 'biochar' | 'mangrove';

const Impact: React.FC = () => {
  const [investment, setInvestment] = useState<number>(250000);
  const [projectType, setProjectType] = useState<ProjectType>('biochar');

  const MIN_INVESTMENT = 10000;
  const MAX_INVESTMENT = 1000000;

  // Logic factors
  // Biochar: 1666 tCO2 for 250k => 0.006664 t/$. Revenue 12500 for 250k => 0.05.
  // Mangrove: 6250 tCO2 for 250k => 0.025 t/$. Revenue 75000 for 250k => 0.3.
  
  const factors = {
    biochar: {
      co2: 0.006664,
      rev: 0.05,
      disclaimer: "Based on revenue share models for industrial feedstock sourcing."
    },
    mangrove: {
      co2: 0.025,
      rev: 0.3,
      disclaimer: "Based on revenue share models for community forestry labor."
    }
  };

  const currentFactor = factors[projectType];
  const carbonRemoval = Math.round(investment * currentFactor.co2);
  const revenue = Math.round(investment * currentFactor.rev);

  // Calculate percentage for slider background fill
  const percentage = ((investment - MIN_INVESTMENT) / (MAX_INVESTMENT - MIN_INVESTMENT)) * 100;

  return (
    <section className="py-24 bg-black border-b border-white/5 scroll-mt-28" id="impact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Controls */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-brand-green"></div>
                <h2 className="text-sm font-mono text-brand-green uppercase tracking-widest">IMPACT CALCULATOR</h2>
            </div>
            <h3 className="text-5xl font-bold mb-6 text-white">
              See Your Impact
            </h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
              Estimate the carbon removal potential and community benefit of your capital deployment. Conservative estimates based on current active projects.
            </p>
            
            <div className="mb-8">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">PROJECT TYPE</div>
                <div className="flex gap-4">
                    <button 
                        onClick={() => setProjectType('biochar')}
                        className={`px-6 py-3 border transition-all duration-300 font-mono text-sm ${projectType === 'biochar' ? 'border-brand-green text-white bg-brand-green/5' : 'border-white/20 text-gray-400 hover:border-white/40'}`}
                    >
                        Biochar (Tech)
                    </button>
                    <button 
                         onClick={() => setProjectType('mangrove')}
                         className={`px-6 py-3 border transition-all duration-300 font-mono text-sm ${projectType === 'mangrove' ? 'border-brand-green text-white bg-brand-green/5' : 'border-white/20 text-gray-400 hover:border-white/40'}`}
                    >
                        Mangrove (Nature)
                    </button>
                </div>
            </div>

            <div>
                <div className="flex justify-between items-end mb-3">
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">INVESTMENT AMOUNT</div>
                    <div className="text-3xl font-bold text-brand-green font-mono">${investment.toLocaleString()}</div>
                </div>
                <input 
                    type="range" 
                    min={MIN_INVESTMENT} 
                    max={MAX_INVESTMENT} 
                    step="10000"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-brand-green"
                    style={{
                        background: `linear-gradient(to right, #00ff94 0%, #00ff94 ${percentage}%, rgba(255, 255, 255, 0.1) ${percentage}%, rgba(255, 255, 255, 0.1) 100%)`
                    }}
                />
                <div className="flex justify-between mt-2 text-xs font-mono text-gray-600">
                    <span>$10k</span>
                    <span>$1M</span>
                </div>
            </div>
          </div>
          
          {/* Result Card */}
          <div className="bg-brand-gray/50 border border-white/5 p-10 md:p-14 relative overflow-hidden h-full min-h-[500px] flex flex-col justify-center">
             {/* Watermark */}
             <div className="absolute top-0 right-0 font-bold text-[150px] leading-none text-white opacity-[0.02] select-none pointer-events-none">
                CO2
             </div>

             <div className="relative z-10 flex flex-col gap-12">
                <div>
                    <div className="font-mono text-gray-400 mb-3 text-sm uppercase tracking-wider">Estimated Carbon Removal</div>
                    <div className="flex items-baseline gap-3">
                        <span className="text-6xl md:text-7xl font-bold text-white tracking-tight">{carbonRemoval.toLocaleString()}</span>
                        <span className="text-brand-green font-mono text-2xl">tCO2e</span>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10">
                    <div className="font-mono text-gray-400 mb-3 text-sm uppercase tracking-wider">Direct Community Revenue</div>
                    <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">${revenue.toLocaleString()}</span>
                        <span className="text-gray-500 font-mono text-lg">USD</span>
                    </div>
                    <p className="text-xs text-gray-500 max-w-sm leading-relaxed border-l-2 border-white/10 pl-3">
                        *{currentFactor.disclaimer}
                    </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;