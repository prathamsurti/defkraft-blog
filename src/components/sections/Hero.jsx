import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: "500+", label: "Trained Soldiers" },
  { number: "98%", label: "Success Rate" },
  { number: "2023", label: "Established" },
];

const services = [
  "Military Fitness",
  "Tactical Training",
  "Leadership Development",
  "Corporate Programs",
];

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Reveal animation observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Background Grain */}
      <div className="bg-grain fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.05] pointer-events-none z-50"></div>

      {/* Hero Section */}
      <section ref={ref} className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0a0a0a]" data-theme="dark">
        {/* Grid Lines */}
        <div className="grid-line grid-left absolute top-0 bottom-0 w-px bg-white/5 pointer-events-none"></div>
        <div className="grid-line grid-right absolute top-0 bottom-0 w-px bg-white/5 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/5 hidden lg:block"></div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/defkraft-blog/defkraft-background.png)' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-24 pt-32 pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-12">

            {/* Left: Main Content */}
            <div className="lg:w-2/3">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-[#606C38] rounded-full animate-pulse"></span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#C5A059]">Vadodara HQ // Active</span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
                className="hero-title font-display text-white leading-none"
              >
                <span className="block">Every Citizen</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#606C38] to-[#C5A059]">A Soldier</span>
              </motion.h1>

              {/* Description & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 md:mt-12 flex flex-col md:flex-row gap-8 items-start"
              >
                <p className="text-sm md:text-base font-light text-gray-400 max-w-md leading-relaxed border-l-2 border-[#606C38]/50 pl-6">
                  We don't just train; we transform. The premier military training confederation bridging the gap between civilian potential and command excellence.
                </p>

                <button className="btn-tactical shrink-0">
                  Start Mission
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <span className="stat-number text-3xl md:text-4xl">{stat.number}</span>
                    <span className="stat-label block mt-1">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Rotating Logo Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:w-1/3 flex justify-start lg:justify-end"
            >
              <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                {/* Rotating Text Ring */}
                <div className="absolute inset-0 border border-white/10 rounded-full seal-rotate"></div>
                <svg className="absolute inset-0 w-full h-full seal-rotate" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text fill="#C5A059" fontSize="10" fontFamily="monospace" letterSpacing="2px">
                    <textPath href="#circlePath" startOffset="0%">
                      EST. 2023 • DEFKRAFT TRAINING • GUJARAT •
                    </textPath>
                  </text>
                </svg>

                {/* Static Shield Logo */}
                <img
                  src="https://res.cloudinary.com/dhqhicb6w/image/upload/v1766132828/bgjf4nc1gwyiuxtzyoqc.png"
                  alt="DefKraft Logo"
                  className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-[#141414]/80 backdrop-blur-sm border-t border-white/5 py-4 overflow-hidden"
        >
          <div className="marquee">
            <div className="marquee-content">
              {[...services, ...services, ...services, ...services].map((service, index) => (
                <span key={index} className="flex items-center gap-4 text-white/40 font-mono text-xs uppercase tracking-widest">
                  {service}
                  <span className="w-1 h-1 bg-[#606C38] rounded-full"></span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-20 left-6 md:left-24 flex items-center gap-4"
        >
          <i className="fa-solid fa-arrow-down animate-bounce text-[#C5A059]"></i>
          <span className="text-[9px] font-mono uppercase tracking-widest text-white">Explore</span>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;