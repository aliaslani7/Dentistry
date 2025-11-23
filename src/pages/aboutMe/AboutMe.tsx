import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dr1 from "../../assets/images/dr-1.png";
import dr2 from "../../assets/images/dr-2.png";
import matab1 from "../../assets/images/Matab-A.jpg";
import matab2 from "../../assets/images/Matab-B.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const doctor1Ref = useRef<HTMLDivElement>(null);
  const doctor2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (doctor1Ref.current && doctor2Ref.current) {
        // یک تایم‌لاین برای فید این و فید اوت دکتر اول
        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: doctor1Ref.current,
            start: "top top",
            end: () => `+=${(doctor1Ref.current?.offsetHeight || 400) * 2}`,
            scrub: 2,
            pin: true,
            pinSpacing: true,
          },
        });
        tl1
          .fromTo(
            doctor1Ref.current,
            { opacity: 0, y: 50, scale: 1, filter: "blur(0px)" },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.3,
              ease: "power3.out",
            }
          )
          .to(doctor1Ref.current, {
            opacity: 0,
            y: -100,
            scale: 0.85,
            filter: "blur(20px)",
            duration: 0.7,
            ease: "power1.inOut",
          });

        // یک تایم‌لاین برای فید این و فید اوت دکتر دوم
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: doctor2Ref.current,
            start: "top top",
            end: () => `+=${(doctor2Ref.current?.offsetHeight || 400) * 2}`,
            scrub: 2,
            pin: true,
            pinSpacing: true,
          },
        });
        tl2
          .fromTo(
            doctor2Ref.current,
            { opacity: 0, y: 100, scale: 1, filter: "blur(0px)" },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.3,
              ease: "power3.out",
            }
          )
          .to(doctor2Ref.current, {
            opacity: 0,
            y: -100,
            scale: 0.85,
            filter: "blur(20px)",
            duration: 0.7,
            ease: "power1.inOut",
          });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box width="100%" sx={{ py: { xs: 4, md: 8 } }}>
      {/* دکتر اول - عکس چپ */}
      <Box
        ref={doctor1Ref}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "flex-start",
          gap: { xs: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
          py: 4,
          mb: 10,
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            backgroundImage: `url(${matab1})`,
            backgroundSize: "cover",
            width: "100%",
            maxWidth: "800px",
            height: "250px",
          }}
        >
          <img
            src={dr1}
            alt="About Me"
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              marginRight: "500px",
            }}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: 700 }, maxWidth: "100%" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.75rem", md: "3rem" } }}
          >
            دکتر مریم صابری
          </Typography>
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

      {/* دکتر دوم - عکس راست */}
      <Box
        ref={doctor2Ref}
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
            width: "100%",
            maxWidth: "800px",
            height: "250px",
          }}
        >
          <img
            src={dr2}
            alt="About Me"
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", md: 700 }, maxWidth: "100%" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "1.75rem", md: "3rem" } }}
          >
            دکتر مسعود گل محمدی
          </Typography>
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
      </Box>
    </Box>
  );
};

export default AboutMe;
