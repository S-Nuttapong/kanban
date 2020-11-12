import { useEffect, useState } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export const useCalWidth = (
  initWidth: number,
  initWidthPercent: number,
  scaleVal?: number,
  base: number = 2
) => {
  const currentWidth = useViewport();
  const normalizedBy = (100 - initWidthPercent) / 100;
  const scale = scaleVal || initWidth * normalizedBy;
  const expoVal = (initWidth - currentWidth) / scale;

  const GeoSequence = (expoVal: number) => {
    return Math.pow(base, expoVal - 1);
  };

  if (expoVal < 0) {
    return Math.min(initWidthPercent + GeoSequence(Math.abs(expoVal)), 100);
  } else {
    return initWidthPercent - GeoSequence(expoVal);
  }
};


