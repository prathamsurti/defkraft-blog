const TacticalButton = ({ text, accentColor, align = 'left', onClick }) => {
  const flexDirection = align === 'right' ? 'md:flex-row-reverse' : '';
  const bgClass = accentColor || "bg-neutral-700";

  return (
    <button 
      onClick={onClick}
      className={`
        mt-6 md:mt-8 group flex items-center justify-between w-full 
        px-6 md:px-8 py-4 rounded-full 
        ${bgClass} text-white 
        shadow-lg shadow-black/40 hover:brightness-110 hover:shadow-xl hover:-translate-y-0.5
        transition-all duration-300 ease-out
        ${flexDirection}
      `}
    >
      <span className="text-xs font-bold uppercase tracking-widest font-mono">{text}</span>
      <div className="w-2 h-2 rounded-full bg-white/90 group-hover:scale-125 transition-transform"></div>
    </button>
  );
};

export default TacticalButton