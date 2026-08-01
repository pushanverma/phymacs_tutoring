import { useState, useEffect } from "react";

/** True while the viewport is narrower than `bp` pixels (default: phone breakpoint). */
export function useIsMobile(bp = 768) {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < bp : false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < bp);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [bp]);
  return isMobile;
}

/** True while the viewport is narrower than the tablet/desktop breakpoint. */
export function useIsTablet(bp = 992) {
  const [isTablet, setIsTablet] = useState(typeof window !== "undefined" ? window.innerWidth < bp : false);
  useEffect(() => {
    const onResize = () => setIsTablet(window.innerWidth < bp);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [bp]);
  return isTablet;
}
