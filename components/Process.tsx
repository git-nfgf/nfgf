import React, { useState } from 'react';
import { STEPS } from '../constants';

const Process: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const activeStep = STEPS[currentStep];

  return (
    <section className="py-24 bg-black relative overflow-hidden scroll-mt-28" id="platform">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-gray/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-brand-green uppercase tracking-widest mb-4">How It Works</h2>
          <h3 className="text-4xl font-bold mb-6 text-white">From Analysis to Action</h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Tabs/Steps */}
          <div className="lg:col-span-4 flex flex-col gap-2" id="process-tabs">
            {STEPS.map((step, index) => (
              <div 
                key={step.id}
                onClick={() => setCurrentStep(index)} 
                className={`cursor-pointer p-6 border-l-2 transition-all duration-300 group ${index === currentStep ? 'border-brand-green bg-white/5' : 'border-white/10 hover:border-white/30'}`}
              >
                <span className="font-mono text-xs text-gray-500 uppercase block mb-2">0{step.id}</span>
                <div className="flex items-center justify-between">
                  <h4 className={`text-xl font-bold ${index === currentStep ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{step.title}</h4>
                  <span className={`material-symbols-outlined ${index === currentStep ? 'text-brand-green' : 'text-gray-600 group-hover:text-gray-300'}`}>{step.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Display Area */}
          <div className="lg:col-span-8 relative min-h-[500px] border border-white/10 bg-brand-gray/20 backdrop-blur rounded-xl overflow-hidden p-8 flex flex-col">
            <div className="h-full flex flex-col justify-between relative z-10 transition-all duration-300 animate-fade-in-up" key={activeStep.id}>
              <div className="mb-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-green/30 bg-brand-green/10 rounded-full mb-6">
                  <span className="text-brand-green font-mono text-xs uppercase tracking-widest">{activeStep.title}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">{activeStep.subtitle}</h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">{activeStep.desc}</p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4 text-sm font-mono text-gray-500">
                <span className="material-symbols-outlined">sync</span>
                Step {activeStep.id} of {STEPS.length} in the Lifecycle
              </div>
            </div>
            
            {/* Background Illustration */}
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src={activeStep.img} 
                className="w-full h-full object-cover transition-transform duration-1000 scale-105" 
                alt={activeStep.title} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;