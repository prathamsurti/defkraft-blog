import CircleAnimationMobile from "../animation/MobileCircleAnimation";
import TextBlockMobile from "../animation/MobileTextBlock";

const PricingMobile = ({ content, theme, config }) => {
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
};

export default PricingMobile;