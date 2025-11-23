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
        <Card key={item.id} sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={140}
              image={item.image}
              alt="img1"
            />
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Cards;
