import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { cardData } from "./CardData";
const Cards = () => {
  return (
    <Box display="flex" gap={2} flexWrap="wrap">
      {cardData.map((item) => (
        <Card key={item.id} sx={{ width: 345, height: 300 }}>
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
  );
};

export default Cards;
