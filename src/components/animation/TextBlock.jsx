import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import TacticalButton from '../ui/TacticalButton';
import DetailList from '../ui/DetailList';
import PriceDisplay from '../ui/PriceDisplay';



// --- 5. LAYOUT COMPONENT: TextBlock ---
const TextBlock = ({ scrollY: propScrollY, content, startOffset, topPos, align = 'left', accentColor }) => {
  const { scrollY: windowScrollY } = useScroll();
  const scrollY = propScrollY || windowScrollY;
  const smoothScrollY = useSpring(scrollY, { stiffness: 50, damping: 15, mass: 1 });

  // --- TRIGGER LOGIC ---
  const triggerStart = startOffset + 450;
  const triggerEnd = triggerStart + 300;

  // Animations
  const headerStartX = align === 'left' ? -30 : 30;
  const headerOpacity = useTransform(smoothScrollY, [triggerStart, triggerEnd], [0, 1], { clamp: true });
  const headerX = useTransform(smoothScrollY, [triggerStart, triggerEnd], [headerStartX, 0], { clamp: true });

  const lineStartX = align === 'left' ? '-100%' : '100%';
  const lineX = useTransform(smoothScrollY, [triggerStart, triggerEnd], [lineStartX, '0%'], { clamp: true });

  const bodyOpacity = useTransform(smoothScrollY, [triggerStart + 50, triggerEnd + 50], [0, 1], { clamp: true });

  // Layout Classes
  const containerClasses = align === 'left'
    ? "fixed right-[5%] w-[45vw] text-left origin-right"
    : "fixed left-[5%] w-[45vw] text-right origin-left";

  const wrapperJustify = align === 'left' ? 'justify-end' : 'justify-start';
  const bodyContentDirection = align === 'left' ? "flex-row text-left" : "flex-row-reverse text-right";

  const accentColorClass = accentColor || "bg-white";
  const buttonBgClass = accentColor || "bg-neutral-700";

  return (
    <motion.div
      className={`pointer-events-none z-50 py-5 hidden md:block ${containerClasses}`}
      style={{ top: `${topPos}%`, y: '-50%' }}
    >
      {/* Header */}
      <div className={`mb-8 relative z-20 overflow-hidden px-1 flex flex-col ${align === 'left' ? 'items-start' : 'items-end'}`}>
        <motion.h2
          className="text-5xl font-bold text-white mb-4 tracking-tight font-sans"
          style={{ opacity: headerOpacity, x: headerX }}
        >
          {content.title}
        </motion.h2>
        <div className="w-full h-[1px] overflow-hidden relative">
          <motion.div
            className={`w-full h-full ${accentColorClass} absolute top-0 left-0`}
            style={{ x: lineX }}
          />
        </div>
      </div>

      {/* Body */}
      <motion.div
        className={`flex ${wrapperJustify}`}
        style={{ opacity: bodyOpacity }}
      >
        <div className={`flex ${bodyContentDirection} items-start gap-16 max-w-[90%]`}>
          <div className="flex flex-col justify-between h-full min-w-[180px]">
            <PriceDisplay price={content.price} tagline={content.tagline} />
            <div className="mt-12">
              <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1 font-bold">Estimated Duration</div>
              <div className="text-xl font-medium text-white font-sans">{content.delivery}</div>
            </div>
          </div>

          <div className="flex-1 min-w-[240px]">
            <DetailList details={content.details} accentColorClass={accentColorClass} align={align} />
            <div className="pointer-events-auto">
              <TacticalButton text="Get in Touch" accentColor={buttonBgClass} align={align} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TextBlock;

