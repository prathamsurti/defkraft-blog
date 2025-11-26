import { motion, useScroll, useSpring, useTransform } from "framer-motion";





const CircleAnimationMobile = ({ scrollY, animateRange, scrollRange, scrollOutput, imageSrc, wipeColor, borderColor, align = 'left' }) => {
  const smoothScrollY = useSpring(scrollY, { stiffness: 50, damping: 15, mass: 1 });
  const [animStart, animEnd] = animateRange;

  // Mobile Shift Logic (95px)
  const xTarget = align === 'left' ? -95 : 95; 
  
  const shrinkScale = useTransform(smoothScrollY, [animStart, animStart + 200], [1, 0.55], { clamp: true });
  const translateX = useTransform(smoothScrollY, [animStart, animStart + 300], [0, xTarget], { clamp: true });
  const colorLeft = useTransform(smoothScrollY, [animStart, animStart + 300], ['100%', '-150%'], { clamp: true });
  const colorOpacity = useTransform(smoothScrollY, [animStart, animStart + 100], [0, 1], { clamp: true });
  
  const topPosition = useTransform(smoothScrollY, scrollRange, scrollOutput, { clamp: true });
  const opacity = useTransform(smoothScrollY, [scrollRange[1] - 100, scrollRange[1]], [1, scrollOutput[1] === '-100%' ? 0 : 1]);

  return (
    <motion.div 
      className="absolute left-1/2 w-[160px] h-[160px] rounded-full overflow-hidden pointer-events-none z-10 md:hidden"
      style={{
        top: topPosition, 
        x: '-50%', y: '-50%', 
        scale: shrinkScale, opacity,
        translateX: useTransform(translateX, (v) => `${v}px`),
      }}
    >
      <motion.div className={`absolute top-1/2 w-full h-full rounded-full border-2 bg-neutral-900 ${borderColor}`} style={{ y: '-50%' }} />
      <motion.div 
        className="absolute top-1/2 rounded-full w-[500px] h-[500px] z-[11] bg-cover bg-center"
        style={{
          y: '-50%', left: colorLeft, opacity: colorOpacity,
          backgroundImage: `url(${imageSrc})`, backgroundColor: wipeColor, 
          boxShadow: `0 0 20px rgba(0,0,0,0.5)`, filter: 'contrast(110%) sepia(10%)'
        }}
      />
    </motion.div>
  );
};
export default CircleAnimationMobile
