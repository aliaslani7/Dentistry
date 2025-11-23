import { Box, Typography, useTheme } from "@mui/material";
import ReservationForm from "./reservationForm/ReservationForm";

const Footer = () => {
  const theme = useTheme();
  const iconColor = theme.palette.text.primary;
  return (
    <Box
      px={30}
      display={"flex"}
      justifyContent={"space-between"}
      py={5}
      bgcolor={theme.palette.footerBg}
      borderRadius={20}

    >
      <Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            bgcolor: theme.palette.footerBg,
            borderRadius: "50%",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 6C22 6 10 13 10 28c0 8 4 14 8 14 4 0 4-8 8-8s4 8 8 8c4 0 8-6 8-14C54 13 42 6 32 6z"
              // fill={iconColor}
              stroke={iconColor}
              strokeWidth="2"
            />
          </svg>
        </Box>
        <Box>
          <Typography variant="h5">آدرس : </Typography>
          <Typography variant="body1">
            تهران ، سعادت آباد ، بلوار دریا ، خیابان مروارید ، پلاک7 ، واحد 7
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">تلفن : </Typography>
          <Typography variant="h6">09122031805 </Typography>
        </Box>
      </Box>
      <Box>
        <ReservationForm />
      </Box>
    </Box>
  );
};

export default Footer;
