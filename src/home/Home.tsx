// تعریف global برای window.__sectionRefs جهت رفع خطای TypeScript
declare global {
  interface Window {
    __sectionRefs?: { [key: string]: HTMLElement | null };
  }
}
import { Box, Typography } from "@mui/material";
import BackToTop from "../components/BackToTop";
import Cards from "../pages/cards/Cards";
import Hero from "../pages/hero/Hero";
import AboutMe from "../pages/aboutMe/AboutMe";
import Footer from "../components/footer/Footer";
import ReservationForm from "../components/footer/reservationForm/ReservationForm";
import { useRef } from "react";
// import { useGsapBgColorOnScroll } from "../pages/cards/useGsapBgColorOnScroll";
// import { grey, teal } from "@mui/material/colors";

import { useEffect } from "react";
import Descriptions from "../pages/descriptions/Descriptions";
import AccordionDescription from "../components/accordion/AccordionDescription";
import Lists from "../components/listBlog/ListBlogData";
const HomePage = () => {
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const cardsSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.__sectionRefs = window.__sectionRefs || {};
      window.__sectionRefs["home"] = homeSectionRef.current;
      window.__sectionRefs["services"] = cardsSectionRef.current;
      window.__sectionRefs["about"] = aboutSectionRef.current;
      window.__sectionRefs["contact"] = contactSectionRef.current;
    }
  }, []);
  // useGsapBgColorOnScroll(cardsSectionRef, grey[900], "");
  return (
    <Box>
      {/* Hero Section */}
      <Box ref={homeSectionRef} sx={{ minHeight: "100vh" }}>
        <Hero />
      </Box>
      {/* خدمات */}
      <Box ref={cardsSectionRef} sx={{ transition: "background 0.4s" }}>
        <Cards />
      </Box>
      {/* درباره */}
      <Box ref={aboutSectionRef} sx={{ minHeight: "100vh", py: 10 }}>
        <Typography variant="h3" sx={{ textAlign: "-moz-left" }}>
          درباره ما
        </Typography>
        <AboutMe />
        <Descriptions />
        <AccordionDescription />
      </Box>
      <Box>
        <Lists />
      </Box>

      <Box ref={contactSectionRef}>
        <ReservationForm />
      </Box>
      <Box pt={10}>
        <Footer />
      </Box>

      <BackToTop />
    </Box>
  );
};

export default HomePage;
