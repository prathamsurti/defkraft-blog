import useIsMobile from "../../hooks/useIsMobile";
import CircleAnimation from "../animation/CircleAnimation";
import CircleAnimationMobile from "../animation/CircleAnimationMobile";
import TextBlock from "../animation/TextBlock";
import TextBlockMobile from "../animation/TextBlockMobile";




const Pricing = ({ content, theme, config }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <CircleAnimationMobile 
          scrollY={config.scrollY}
          animateRange={config.animateRange}
          scrollRange={config.scrollRange}
          scrollOutput={config.scrollOutput}
          imageSrc={theme.imageSrc}
          wipeColor={theme.wipeColor} 
          borderColor={theme.borderColor}
          align={config.align}
        />
        <TextBlockMobile 
          scrollY={config.scrollY}
          content={content} 
          animateRange={config.animateRange}
          scrollRange={config.scrollRange}
          scrollOutput={config.scrollOutput}
          align={config.align}
        />
      </>
    );
  }

  return (
    <>
      <CircleAnimation 
        scrollY={config.scrollY}
        startOffset={config.startOffset} 
        yPos={config.yPos} 
        align={config.align}
        imageSrc={theme.imageSrc}
        wipeColor={theme.wipeColor} 
        borderColor={theme.borderColor}
      />
      <TextBlock 
        scrollY={config.scrollY}
        content={content} 
        startOffset={config.startOffset} 
        topPos={config.yPos} 
        align={config.align}
        accentColor={theme.accentColor}
      />
    </>
  );
};



export default Pricing