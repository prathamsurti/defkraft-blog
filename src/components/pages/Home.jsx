import CircleAnimation from "../animation/CircleAnimation";
import PricingSection from "../sections/Pricing";



const Home = () => {
  const sectionHeight = 1000; 
  const totalHeight = sectionHeight * 2 + 1200; 

  return (
    <div className="bg-[#0a0a0a] min-h-screen overflow-x-hidden font-sans selection:bg-[#FF9933] selection:text-black">
      <script src="https://cdn.tailwindcss.com"></script>
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]" style={{backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")'}}></div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(0,0,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,128,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* ---------------------------------------------------------
          SECTION 1: PER PROJECT (Saffron Theme)
      --------------------------------------------------------- */}
      <PricingSection 
        // 1. Configuration (Timing & Position)
        config={{
          startOffset: 0,
          yPos: 35,
          align: 'left'
        }}
        // 2. Theme (Colors & Images)
        theme={{
          imageSrc: "https://images.unsplash.com/photo-1579912891470-947092304c9b?q=80&w=2576&auto=format&fit=crop",
          wipeColor: "#FF9933", // Saffron
          borderColor: "border-[#FF9933]/30",
          accentColor: "bg-[#FF9933]",
          accentText: "text-[#FF9933]"
        }}
        // 3. Content (Text)
        content={{
          title: "Per Project",
          price: "₹5,490", 
          tagline: "Single Engagement",
          delivery: "3-4 Weeks",
          details: ["Homepage + inner pages (4-5)", "Design and Development", "Mobile-Optimized Design", "Weekly support"]
        }}
      />

      {/* ---------------------------------------------------------
          SECTION 2: MONTHLY RETAINER (India Green Theme)
      --------------------------------------------------------- */}
      <PricingSection 
        config={{
          startOffset: sectionHeight,
          yPos: 75,
          align: 'right'
        }}
        theme={{
          imageSrc: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2670&auto=format&fit=crop",
          wipeColor: "#138808", // India Green
          borderColor: "border-[#138808]/30",
          accentColor: "bg-[#138808]",
          accentText: "text-[#138808]"
        }}
        content={{
          title: "Monthly Retainer",
          price: "₹2,990", 
          tagline: "Ongoing Partnership",
          delivery: "Ongoing",
          details: ["Unlimited Design Requests", "Development Implementation", "Priority Support", "Cancel Anytime"]
        }}
      />

      <div style={{ height: `${totalHeight}px` }} className="relative z-0"></div>
    </div>
  );
};

export default Home;