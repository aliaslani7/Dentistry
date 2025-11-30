import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { cardData } from "./CardData";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cardsWrapperRef.current) return;

    const container = containerRef.current;
    const cardsWrapper = cardsWrapperRef.current;

    // محاسبه مقدار اسکرول افقی با اضافه کردن padding
    const scrollWidth = cardsWrapper.scrollWidth - container.offsetWidth;

    const horizontalScroll = gsap.to(cardsWrapper, {
      x: scrollWidth + 100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth + 500}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      horizontalScroll.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: "hidden",
        position: "relative",
        py: 4,
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "-khtml-left", mb: 4 }}>
        خدمات
      </Typography>
      <Box
        ref={cardsWrapperRef}
        sx={{
          display: "flex",
          gap: 7,
          flexWrap: "nowrap",
          width: "fit-content",
        }}
      >
        {cardData.map((item) => (
          <Card key={item.id} sx={{ width: 345, height: 300, flexShrink: 0 }}>
            <CardActionArea sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height={140}
                image={item.image}
                alt="img1"
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ height: 180, overflow: "hidden" }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 6,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Box
        height={500}
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        mt={4}
        gap={2}
      >
        <Typography variant="h2">
          تجربه‌ای شیرین و بدون درد از ایمپلنت درمرکز
        </Typography>
        <Typography color="primary" variant="h2">
           ایران
        </Typography>
      </Box>
    </Box>
  );
};

export default Cards;
