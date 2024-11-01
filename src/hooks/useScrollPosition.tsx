import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const isAtTopPosition = () => {
      if ((window.scrollY === 0)) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", isAtTopPosition);

    return () => {
      window.removeEventListener("scroll", isAtTopPosition);
    };
  }, []);

  return isAtTop;
};
