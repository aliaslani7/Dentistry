import { Box, Divider, Typography } from "@mui/material";
import gsap from "gsap";
import { useRef } from "react";
import ThemeToggleSwitch from "../themeToggleSwitch/ThemeToggleSwitch";
interface headerItemsType {
  id: number;
  title: string;
  link?: string;
}
const headerItems: headerItemsType[] = [
  { id: 1, title: "صفحه اصلی" },
  { id: 2, title: "درباره ما" },
  { id: 3, title: "خدمات" },
  { id: 4, title: "ارتباط با ما" },
];
const Header = () => {
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const handleMouseEnter = (index: number) => {
    const wrapper = menuItemsRef.current[index];
    if (wrapper) {
      const originalText = wrapper.querySelector(".original-text");
      const cloneText = wrapper.querySelector(".clone-text");

      gsap.to(originalText, {
        y: "-100%",
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.fromTo(
        cloneText,
        { y: "100%" },
        {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        }
      );
    }
  };
  const handleMouseLeave = (index: number) => {
    const wrapper = menuItemsRef.current[index];
    if (wrapper) {
      const originalText = wrapper.querySelector(".original-text");
      const cloneText = wrapper.querySelector(".clone-text");

      gsap.to(originalText, {
        y: "0%",
        duration: 0.4,
        ease: "power2.inOut",
      });

      gsap.to(cloneText, {
        y: "100%",
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignContent={"center"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        alignContent={"center"}
        alignItems={"center"}
      >
        {/* logo */}
        <Box display={"flex"} gap={2} sx={{ userSelect: "none" }}>
          <Typography variant="h6" fontWeight={700}>
            Dentistry
          </Typography>
          <Divider orientation="vertical" flexItem sx={{borderWidth:1}} />
        </Box>

        {/* menuItems */}
        {headerItems?.map((item, index) => (
          <Box
            key={item.id}
            ref={(el: HTMLDivElement | null) => {
              menuItemsRef.current[index] = el;
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            sx={{
              userSelect: "none",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Typography className="original-text" sx={{ display: "block" }}>
              {item.title}
            </Typography>
            <Typography
              className="clone-text"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                display: "block",
                transform: "translateY(100%)",
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box>
        <ThemeToggleSwitch />
      </Box>
    </Box>
  );
};

export default Header;
