import { Box, Typography } from "@mui/material";
import dr1 from "../../assets/images/dr-1.png";
import dr2 from "../../assets/images/dr-2.png";
const AboutMe = () => {
  return (
    <Box width="100%" height={900}>
      


      <Box
        display="flex"
        alignItems="center"
        p={4}
        justifyContent="flex-start"
        gap={4}
      >
        <Box>
          <img
            src={dr1}
            alt="About Me"
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          />
        </Box>
        <Box width={700}>
          <Typography variant="h3">دکتر مریم صابری</Typography>
          <Typography variant="body1" textAlign={"left"}>
            خانم دکتر مریم مرعشی با سال‌ها تجربه در درمان‌های دندانپزشکی زیبایی،
            ترمیمی و مراقبت‌های پیشگیرانه، همواره تلاش می‌کنند تا بیماران لبخندی
            سالم، طبیعی و ماندگار داشته باشند. ایشان با بهره‌گیری از تجهیزات
            به‌روز، دقت بالا در تشخیص و درمان، و رویکردی آرام و صبورانه، محیطی
            مطمئن و بدون استرس برای مراجعین فراهم کرده‌اند. هدف اصلی مطب، ارائه
            خدمات اصولی و استاندارد در فضایی حرفه‌ای است تا بیماران تجربه‌ای
            راحت و رضایت‌بخش از دندانپزشکی داشته باشند.
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        p={4}
        justifyContent="flex-end"
        gap={4}
      >
        <Box width={700}>
          <Typography variant="h3">دکتر غلام صابری</Typography>
          <Typography variant="body1" textAlign={"right"}>
            خانم دکتر مریم مرعشی با سال‌ها تجربه در درمان‌های دندانپزشکی زیبایی،
            ترمیمی و مراقبت‌های پیشگیرانه، همواره تلاش می‌کنند تا بیماران لبخندی
            سالم، طبیعی و ماندگار داشته باشند. ایشان با بهره‌گیری از تجهیزات
            به‌روز، دقت بالا در تشخیص و درمان، و رویکردی آرام و صبورانه، محیطی
            مطمئن و بدون استرس برای مراجعین فراهم کرده‌اند. هدف اصلی مطب، ارائه
            خدمات اصولی و استاندارد در فضایی حرفه‌ای است تا بیماران تجربه‌ای
            راحت و رضایت‌بخش از دندانپزشکی داشته باشند.
          </Typography>
        </Box>
        <Box>
          <img
            src={dr2}
            alt="About Me"
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
