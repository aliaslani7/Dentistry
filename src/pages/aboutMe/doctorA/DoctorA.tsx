import { Box, Typography } from "@mui/material";
import dr1 from "../../assets/images/dr-1.png";

const DoctorA = () => {
  return (
    <Box>
      <Box alignItems="center" p={4}>
        <Box flex={1}>
          <img
            src={dr1}
            alt="About Me"
            style={{ width: "20%", height: "auto" }}
          />
        </Box>
        <Box width={700}>
          <Typography variant="h3">دکتر مریم مرعشی</Typography>
          <Typography variant="body1">
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
    </Box>
  );
};

export default DoctorA;
