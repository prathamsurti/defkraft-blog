import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import TacticalButton from '../ui/TacticalButton';
import DetailList from '../ui/DetailList';
import PriceDisplay from '../ui/PriceDisplay';



// --- 5. LAYOUT COMPONENT: TextBlock ---
const TextBlock = ({ content, startOffset, topPos, align = 'left', accentColor, accentText, MobileCircle }) => {
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 50, damping: 15, mass: 1 });
  
  // --- MOBILE DETECTION ---
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- TRIGGER LOGIC (Desktop Only) ---
  const triggerStart = startOffset + 450;
  const triggerEnd = triggerStart + 350; 

  // Animations
  const headerStartX = align === 'left' ? -30 : 30;
  const headerOpacity = useTransform(smoothScrollY, [triggerStart, triggerEnd], [0, 1], { clamp: true });
  const headerX = useTransform(smoothScrollY, [triggerStart, triggerEnd], [headerStartX, 0], { clamp: true });
  
  const lineStartX = align === 'left' ? '-100%' : '100%';
  const lineX = useTransform(smoothScrollY, [triggerStart, triggerEnd], [lineStartX, '0%'], { clamp: true });

  const bodyOpacity = useTransform(smoothScrollY, [triggerStart + 50, triggerEnd], [0, 1], { clamp: true });
  const bodyY = useTransform(smoothScrollY, [triggerStart + 50, triggerEnd], [20, 0], { clamp: true });

  // Layout Classes
  const containerClasses = align === 'left' 
    ? "relative w-full px-4 top-auto md:fixed md:left-auto md:right-[5%] md:w-[60vw] md:text-left md:origin-right md:top-[var(--y-pos)]" 
    : "relative w-full px-4 top-auto md:fixed md:left-[5%] md:right-auto md:w-[60vw] md:text-right md:origin-left md:top-[var(--y-pos)]";

  const wrapperJustify = align === 'left' ? 'justify-start md:justify-end' : 'justify-start';
  const bodyContentDirection = align === 'left' 
    ? "flex-col md:flex-row text-left" 
    : "flex-col md:flex-row-reverse md:text-right text-left"; 

  const accentColorClass = accentColor || "bg-white";
  const buttonBgClass = accentColor || "bg-neutral-700";

  return (
    <motion.div
      className={`pointer-events-auto md:pointer-events-none z-30 py-5 ${containerClasses}`}
      style={{ 
        '--y-pos': `${topPos}%`,
        y: isMobile ? '0%' : '-50%' 
      }}
      // Mobile Entry Animation for the whole block
      {...(isMobile ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10%" },
        transition: { duration: 0.6, ease: "easeOut" }
      } : {})}
    >
      {/* Header */}
      <div className="mb-6 md:mb-8 relative z-20 overflow-hidden px-1">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight font-sans"
          style={{ 
            // FORCE VISIBILITY ON MOBILE (Controlled by parent animation now)
            opacity: isMobile ? 1 : headerOpacity, 
            x: isMobile ? 0 : headerX 
          }}
        >
          {content.title}
        </motion.h2>
        <div className="w-full h-[1px] overflow-hidden relative">
           <motion.div 
             className={`w-full h-full ${accentColorClass} absolute top-0 left-0`}
             style={{ 
                // FORCE LINE FULL WIDTH ON MOBILE
                x: isMobile ? '0%' : lineX 
             }}
           />
        </div>
      </div>

      {/* Body */}
      <motion.div 
        className={`flex ${wrapperJustify}`}
        style={{ 
            opacity: isMobile ? 1 : bodyOpacity, 
            y: isMobile ? 0 : bodyY 
        }}
      >
        <div className={`flex ${bodyContentDirection} items-start gap-8 md:gap-16 max-w-full md:max-w-[90%]`}>
          
          {/* NEW MOBILE LAYOUT: Circle Left + Price Right */}
          <div className="flex flex-row items-center gap-6 md:flex-col md:justify-between h-auto md:h-full min-w-[180px] w-full md:w-auto">
            <div className="block md:hidden">
              {MobileCircle}
            </div>
            <div>
              <PriceDisplay price={content.price} tagline={content.tagline} />
              <div className="mt-2 md:mt-12">
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1 font-bold hidden md:block">
                  Estimated Duration
                </div>
                <div className="text-sm md:text-xl font-medium text-white font-sans hidden md:block">{content.delivery}</div>
              </div>
            </div>
          </div>

          {/* Mobile Delivery Info */}
          <div className="w-full md:hidden flex justify-between items-center border-b border-white/10 pb-4 mb-2">
             <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Estimated Duration</div>
             <div className="text-sm font-medium text-white font-sans">{content.delivery}</div>
          </div>

          {/* Details & Button */}
          <div className="flex-1 min-w-full md:min-w-[240px]">
            <DetailList details={content.details} accentColorClass={accentColorClass} align={align} />
            <TacticalButton text="Get in Touch" accentColor={buttonBgClass} align={align} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- 6. SECTIONAL COMPONENT ---
const PricingSection = ({ content, theme, config }) => {
  return (
    <div className="relative w-full md:fixed md:inset-0 md:z-10 md:block pointer-events-none flex flex-col justify-center min-h-screen md:min-h-0 px-4 md:px-0">
      
      {/* DESKTOP CIRCLE */}
      <CircleAnimation 
        startOffset={config.startOffset} 
        yPos={config.yPos} 
        align={config.align}
        imageSrc={theme.imageSrc}
        wipeColor={theme.wipeColor} 
        borderColor={theme.borderColor}
        isMobileStatic={false} 
      />

      {/* TEXT BLOCK */}
      <TextBlock 
        content={content} 
        startOffset={config.startOffset} 
        topPos={config.yPos} 
        align={config.align}
        accentColor={theme.accentColor}
        accentText={theme.accentText}
        MobileCircle={
          <CircleAnimation 
            startOffset={config.startOffset} 
            yPos={config.yPos} 
            imageSrc={theme.imageSrc}
            wipeColor={theme.wipeColor} 
            borderColor={theme.borderColor}
            isMobileStatic={true} 
          />
        }
      />
    </div>
  );
};

export default TextBlock;

