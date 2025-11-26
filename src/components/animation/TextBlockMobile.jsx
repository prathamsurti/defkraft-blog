import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import PriceDisplay from "../ui/PriceDisplay";
import DetailList from "../ui/DetailList";
import TacticalButton from "../ui/TacticalButton";


const TextBlockMobile = ({ scrollY, content, animateRange, scrollRange, scrollOutput, align = 'left' }) => {
  const smoothScrollY = useSpring(scrollY, { stiffness: 50, damping: 15, mass: 1 });
  const [animStart, animEnd] = animateRange;

  const headerOpacity = useTransform(smoothScrollY, [animStart, animStart + 200], [0, 1], { clamp: true });
  const bodyOpacity = useTransform(smoothScrollY, [animStart + 50, animStart + 250], [0, 1], { clamp: true });
  const topPosition = useTransform(smoothScrollY, scrollRange, scrollOutput, { clamp: true });
  const containerOpacity = useTransform(smoothScrollY, [scrollRange[1] - 100, scrollRange[1]], [1, scrollOutput[1] === '-100%' ? 0 : 1]);

  // Mobile Shift Logic
  const priceXVal = align === 'left' ? 85 : -85; 
  const priceY = useTransform(smoothScrollY, [animStart + 150, animStart + 350], [0, -115], { clamp: true });
  const priceX = useTransform(smoothScrollY, [animStart + 150, animStart + 350], ["0px", `${priceXVal}px`], { clamp: true });
  const detailsY = useTransform(smoothScrollY, [animStart + 150, animStart + 350], [20, -70], { clamp: true });

  const accentColorClass = content.accentColor || "bg-white";
  const buttonBgClass = content.accentColor || "bg-neutral-700";

  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 w-[85%] text-center pointer-events-none z-30 h-0 overflow-visible flex flex-col items-center md:hidden"
      style={{ top: topPosition, opacity: containerOpacity, translateX: '-50%' }} 
    >
      <div className="absolute bottom-0 mb-[95px] w-full z-20 overflow-hidden px-[2px] flex flex-col items-center">
        <motion.h2 className="text-3xl font-bold text-white mb-3 tracking-tight font-sans" style={{ opacity: headerOpacity }}>
          {content.title}
        </motion.h2>
        <div className="w-full h-[1px] overflow-hidden relative">
           <motion.div className={`w-full h-full ${accentColorClass} absolute top-0 left-0`} style={{ x: 0 }} />
        </div>
      </div>

      <motion.div className="absolute top-0 mt-[95px] w-full flex flex-col items-center" style={{ opacity: bodyOpacity }}>
        <div className="flex flex-col gap-2 w-full relative">
          <motion.div className="flex flex-col items-center z-20 shrink-0" style={{ y: priceY, x: priceX }}>
            <PriceDisplay price={content.price} tagline={content.tagline} />
          </motion.div>

          <motion.div className="w-full" style={{ y: detailsY }}>
            <DetailList details={content.details} accentColorClass={accentColorClass} align={align === 'left' ? 'left' : 'right'} />
            <div className="flex items-center justify-between gap-4 mt-4">
                 <div className="text-left">
                    <div className="text-[9px] text-neutral-400 uppercase tracking-widest font-bold">Duration</div>
                    <div className="text-sm font-medium text-white font-sans">{content.delivery}</div>
                </div>
                 <div className="flex-1 max-w-[200px] pointer-events-auto">
                     <TacticalButton text="Get Started" accentColor={buttonBgClass} align={align === 'left' ? 'right' : 'left'} />
                 </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};



export default TextBlockMobile; 