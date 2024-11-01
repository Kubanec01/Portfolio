import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const screenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", screenWidth);

    return () => {
      window.removeEventListener("resize", screenWidth);
    };
  }, []);

  return screenWidth;
};
