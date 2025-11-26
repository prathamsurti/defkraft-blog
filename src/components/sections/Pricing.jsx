import CircleAnimation from "../animation/CircleAnimation";
import TextBlock from "../animation/TextBlock";


const Pricing = ({ content, theme, config }) => {
  return (
    <div className="block h-full w-full">
      <CircleAnimation 
        startOffset={config.startOffset} 
        yPos={config.yPos} 
        align={config.align}
        imageSrc={theme.imageSrc}
        wipeColor={theme.wipeColor} 
        borderColor={theme.borderColor}
      />
      <TextBlock 
        content={content} 
        startOffset={config.startOffset} 
        topPos={config.yPos} 
        align={config.align}
        accentColor={theme.accentColor}
        accentText={theme.accentText}
      />
    </div>
  );
};



export default Pricing