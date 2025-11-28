import useIsMobile from "../../hooks/useIsMobile";
import CircleAnimation from "../animation/CircleAnimation";
import TextBlock from "../animation/TextBlock";
import MobileCircleAnimation from "../animation/MobileCircleAnimation";
import MobileTextBlock from "../animation/MobileTextBlock";





const Pricing = ({ content, theme, config }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <MobileCircleAnimation 
          scrollY={config.scrollY}
          animateRange={config.animateRange}
          scrollRange={config.scrollRange}
          scrollOutput={config.scrollOutput}
          imageSrc={theme.imageSrc}
          wipeColor={theme.wipeColor} 
          borderColor={theme.borderColor}
          align={config.align}
        />
        <MobileTextBlock 
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
        animateRange={config.animateRange}
        scrollRange={config.scrollRange}
        scrollOutput={config.scrollOutput}
      />
      <TextBlock 
        scrollY={config.scrollY}
        content={content} 
        startOffset={config.startOffset} 
        topPos={config.yPos} 
        align={config.align}
        accentColor={theme.accentColor}
        animateRange={config.animateRange}
        scrollRange={config.scrollRange}
        scrollOutput={config.scrollOutput}
      />
    </>
  );
};

export default Pricing;