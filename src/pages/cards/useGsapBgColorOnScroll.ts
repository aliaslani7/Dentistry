import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useGsapBgColorOnScroll(ref: React.RefObject<HTMLElement | HTMLDivElement | null>, color: string, revertColor: string) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        backgroundColor: color,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          // markers: true, // uncomment for debug
        },
        duration: 1,
        ease: "power1.inOut",
      });
    }, el);
    return () => ctx.revert();
  }, [ref, color]);
}
