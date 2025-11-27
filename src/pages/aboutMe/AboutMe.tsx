import { Box, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import dr1 from "../../assets/images/dr-1.png";
import dr2 from "../../assets/images/dr-2.png";
import matab1 from "../../assets/images/Matab-A.jpg";
import matab2 from "../../assets/images/Matab-B.jpg";

const AboutMe = () => {
  const dr1ImgRef = useRef(null);
  const dr2ImgRef = useRef(null);

  useEffect(() => {
    if (dr1ImgRef.current) {
      gsap.fromTo(
        dr1ImgRef.current,
        { x: 100 },
        {
          x: 0,
          scrollTrigger: {
            trigger: dr1ImgRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }
    if (dr2ImgRef.current) {
      gsap.fromTo(
        dr2ImgRef.current,
        { x: -100 },
        {
          x: 0,
          scrollTrigger: {
            trigger: dr2ImgRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <Box width="100%" >
      {/* دکتر اول - عکس چپ */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "flex-start",
          gap: { xs: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
          py: 4,
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            backgroundImage: `url(${matab1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: { xs: "100%", sm: "350px", md: "400px", lg: "500px" },
            maxWidth: "800px",
            height: { xs: 180, sm: 220, md: 250 },
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            mb: { xs: 2, md: 0 },
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <img
            ref={dr1ImgRef}
            src={dr1}
            alt="About Me"
            style={{
              width: "80%",
              maxWidth: 220,
              height: "auto",
              margin: 0,
              display: "block",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: 1 }, maxWidth: 700 }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.75rem", md: "3rem" } }}
          >
            دکتر مریم صابری
          </Typography>
          <Typography variant="body1" textAlign={"left"}>
            {
              "خانم دکتر مریم مرعشی با سال‌ها تجربه در درمان‌های دندانپزشکی زیبایی، ترمیمی و مراقبت‌های پیشگیرانه، همواره تلاش می‌کنند تا بیماران لبخندی سالم، طبیعی و ماندگار داشته باشند. ایشان با بهره‌گیری از تجهیزات به‌روز، دقت بالا در تشخیص و درمان، و رویکردی آرام و صبورانه، محیطی مطمئن و بدون استرس برای مراجعین فراهم کرده‌اند. هدف اصلی مطب، ارائه خدمات اصولی و استاندارد در فضایی حرفه‌ای است تا بیماران تجربه‌ای راحت و رضایت‌بخش از دندانپزشکی داشته باشند."
            }
          </Typography>
        </Box>
      </Box>

      {/* دکتر دوم - عکس راست */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          justifyContent: "flex-start",
          gap: { xs: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
          py: 4,
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            backgroundImage: `url(${matab2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: { xs: "100%", sm: "350px", md: "400px", lg: "500px" },
            maxWidth: "800px",
            height: { xs: 180, sm: 220, md: 250 },
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            mb: { xs: 2, md: 0 },
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <img
            ref={dr2ImgRef}
            src={dr2}
            alt="About Me"
            style={{
              width: "80%",
              maxWidth: 220,
              height: "auto",
              margin: 0,
              display: "block",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: 1 }, maxWidth: 700 }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.75rem", md: "3rem" } }}
          >
            دکتر مسعود گل محمدی
          </Typography>
          <Typography variant="body1" textAlign={"right"}>
            {
              "خانم دکتر مریم مرعشی با سال‌ها تجربه در درمان‌های دندانپزشکی زیبایی، ترمیمی و مراقبت‌های پیشگیرانه، همواره تلاش می‌کنند تا بیماران لبخندی سالم، طبیعی و ماندگار داشته باشند. ایشان با بهره‌گیری از تجهیزات به‌روز، دقت بالا در تشخیص و درمان، و رویکردی آرام و صبورانه، محیطی مطمئن و بدون استرس برای مراجعین فراهم کرده‌اند. هدف اصلی مطب، ارائه خدمات اصولی و استاندارد در فضایی حرفه‌ای است تا بیماران تجربه‌ای راحت و رضایت‌بخش از دندانپزشکی داشته باشند."
            }
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
