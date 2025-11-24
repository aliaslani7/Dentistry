import { Box, Typography } from "@mui/material";
import Cards from "../pages/cards/Cards";
import Hero from "../pages/hero/Hero";
import AboutMe from "../pages/aboutMe/AboutMe";
import Footer from "../components/footer/Footer";
import ReservationForm from "../components/footer/reservationForm/ReservationForm";
import { useRef } from "react";
import { useGsapBgColorOnScroll } from "../pages/cards/useGsapBgColorOnScroll";
import { teal } from "@mui/material/colors";

const HomePage = () => {
  const cardsSectionRef = useRef<HTMLDivElement>(null);
  // رنگ اولیه و رنگ مقصد را اینجا تنظیم کن
  useGsapBgColorOnScroll(cardsSectionRef, teal[900], "");
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ minHeight: "100vh" }}>
        <Hero />
      </Box>
      {/* خدمات */}
      <Box ref={cardsSectionRef} sx={{ transition: "background 0.4s" }}>
        <Cards />
      </Box>
      {/* درباره */}
      <Box sx={{ minHeight: "100vh", py: 4 }}>
        <Typography variant="h3" sx={{ textAlign: "-moz-left", mb: 4 }}>
          درباره ما
        </Typography>
        <AboutMe />
      </Box>

      <Box>
        <ReservationForm />
      </Box>
      <Box pt={10}>
        <Footer />
      </Box>
    </Box>
  );
};

export default HomePage;
