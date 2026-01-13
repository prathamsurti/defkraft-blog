import React, { useEffect, useState } from 'react';

const ScrollySection = () => {
  const [activeVisual, setActiveVisual] = useState(1);

  useEffect(() => {
    // Scrollytelling logic
    const steps = document.querySelectorAll('.training-step');

    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const step = entry.target.dataset.step;
          setActiveVisual(parseInt(step));
        }
      });
    }, { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" });

    steps.forEach(step => stepObserver.observe(step));

    return () => {
      stepObserver.disconnect();
    };
  }, []);

  return (
    <section className="theme-section py-32 bg-[#1a1a18] relative border-t border-white/5" data-theme="dark">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">

        {/* LEFT: SCROLLABLE TEXT */}
        <div className="w-full lg:w-1/2 space-y-[30vh]">

          <div className="mb-24 reveal">
            <span className="text-[#C5A059] font-mono text-xs tracking-[0.3em] uppercase block mb-4">Curriculum</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold uppercase text-[#Eaeaea] leading-none">Operational<br />Modules</h2>
          </div>

          {/* Step 1 */}
          <div className="training-step reveal group" data-step="1">
            <div className="h-px w-12 bg-white/20 mb-6 group-hover:w-24 group-hover:bg-[#C5A059] transition-all duration-500"></div>
            <h3 className="text-3xl font-display uppercase text-[#Eaeaea] mb-4">Institutional<br />Regiment</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 max-w-sm">
              Transforming student bodies into disciplined units via NCC-framework training. Punctuality, command, and excellence.
            </p>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">Details</a>
          </div>

          {/* Step 2 */}
          <div className="training-step reveal group" data-step="2">
            <div className="h-px w-12 bg-white/20 mb-6 group-hover:w-24 group-hover:bg-[#C5A059] transition-all duration-500"></div>
            <h3 className="text-3xl font-display uppercase text-[#Eaeaea] mb-4">Corporate<br />Battlefield</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 max-w-sm">
              Crisis leadership and team cohesion bootcamps. Forging executive strategy under pressure.
            </p>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">Details</a>
          </div>

          {/* Step 3 */}
          <div className="training-step reveal group" data-step="3">
            <div className="h-px w-12 bg-white/20 mb-6 group-hover:w-24 group-hover:bg-[#C5A059] transition-all duration-500"></div>
            <h3 className="text-3xl font-display uppercase text-[#Eaeaea] mb-4">Security<br />Spec-Ops</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 max-w-sm">
              Advanced threat assessment and intervention protocols for private security personnel.
            </p>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">Details</a>
          </div>

        </div>

        {/* RIGHT: STICKY VISUAL */}
        <div className="hidden lg:block w-1/2 h-[80vh] sticky top-20 flex items-center justify-center reveal delay-200">
          <div className="relative w-[450px] h-[550px] bg-[#232323] border border-white/5 overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C5A059] to-transparent"></div>
            <div className="absolute top-6 left-6 text-[10px] font-mono text-gray-600 uppercase tracking-widest">Simulation Feed // 04</div>

            {/* Visual 1 */}
            <div id="visual-1" className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${activeVisual === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <i className="fa-solid fa-graduation-cap text-6xl text-white/20 mb-8"></i>
              <div className="grid grid-cols-5 gap-3 w-32 h-32">
                {Array.from({ length: 25 }, (_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-[#C5A059] rounded-full transition-all duration-500"
                    style={{
                      transform: activeVisual === 1
                        ? 'translate(0, 0)'
                        : `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`
                    }}
                  />
                ))}
              </div>
              <span className="mt-8 font-mono text-xs text-[#C5A059] uppercase tracking-widest">Aligning Cadets</span>
            </div>

            {/* Visual 2 */}
            <div id="visual-2" className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${activeVisual === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <i className="fa-solid fa-chess-rook text-6xl text-white/20 mb-8"></i>
              <div className="w-full h-px bg-white/10 relative mx-12">
                <div className="absolute top-[-3px] left-0 w-2 h-2 bg-[#C5A059] rounded-full animate-ping"></div>
                <div className="absolute top-0 left-0 h-full w-2/3 bg-[#C5A059] transition-all duration-1000"></div>
              </div>
              <span className="mt-8 font-mono text-xs text-[#C5A059] uppercase tracking-widest">Executing Strategy</span>
            </div>

            {/* Visual 3 */}
            <div id="visual-3" className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${activeVisual === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative">
                <i className="fa-solid fa-shield-halved text-8xl text-white/10"></i>
                <i className="fa-solid fa-check absolute bottom-0 right-0 text-2xl text-[#A31621]"></i>
              </div>
              <span className="mt-8 font-mono text-xs text-[#C5A059] uppercase tracking-widest">Perimeter Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollySection;