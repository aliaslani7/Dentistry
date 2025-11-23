import { Box, useTheme } from "@mui/material";
import ReservationForm from "./reservationForm/ReservationForm";
import wallPaper from "../../assets/images/beautiful-spacious-office-dentist.jpg";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box display={"flex"} height={500} gap={40}>
      <Box
        flex={1}
        height="100%"
        sx={{
          backgroundImage: `url(${wallPaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Box bgcolor={theme.palette.footerBg} flex={1} p={4}>
        <ReservationForm />
      </Box>
    </Box>
  );
};

export default Footer;
