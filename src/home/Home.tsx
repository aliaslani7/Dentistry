import { Box, Typography } from "@mui/material";
import Cards from "../pages/cards/Cards";

const HomePage = () => {
  return (
    <Box>
      {/* خدمات */}
      <Box>
        <Typography variant="h3">خدمات</Typography>
        <Cards />
      </Box>
    </Box>
  );
};

export default HomePage;
