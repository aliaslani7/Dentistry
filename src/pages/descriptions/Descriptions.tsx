import { Box, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import descriptionsWallpaper from "../../assets/images/Descriptions.jpg";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Descriptions = () => {
  const imgBoxRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  //   const [showText, setShowText] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imgBoxRef.current || !sectionRef.current) return;
    const img = imgBoxRef.current;
    const section = sectionRef.current;
    const text = textRef.current;

    gsap.fromTo(
      img,
      { scale: 1 },
      {
        scale: 1.2,
        scrollTrigger: {
          trigger: section,
          start: "top 2%",
          end: "+=60%",
          scrub: 2,
          pin: img,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (text) {
              // نمایش نوشته دقیقاً از شروع اسکرول (progress > 0.01)
              gsap.to(text, {
                opacity: self.progress > 0.01 ? 1 : 0,
                duration: 0.15,
                ease: "power1.inOut",
                overwrite: true,
              });
            }
          },
          onLeaveBack: () => {
            if (text) {
              gsap.to(text, {
                opacity: 0,
                duration: 0.5,
                ease: "expo.inOut",
                overwrite: true,
              });
            }
          },
        },
        ease: "expo.out",
      }
    );
  }, []);

  return (
    <Box
      ref={sectionRef}
      py={20}
      sx={{ position: "relative", minHeight: "120vh" }}
    >
      <Box
        ref={imgBoxRef}
        sx={{
          width: "60vw",
          height: "60vh",
          margin: "0 auto",
          borderRadius: 10,
          backgroundImage: `url(${descriptionsWallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          alignItems={"center"}
          ref={textRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            zIndex: 2,
            opacity: 0,
            transition: "opacity 0.5s",
          }}
        >
          <NavLink
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              textAlign={"center"}
              sx={{
                background: "rgba(255,255,255,0.35)",
                backdropFilter: "blur(8px)",
                borderRadius: 4,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}
            >
              <Typography variant="h3" p={3} textAlign={"center"}>
                خدمات دیجیتال
              </Typography>
              {/* <Button  size="small" variant="text" color="success">
            بیشتر بدانید
          </Button> */}
            </Box>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Descriptions;
