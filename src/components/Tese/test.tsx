import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { listData } from "../listBlog/listData";

const Lists = () => {
  const [centerIdx, setCenterIdx] = useState(3); // شروع از وسط 7تایی
  const listLength = listData.length;

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0 && centerIdx < listLength - 4) {
      setCenterIdx(centerIdx + 1);
    } else if (e.deltaY < 0 && centerIdx > 3) {
      setCenterIdx(centerIdx - 1);
    }
    e.preventDefault();
  };

  const visibleItems = listData.slice(centerIdx - 3, centerIdx + 4);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <Typography
        variant="h4"
        p={3}
        sx={{
          background:
            "linear-gradient(90deg, #00c6ff 0%, #0072ff 50%, #00ffb4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 900,
          letterSpacing: 2,
          fontSize: { xs: 30, md: 44 },
          mb: 2,
          textShadow: "0 2px 24px #00c6ff99, 0 1px 0 #fff",
          animation: "gradientMove 4s linear infinite",
          "@keyframes gradientMove": {
            "0%": { backgroundPosition: "0% 50%" },
            "100%": { backgroundPosition: "100% 50%" },
          },
          backgroundSize: "200% 200%",
        }}
      >
        تعرفه قیمت خدمات دندانپزشکی
      </Typography>
      <Box
        width={1500}
        minWidth={1500}
        maxWidth={1500}
        displayPrint="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        display="flex"
        gap={4}
        pt={5}
        pb={3}
        // sx={{
        //   overflowX: "hidden",
        //   scrollbarWidth: "thin",
        //   borderRadius: 8,
        //   py: 5,
        //   position: "relative",
        //   "::before": {
        //     content: '""',
        //     position: "absolute",
        //     top: 0,
        //     left: 0,
        //     width: "100%",
        //     height: "100%",
        //     borderRadius: 8,
        //     zIndex: 0,
        //     pointerEvents: "none",
        //     animation: "borderGlow 5s linear infinite",
        //   },
        //   "@keyframes borderGlow": {
        //     "0%": { boxShadow: "0 0 24px 0 #00c6ff44" },
        //     "50%": { boxShadow: "0 0 48px 0 #00ffb444" },
        //     "100%": { boxShadow: "0 0 24px 0 #00c6ff44" },
        //   },
        // }}
        onWheel={handleWheel}
      >
        {visibleItems.map((item, idx) => (
          <Box
            key={item.id}
            borderRadius={6}
            p={3}
            width={240}
            minWidth={240}
            height={440}
            minHeight={440}
            sx={{
              background:
                idx === 3
                  ? "linear-gradient(135deg, rgba(0,198,255,0.18) 0%, rgba(0,255,180,0.10) 100%)"
                  : "rgba(255, 255, 255, 0.10)",
              boxShadow:
                idx === 3
                  ? "0 12px 48px 0 #00c6ff66, 0 2px 16px 0 #00ffb433"
                  : "0 4px 16px 0 rgba(0,0,0,0.10)",
              border:
                idx === 3
                  ? "2.5px solid #00c6ff"
                  : "1.5px solid rgba(255,255,255,0.10)",
              transition: "all 0.35s cubic-bezier(.4,2,.6,1)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              cursor: "pointer",
              zIndex: idx === 3 ? 2 : 1,
              filter: idx === 3 ? "drop-shadow(0 0 24px #00c6ff88)" : "none",
              transform:
                idx === 3
                  ? "scale(1.06) translateY(-8px)"
                  : "scale(1) translateY(0)",
              "&:hover": {
                background:
                  idx === 3
                    ? "linear-gradient(135deg, rgba(0,255,180,0.22) 0%, rgba(0,198,255,0.22) 100%)"
                    : "rgba(0, 198, 255, 0.18)",
                boxShadow:
                  idx === 3
                    ? "0 20px 60px 0 #00c6ff99, 0 4px 24px 0 #00ffb455"
                    : "0 12px 40px 0 rgba(0, 198, 255, 0.30)",
                transform:
                  idx === 3
                    ? "scale(1.10) translateY(-16px) rotate(-1deg)"
                    : "scale(1.04) rotate(-1deg)",
              },
              boxSizing: "border-box",
              animation:
                idx === 3
                  ? "floatCard 3s ease-in-out infinite"
                  : "floatCardSmall 4s ease-in-out infinite",
              "@keyframes floatCard": {
                "0%, 100%": { transform: "scale(1.06) translateY(-8px)" },
                "50%": { transform: "scale(1.09) translateY(-18px)" },
              },
              "@keyframes floatCardSmall": {
                "0%, 100%": { transform: "scale(1) translateY(0)" },
                "50%": { transform: "scale(1.02) translateY(-6px)" },
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: idx === 3 ? "#00ffb4" : "#fff",
                mb: 1,
                fontSize: 22,
                letterSpacing: 1.5,
                textShadow:
                  idx === 3 ? "0 2px 16px #00ffb4cc" : "0 1px 4px #000",
                textAlign: "center",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                color: idx === 3 ? "#fff" : "#00c6ff",
                textShadow:
                  idx === 3
                    ? "0 2px 24px #00c6ff, 0 1px 0 #fff"
                    : "0 1px 4px #00c6ff",
                mb: 2,
                fontSize: 36,
                letterSpacing: 1.5,
                position: "relative",
                zIndex: 2,
              }}
            >
              {item.price}
              <br />
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: idx === 3 ? "#00ffb4" : "#00c6ff",
                  textShadow: idx === 3 ? "0 1px 8px #00ffb4" : "none",
                }}
              >
                تومان
              </span>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: idx === 3 ? "#fff" : "#e0e0e0",
                fontSize: 16,
                textAlign: "center",
                lineHeight: 1.8,
                px: 1,
                textShadow: idx === 3 ? "0 1px 8px #00c6ff" : "none",
                fontWeight: idx === 3 ? 600 : 400,
              }}
            >
              {item.body}
            </Typography>
            {/* Glass reflection and neon border effect */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                borderRadius: 6,
                background:
                  idx === 3
                    ? "linear-gradient(120deg, rgba(0,255,180,0.18) 0%, rgba(0,198,255,0.10) 80%)"
                    : "linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.02) 80%)",
                opacity: 0.7,
                zIndex: 1,
                boxShadow:
                  idx === 3
                    ? "0 0 32px 8px #00ffb4, 0 0 16px 2px #00c6ff"
                    : "none",
                animation:
                  idx === 3 ? "neonPulse 2.5s alternate infinite" : "none",
                "@keyframes neonPulse": {
                  "0%": {
                    boxShadow: "0 0 32px 8px #00ffb4, 0 0 16px 2px #00c6ff",
                  },
                  "100%": {
                    boxShadow: "0 0 48px 16px #00c6ff, 0 0 32px 8px #00ffb4",
                  },
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Lists;
