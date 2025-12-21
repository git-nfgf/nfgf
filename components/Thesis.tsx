import React from 'react';

const Thesis: React.FC = () => {
  return (
    <section className="py-24 md:py-32 border-b border-white/5 bg-brand-black relative" id="thesis">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          
          {/* Problem Column */}
          <div>
            <h2 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-6">The Problem</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white">
              Carbon markets have a <span className="text-red-400">trust deficit.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Not because of demand. Not because of capital. But because most projects aren't built to institutional standards.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-4 text-gray-300">
                <span className="material-symbols-outlined text-red-400">close</span>
                Fragmented developers
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <span className="material-symbols-outlined text-red-400">close</span>
                Short-term incentives
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <span className="material-symbols-outlined text-red-400">close</span>
                Weak accountability
              </li>
            </ul>
            <p className="font-mono text-sm text-gray-500 border-l-2 border-red-400/20 pl-4">
              "That model doesn't scale."
            </p>
          </div>

          {/* Solution Column (Card) */}
          <div className="bg-brand-gray/30 p-8 md:p-12 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl text-white">engineering</span>
            </div>
            
            <h2 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-6">Our Thesis</h2>
            <h3 className="text-3xl font-bold leading-tight mb-6 text-white">
              Carbon needs builders,<br />not brokers.
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              NFGF operates as a single, accountable platform — combining project development, capital structuring, community alignment, and long-term stewardship.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs tracking-wider">
              <div className="p-4 bg-black/40 border border-white/10">
                <div className="text-brand-green mb-2">01</div>
                INTEGRITY BY DESIGN
              </div>
              <div className="p-4 bg-black/40 border border-white/10">
                <div className="text-brand-green mb-2">02</div>
                COMMUNITY PARTNERS
              </div>
              <div className="p-4 bg-black/40 border border-white/10">
                <div className="text-brand-green mb-2">03</div>
                MARKET DISCIPLINE
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-xl font-medium text-white">"If it can't survive scrutiny, <span className="text-brand-green">we don't ship it.</span>"</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Thesis;