import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-24 border-b border-white/5 bg-brand-black scroll-mt-28" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-4">Services</h2>
          <h3 className="text-4xl font-bold text-white">A Full-Stack Carbon Platform</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Origination */}
          <div className="md:col-span-2 bg-brand-gray border border-white/5 p-8 card-hover transition-all relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[150px] text-white">public</span>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded mb-4">
                <span className="material-symbols-outlined text-brand-green">explore</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 text-white">Project Origination</h4>
                <p className="text-gray-400">Land tenure diligence, ecological feasibility and technical project design. We find the signal in the noise.</p>
              </div>
            </div>
          </div>

          {/* MRV */}
          <div className="bg-brand-gray border border-white/5 p-8 card-hover transition-all relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded mb-4">
                <span className="material-symbols-outlined text-brand-green">analytics</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">MRV &amp; Integrity</h4>
                <p className="text-gray-400 text-sm">Baselines, continuous monitoring and verification coordination.</p>
              </div>
            </div>
          </div>

          {/* Capital */}
          <div className="bg-brand-gray border border-white/5 p-8 card-hover transition-all relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded mb-4">
                <span className="material-symbols-outlined text-brand-green">account_balance</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Capital Mobilization</h4>
                <p className="text-gray-400 text-sm">Feasibility finance, blended structures and forward offtake.</p>
              </div>
            </div>
          </div>

          {/* Community */}
          <div className="md:col-span-2 bg-brand-gray border border-white/5 p-8 card-hover transition-all relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-[150px] text-white">groups</span>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded mb-4">
                <span className="material-symbols-outlined text-brand-green">handshake</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2 text-white">Community &amp; FPIC</h4>
                <p className="text-gray-400">Consent processes, benefit-sharing structures and long-term governance alignment. We don't just consult; we partner.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;