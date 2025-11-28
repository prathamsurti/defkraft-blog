import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';


const CircleAnimation = ({ scrollY: propScrollY, startOffset, yPos, imageSrc, wipeColor, borderColor, align = 'left' }) => {
  const { scrollY: windowScrollY } = useScroll();
  const scrollY = propScrollY || windowScrollY;
  const smoothScrollY = useSpring(scrollY, { stiffness: 50, damping: 15, mass: 1 });

  const activePhaseLength = 900; 
  const shrinkDuration = 250;
  const moveDuration = 200;
  const wipeDuration = 200; 

  const shrinkEnd = shrinkDuration;               
  const moveStart = shrinkEnd;                    
  const moveEnd = moveStart + moveDuration;       
  const wipeStart = moveEnd;                      
  const wipeEnd = wipeStart + wipeDuration;       

  const localScrollY = useTransform(
    smoothScrollY, 
    [startOffset, startOffset + activePhaseLength], 
    [0, activePhaseLength], 
    { clamp: true }
  );

  const scale = useTransform(localScrollY, [0, shrinkEnd], [1, 0.7], { clamp: true });
  const opacity = useTransform(localScrollY, [0, shrinkEnd], [1, 0.7], { clamp: true });
  const xTarget = align === 'left' ? -25 : 25;
  const translateX = useTransform(localScrollY, [moveStart, moveEnd], [0, xTarget], { clamp: true });
  const colorLeft = useTransform(localScrollY, [wipeStart, wipeEnd], ['100%', '-150%'], { clamp: true });
  const colorOpacity = useTransform(localScrollY, [wipeStart, wipeStart + 100], [0, 1], { clamp: true });

  // Layout Classes
  const wrapperClass = "fixed left-1/2 w-[240.5px] h-[240.5px] rounded-full overflow-hidden pointer-events-none z-10 top-auto hidden md:block";

  return (
    <motion.div 
      className={wrapperClass}
      style={{
        top: `${yPos}%`,
        x: '-50%',
        y: '-50%',
        scale,
        opacity,
        translateX: useTransform(translateX, (v) => `${v}vw`),
      }}
    >
      <motion.div 
        className={`absolute top-1/2 w-full h-full rounded-full border-2 bg-neutral-900 ${borderColor}`}
        style={{ y: '-50%' }} 
      />
      
      <motion.div
        className="absolute top-1/2 rounded-full w-[800px] h-[800px] z-[11] bg-cover bg-center"
        style={{
          y: '-50%',
          left: colorLeft,
          opacity: colorOpacity,
          backgroundImage: `url(${imageSrc})`,
          backgroundColor: wipeColor, 
          boxShadow: `0 0 30px rgba(0,0,0,0.5)`,
          filter: 'contrast(110%) sepia(10%)'
        }}
      />
    </motion.div>
  );
};


export default CircleAnimation