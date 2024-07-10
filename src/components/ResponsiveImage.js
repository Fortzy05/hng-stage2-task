
import React from "react";
import { useMediaQuery } from "react-responsive";

const ResponsiveImage = ({ mobileSrc, desktopSrc, alt, className }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <img
      className={className}
      src={isDesktopOrLaptop ? desktopSrc : mobileSrc}
      alt={alt}
    />
  );
};

export default ResponsiveImage;
