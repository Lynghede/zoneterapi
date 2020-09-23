import { useEffect } from "react";
import useMediaQuery from "use-media-query-hook";
import {theme} from './theme';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export const useDynamicHero = () => {
  const isMobile = useMediaQuery(`(min-width: ${theme.mobile})`);
  const isTablet = useMediaQuery(`(min-width: ${theme.tablet})`);
  const isPc = useMediaQuery(`(min-width: ${theme.pc})`);

  if (isPc){ 
    return process.env.PUBLIC_URL + "/Hero_dekstop.jpg"
  }
  // else if (isTablet) {
  //   return process.env.PUBLIC_URL + "/Hero_tablet.jpg"
  // }
  else {
    return process.env.PUBLIC_URL + "/Hero_tablet.jpg"
  }
};

export default useOnClickOutside;
