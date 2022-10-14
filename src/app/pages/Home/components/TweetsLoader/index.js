import React from "react";
import ContentLoader from "react-content-loader";
import useMediaQuery from "../../../../hooks/useMediaQuery";

const MOBILE_SIZES = {
  itemHeight: 200,
  itemMargin: 30,
  viewBox: "0 0 600 1330",
  componentHeight: "200vw",
  componentWidth: "100%",
  borderRadius: 40,
};

const DESKTOP_SIZES = {
  itemHeight: 130,
  itemMargin: 20,
  viewBox: "0 0 600 900",
  componentHeight: 900,
  componentWidth: "100%",
  borderRadius: 25,
};

const ProblemCardLoader = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const SIZES = isMobile ? MOBILE_SIZES : DESKTOP_SIZES;

  return (
    <ContentLoader
      height={SIZES.componentHeight}
      width={SIZES.componentWidth}
      speed={3}
      viewBox={SIZES.viewBox}
      backgroundColor="#f2f2f2"
      foregroundColor="#eee"
    >
      {new Array(5).fill(null).map((_, index) => (
        <rect
          key={`key-${index}`}
          x="0"
          y={index * (SIZES.itemHeight + SIZES.itemMargin)}
          rx={SIZES.borderRadius}
          ry={SIZES.borderRadius}
          width="600"
          height={SIZES.itemHeight}
        />
      ))}
    </ContentLoader>
  );
};

export default ProblemCardLoader;
