import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Box, Typography } from "@mui/material";
import Cards from "../pages/cards/Cards";
import Hero from "../pages/hero/Hero";
import AboutMe from "../pages/aboutMe/AboutMe";
// import Footer from "../components/footer/Footer";
import SocialMedia from "../components/footer/SocialMedia";

gsap.registerPlugin(ScrollSmoother);

const HomePage = () => {
  const smootherRef = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!smootherRef.current && wrapperRef.current) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: wrapperRef.current.querySelector(".smooth-content"),
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.1,
      });
    }
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "100vh", overflow: "hidden" }}>
      <div className="smooth-content">
        <Box>
          {/* Hero Section */}
          <Box sx={{ minHeight: "100vh" }}>
            <Hero />
          </Box>
          {/* خدمات */}
          <Box>
            <Cards />
          </Box>
          {/* درباره */}
          <Box sx={{ minHeight: "100vh", py: 4 }}>
            <Typography variant="h3" sx={{ textAlign: "-moz-left", mb: 4 }}>
              درباره ما
            </Typography>
            <AboutMe />
          </Box>
          {/* <Box p={10} pb={12}>
            <Footer />
          </Box> */}
          <Box pt={10} textAlign={"center"}>
            <SocialMedia />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default HomePage;
