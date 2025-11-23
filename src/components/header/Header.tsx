import {
  Box,
  Divider,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import gsap from "gsap";
import { useRef, useState } from "react";
import ThemeToggleSwitch from "../themeToggleSwitch/ThemeToggleSwitch";

interface headerItemsType {
  id: number;
  title: string;
  link?: string;
}

const headerItems: headerItemsType[] = [
  { id: 1, title: "صفحه اصلی" },
  { id: 2, title: "خدمات" },
  { id: 3, title: "درباره ما" },
  { id: 4, title: "ارتباط با ما" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    if (isMobile) return;
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
    if (isMobile) return;
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

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignContent={"center"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        px: { xs: 2, md: 0 },
        py: { xs: 1.5, md: 0 },
      }}
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
          {!isMobile && (
            <Divider orientation="vertical" flexItem sx={{ borderWidth: 1 }} />
          )}
        </Box>

        {/* menuItems - Desktop */}
        {!isMobile &&
          headerItems?.map((item, index) => (
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

      <Box display="flex" alignItems="center" gap={1}>
        <ThemeToggleSwitch />
        {isMobile && (
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon />
          </IconButton>
        )}
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, pt: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {headerItems.map((item) => (
              <ListItem key={item.id} sx={{ cursor: "pointer" }}>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
