import { Box } from "@mui/material";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import descriptionsWallpaper from "../../assets/images/Descriptions.jpg";

gsap.registerPlugin(ScrollTrigger);

const Descriptions = () => {
  const imgBoxRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!imgBoxRef.current || !sectionRef.current || !textRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 7%",
          end: "+=120%",
          scrub: 1.2,
          pin: imgBoxRef.current,
          anticipatePin: 1,
        },
      });

      // Scale image
      tl.fromTo(
        imgBoxRef.current,
        { scale: 0.5 },
        { scale: 1.2, ease: "none" }
      );

      // Fade-in text
      tl.fromTo(
        textRef.current,
        { opacity: 0.5, y: 40 },
        { opacity: 1, y: 0, ease: "power2.out" },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      py={20}
      sx={{ position: "relative", minHeight: "120vh" }}
    >
      <Box
        ref={imgBoxRef}
        sx={{
          width: "50vw",
          height: "50vh",
          margin: "0 auto",
          borderRadius: 10,
          backgroundImage: `url(${descriptionsWallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          ref={textRef}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            opacity: 0,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Descriptions;
