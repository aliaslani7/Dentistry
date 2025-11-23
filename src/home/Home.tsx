import { Box, Typography } from "@mui/material";
import Cards from "../pages/cards/Cards";
import Hero from "../pages/hero/Hero";
import AboutMe from "../pages/aboutMe/AboutMe";

const HomePage = () => {
  return (
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
        <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
          درباره ما
        </Typography>
        <AboutMe />
      </Box>
    </Box>
  );
};

export default HomePage;
