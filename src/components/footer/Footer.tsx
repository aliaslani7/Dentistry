import { Box, Typography } from "@mui/material";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <Box pt={20}>
      <Box>
        <Box textAlign={"center"}>
          <Typography>
            سعادت آباد ، میدان کاج ، خیابان مروارید ، پلاک 7
          </Typography>
          <Typography>09122031805</Typography>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <SocialMedia />
      </Box>
    </Box>
  );
};

export default Footer;
