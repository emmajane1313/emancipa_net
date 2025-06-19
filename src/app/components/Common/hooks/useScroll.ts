import { BLOQUES } from "@/app/lib/constantes";
import { ModalContext } from "@/app/providers";
import { useContext, useEffect, useRef } from "react";

const useScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const context = useContext(ModalContext);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = el.scrollTop;
          const newIndex = Math.min(
            BLOQUES - 1,
            Math.floor(scrollY / (window.innerHeight * 1.5))
          );
          context?.setIndice((prev) => (prev !== newIndex ? newIndex : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    containerRef,
  };
};

export default useScroll;
