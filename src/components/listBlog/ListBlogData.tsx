import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import { listData } from "./listData";

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
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} p={2}>
      <Typography>لیست مقالات دندانپزشکی</Typography>
      <Box
        width={1500}
        displayPrint={"flex"}
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        gap={2}
        sx={{
          overflowX: "hidden",
          scrollbarWidth: "thin",
        }}
        onWheel={handleWheel}
      >
        {visibleItems.map((item, idx) => (
          <Box
            key={item.id}
            borderRadius={2}
            p={2}
            width={200}
            minWidth={200}
            height={idx === 3 ? 450 : 400}
            minHeight={idx === 3 ? 450 : 400}
            bgcolor={grey[200]}
            textAlign={"start"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            boxSizing={"border-box"}
            sx={{ transition: "height 0.3s" }}
          >
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="caption">{item.body}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Lists;
