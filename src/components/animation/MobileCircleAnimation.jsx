import React from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';

const MobileCircleAnimation = ({ scrollY, animateRange, scrollRange, scrollOutput, imageSrc, wipeColor, borderColor, align = 'left' }) => {
  // Smooth out the raw scroll value
  const smoothScrollY = useSpring(scrollY, { stiffness: 50, damping: 15, mass: 1 });
  const [animStart, animEnd] = animateRange;

  const xTarget = align === 'left' ? -95 : 95; 
  
  // Transform scroll position into animation values
  const shrinkScale = useTransform(smoothScrollY, [animStart, animStart + 200], [1, 0.55], { clamp: true });
  const translateX = useTransform(smoothScrollY, [animStart, animStart + 300], [0, xTarget], { clamp: true });
  
  // The "Wipe" effect (color overlay moving out)
  const colorLeft = useTransform(smoothScrollY, [animStart, animStart + 300], ['100%', '-150%'], { clamp: true });
  const colorOpacity = useTransform(smoothScrollY, [animStart, animStart + 100], [0, 1], { clamp: true });
  
  // Vertical Movement based on page scroll
  const topPosition = useTransform(smoothScrollY, scrollRange, scrollOutput, { clamp: true });
  const opacity = useTransform(smoothScrollY, [scrollRange[1] - 100, scrollRange[1]], [1, scrollOutput[1] === '-100%' ? 0 : 1]);

  return (
    <motion.div 
      className="absolute left-1/2 w-[160px] h-[160px] rounded-full overflow-hidden pointer-events-none z-10 block"
      style={{
        top: topPosition, 
        x: '-50%', y: '-50%', 
        scale: shrinkScale, opacity,
        translateX: useTransform(translateX, (v) => `${v}px`),
      }}
    >
      <motion.div className={`absolute top-1/2 w-full h-full rounded-full border-2 bg-neutral-900 ${borderColor}`} style={{ y: '-50%' }} />
      <motion.div className="absolute top-1/2 rounded-full w-[500px] h-[500px] z-[11] bg-cover bg-center"
        style={{
          y: '-50%', left: colorLeft, opacity: colorOpacity,
          backgroundImage: `url(${imageSrc})`, backgroundColor: wipeColor, 
          boxShadow: `0 0 20px rgba(0,0,0,0.5)`, filter: 'contrast(110%) sepia(10%)'
        }}
      />
    </motion.div>
  );
};


export default MobileCircleAnimation;