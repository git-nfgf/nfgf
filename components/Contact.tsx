import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    const SECRET_KEY = import.meta.env.VITE_OUR_TOP_CIGARRETE;

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

    const handleSubmit = async () => {
        if (!email || !email.includes('@')) {
            setMessage('Please enter a valid email');
            return;
        }

        setIsSubmitting(true);
        setMessage('');

        try {
            // Google Apps Script requires 'no-cors' mode
            // Note: With 'no-cors', we can't read the response, but the request will succeed
            await fetch(SCRIPT_URL, {
                redirect: 'follow',
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({
                    email: email,
                    secret: SECRET_KEY,
                }),
            });

            // With Google Apps Script, if we get here, it likely succeeded
            setMessage('Thank you! We will be in touch shortly.');
            setEmail('');

        } catch (error) {
            console.error('Error:', error);
            setMessage('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-black relative pt-32 scroll-mt-28" id="contact">
            <div className="max-w-7xl mx-auto px-6">

                {/* Partners / Ecosystem Section */}
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="h-px w-8 bg-brand-green"></div>
                                <h2 className="text-sm font-mono text-brand-green uppercase tracking-widest">OUR ECOSYSTEM</h2>
                            </div>
                            <h3 className="text-4xl font-bold text-white max-w-xl">
                                Built for the heavy lifters of the climate transition.
                            </h3>
                        </div>
                        <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                            We structure partnerships that align long-term incentives across the value chain.
                        </p>
                    </div>

                    {/* Grid Layout for Partners */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                        {/* Corporates */}
                        <div className="group border-r border-b border-white/10 p-8 hover:bg-white/5 transition-all duration-300">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-3xl text-brand-green">domain</span>
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3">Corporates</h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Securing high-integrity removal credits for long-term Net Zero pathways.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span>Offtake Agreements</span>
                                <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                            </div>
                        </div>

                        {/* Institutional Investors */}
                        <div className="group border-r border-b border-white/10 p-8 hover:bg-white/5 transition-all duration-300">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-3xl text-brand-green">account_balance</span>
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3">Investors</h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Deploying patient capital into bankable nature-based real assets.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span>Capital Structuring</span>
                                <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                            </div>
                        </div>

                        {/* Governments */}
                        <div className="group border-r border-b border-white/10 p-8 hover:bg-white/5 transition-all duration-300">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-3xl text-brand-green">policy</span>
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3">Governments</h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Meeting NDCs and operationalizing Article 6 through robust project design.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span>Policy Alignment</span>
                                <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                            </div>
                        </div>

                        {/* Climate Funds */}
                        <div className="group border-r border-b border-white/10 p-8 hover:bg-white/5 transition-all duration-300">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-3xl text-brand-green">spa</span>
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3">Climate Funds</h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Catalytic funding for high-impact, community-centric restoration.
                            </p>
                            <div className="flex items-center gap-2 text-xs font-mono text-brand-green uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span>Impact Finance</span>
                                <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-brand-gray border border-white/5 p-12 lg:p-24 relative overflow-hidden mb-24">
                    <div className="absolute inset-0 tech-grid opacity-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/5 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                        <span className="material-symbols-outlined text-brand-green text-5xl mb-8">mail</span>
                        <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                            Let's build together
                        </h3>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                            Capital, offtake or project partnerships. Let's talk.
                        </p>

                        <div className="w-full max-w-lg flex flex-col sm:flex-row gap-0">
                            <input
                                className="flex-grow bg-black/50 border border-white/10 border-r-0 sm:border-r-0 p-5 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green placeholder-gray-600 transition-all"
                                placeholder="your@email.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                                disabled={isSubmitting}
                            />
                            <button
                                className="bg-white text-black font-bold font-mono uppercase tracking-widest px-8 py-5 hover:bg-brand-green transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Get in Touch'}
                            </button>
                        </div>

                        {message && (
                            <p className={`mt-6 text-sm font-mono ${message.includes('Thank') ? 'text-brand-green' : 'text-red-500'}`}>
                                {message}
                            </p>
                        )}

                        <p className="mt-6 text-xs text-gray-600 font-mono">
                            We respect your privacy. No spam, ever.
                        </p>
                    </div>
                </div>

                <footer className="border-t border-white/10 py-16">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="font-mono font-bold text-xl tracking-tighter text-brand-green">NFGF</span>
                                <span className="font-mono font-bold text-xl tracking-tighter text-white">CARBON ASSETS</span>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-xs">Builders of Lasting Carbon Assets.</p>
                            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-500 uppercase tracking-wider">
                                <span className="flex items-center gap-1"><span className="w-1 h-1 bg-brand-green rounded-full"></span>Kohima</span>
                                <span className="flex items-center gap-1"><span className="w-1 h-1 bg-brand-green rounded-full"></span>Noida</span>
                                <span className="flex items-center gap-1"><span className="w-1 h-1 bg-brand-green rounded-full"></span>Panaji</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">EXPLORE</h4>
                            <div className="flex flex-col gap-4 text-gray-400 text-sm">
                                <a
                                    href="#projects"
                                    className="hover:text-brand-green transition-colors cursor-pointer"
                                    onClick={(e) => scrollToSection(e, 'projects')}
                                >Projects</a>
                                <a
                                    href="#platform"
                                    className="hover:text-brand-green transition-colors cursor-pointer"
                                    onClick={(e) => scrollToSection(e, 'platform')}
                                >Process</a>
                                <a
                                    href="#services"
                                    className="hover:text-brand-green transition-colors cursor-pointer"
                                    onClick={(e) => scrollToSection(e, 'services')}
                                >Services</a>
                                <a
                                    href="#impact"
                                    className="hover:text-brand-green transition-colors cursor-pointer"
                                    onClick={(e) => scrollToSection(e, 'impact')}
                                >Impact</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">LEGAL</h4>
                            <div className="flex flex-col gap-4 text-gray-400 text-sm">
                                <a href="#" onClick={e => e.preventDefault()} className="hover:text-brand-green transition-colors cursor-not-allowed opacity-50">Privacy Policy</a>
                                <a href="#" onClick={e => e.preventDefault()} className="hover:text-brand-green transition-colors cursor-not-allowed opacity-50">Terms of Service</a>
                                <a href="#" onClick={e => e.preventDefault()} className="hover:text-brand-green transition-colors cursor-not-allowed opacity-50">Disclosures</a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-600">
                        <p>© 2026 NFGF Carbon Assets. All rights reserved.</p>
                        <button className="flex items-center gap-2 hover:text-white transition-colors group">
                            <span className="material-symbols-outlined text-sm group-hover:text-brand-green transition-colors">download</span>
                            EXPORT CORPORATE DECK
                        </button>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;