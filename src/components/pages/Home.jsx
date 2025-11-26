import { useScroll } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";
import CircleAnimation from "../animation/CircleAnimation";
import PricingSection from "../sections/Pricing";
import { useRef } from "react";




const Home = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ container: containerRef });
  const isMobile = useIsMobile();
  
  // Configuration Constants
  const PHASE_1_END = 500;
  const PHASE_2_END = 1000;
  const PHASE_3_END = 1500;
  const TOTAL_HEIGHT = isMobile ? 3000 : 2500; // Desktop doesn't need as much height since items overlap viewports

  const content1 = {
    title: "Single Project",
    price: "₹5,490", tagline: "One-Time", accentColor: "bg-[#FF9933]", accentText: "text-[#FF9933]",
    details: ["Homepage + 4 Inner Pages", "Full Responsive Design", "Weekly Support Call", "SEO Basics Included"],
    delivery: "3-4 Weeks"
  };

  const content2 = {
    title: "Monthly Retainer",
    price: "₹2,990", tagline: "Ongoing", accentColor: "bg-[#138808]", accentText: "text-[#138808]",
    details: ["Unlimited Requests", "Priority Development", "24/7 Support Access", "Pause or Cancel Anytime"],
    delivery: "Ongoing"
  };

  // Config Objects
  const section1Config = {
    // Mobile Props
    scrollY, animateRange: [0, PHASE_1_END], scrollRange: [PHASE_1_END, PHASE_2_END], scrollOutput: ['30%', '-100%'],
    // Desktop Props
    startOffset: 0, yPos: 35, 
    align: "left"
  };

  const section2Config = {
    // Mobile Props
    scrollY, animateRange: [PHASE_2_END, PHASE_3_END], scrollRange: [PHASE_1_END, PHASE_2_END], scrollOutput: ['150%', '30%'],
    // Desktop Props (Sequential logic handled by startOffset)
    startOffset: 1000, yPos: 75, 
    align: "right"
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen overflow-x-hidden font-sans selection:bg-[#FF9933] selection:text-black relative">
      <script src="https://cdn.tailwindcss.com"></script>
      
      {/* Backgrounds */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]" style={{backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")'}}></div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(0,0,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,128,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="fixed top-8 left-0 w-full text-center z-50 pointer-events-none mix-blend-overlay">
        <p className="text-white/50 text-xs uppercase tracking-[0.2em]">Scroll to Explore</p>
        <div className="w-[1px] h-12 bg-white/20 mx-auto mt-4"></div>
      </div>

      <PricingSection config={section1Config} content={content1}
        theme={{
          imageSrc: "https://images.unsplash.com/photo-1579912891470-947092304c9b?q=80&w=2576&auto=format&fit=crop",
          wipeColor: "#FF9933", borderColor: "border-[#FF9933]/30", accentColor: "bg-[#FF9933]", accentText: "text-[#FF9933]"
        }}
      />

      <PricingSection config={section2Config} content={content2}
        theme={{
          imageSrc: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2670&auto=format&fit=crop",
          wipeColor: "#138808", borderColor: "border-[#138808]/30", accentColor: "bg-[#138808]", accentText: "text-[#138808]"
        }}
      />

      <div ref={containerRef} className="absolute inset-0 overflow-y-auto overflow-x-hidden z-40 no-scrollbar scroll-smooth">
        <div style={{ height: `${TOTAL_HEIGHT}px` }} className="w-full"></div>
      </div>
    </div>
  );
};

export default Home;