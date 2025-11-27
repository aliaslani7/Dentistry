import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useGsapScaleOnScroll(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      // حالت اولیه کوچک، بزرگ شدن در مرکز، کوچک شدن هنگام خروج
      gsap.set(el, { width: "20%", height: "30vh" });
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "center center",
          scrub: 1.5,
          onLeave: () => {
            gsap.to(el, {
              width: "12%",
              height: "18vh",
              duration: 2.2,
              ease: "expo.inOut",
            });
          },
          onEnterBack: () => {
            gsap.to(el, {
              width: "60%",
              height: "60vh",
              duration: 2.2,
              ease: "expo.inOut",
            });
          },
          onLeaveBack: () => {
            gsap.to(el, {
              width: "20%",
              height: "30vh",
              duration: 2.2,
              ease: "expo.inOut",
            });
          },
        },
        width: "60%",
        height: "60vh",
        ease: "expo.inOut",
        duration: 2.2,
      });
    }, ref);
    return () => ctx.revert();
  }, [ref]);
}
