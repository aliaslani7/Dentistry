import { Box, Typography } from "@mui/material";
import homeHero from "../../assets/images/HomeHero.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // انیمیشن شروع صفحه
      const tl = gsap.timeline();

      tl.fromTo(
        overlayRef.current,
        {
          scaleY: 1,
        },
        {
          scaleY: 0,
          duration: 1.2,
          ease: "power4.inOut",
          transformOrigin: "top",
        }
      );

      tl.fromTo(
        imageRef.current,
        {
          scale: 1.3,
        },
        {
          scale: 1,
          duration: 1.8,
          ease: "power2.out",
        },
        "-=1"
      );

      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // افکت اسکرول: عکس محو میشه و zoom out + blur
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 1.5,
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // متن بزرگتر میشه و ثابت میمونه
      gsap.to(textRef.current, {
        scale: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 500, md: 800 },
        overflow: "hidden",
      }}
    >
      <Box
        ref={imageRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${homeHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Box
        ref={overlayRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "background.default",
          zIndex: 2,
        }}
      />

      <Box
        ref={textRef}
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          opacity: 0,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "4rem", sm: "6rem", md: "8rem", lg: "20rem" },
            width: "100%",
            letterSpacing: { xs: "0.5rem", md: "1rem" },
            background: `url(${homeHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            mixBlendMode: "overlay",
            userSelect: "none",
            // color: "transparent",
          }}
        >
          Dentistry
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
