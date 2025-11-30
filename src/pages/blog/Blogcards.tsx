import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import blogcardData from "./BlogData";
import { Link as RouterLink } from "react-router-dom";

const BlogCards = () => {
  // Split cards into rows of three
  const rows = [];
  for (let i = 0; i < blogcardData.length; i += 3) {
    rows.push(blogcardData.slice(i, i + 3));
  }

  return (
    <Box pt={5}>
      <Typography textAlign="center" variant="h3" sx={{ mb: 2 }}>
        مقاله‌های تخصصی در حوزه ایمپلنت
      </Typography>

      {rows.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 16,
            mb: 2,
          }}
        >
          {row.map((card) => (
            <Box
              key={card.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                flex: "1 1 300px",
                minWidth: 280,
                maxWidth: 345,
              }}
            >
              <Card
                sx={{
                  width: 345,
                  height: 370,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <CardActionArea
                  component={RouterLink}
                  to={`/blog/${card.id}`}
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  }}
                >
                  <CardMedia
                    image={card.image}
                    title={card.title}
                    sx={{ height: 180 }}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">{card.title}</Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {card.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions sx={{ mt: "auto" }}>
                  <Button
                    size="small"
                    color="primary"
                    component={RouterLink}
                    to={`/blog/${card.id}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    ادامه مطلب
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default BlogCards;
