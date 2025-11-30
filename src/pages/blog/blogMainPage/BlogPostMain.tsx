import {
  Box,
  Breadcrumbs,
  Typography,
  Link as MUILink,
  useTheme,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UpdateIcon from "@mui/icons-material/Update";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { grey } from "@mui/material/colors";
import { Link as RouterLink, useParams } from "react-router-dom";
import blogcardData from "../BlogData";
import {
  Stack,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const BlogPostMain = () => {
  const theme = useTheme();
  const { id } = useParams();
  let post = null;
  let otherPosts = [];
  if (id) {
    post = blogcardData.find((item) => String(item.id) === id);
    otherPosts = blogcardData.filter((item) => String(item.id) !== id);
  } else {
    otherPosts = blogcardData;
  }

  return (
    <Box px={{ xs: 2, md: 10, lg: 30 }} py={3}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <MUILink
          component={RouterLink}
          to="/"
          underline="hover"
          color="inherit"
        >
          خانه
        </MUILink>
        <Typography sx={{ color: "text.primary" }}>بلاگ</Typography>
      </Breadcrumbs>
      {id ? (
        post ? (
          <Stack direction={{ xs: "column", md: "row" }} gap={4}>
            <Box flex={2}>
              <Typography variant="h4" sx={{ mt: 3, mb: 2, fontWeight: 700 }}>
                {post.title}
              </Typography>
              <Box display="flex" gap={2} mb={2}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    bgcolor: theme.palette.customPaletteColors.blog.listBG,
                    p: 0.5,
                    borderRadius: 1,
                    fontSize: 14,
                  }}
                >
                  <CalendarMonthIcon sx={{ fontSize: 18, ml: 0.5 }} />
                  انتشار: ۱۴۰۴/۸/۲۶
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    bgcolor: theme.palette.customPaletteColors.blog.listBG,
                    p: 0.5,
                    borderRadius: 1,
                    fontSize: 14,
                  }}
                >
                  <UpdateIcon sx={{ fontSize: 18, ml: 0.5 }} />
                  بروزرسانی: ۱۴۰۴/۹/۴
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    bgcolor: theme.palette.customPaletteColors.blog.listBG,
                    p: 0.5,
                    borderRadius: 1,
                    fontSize: 14,
                  }}
                >
                  <ChatBubbleOutlineIcon sx={{ fontSize: 18, ml: 0.5 }} />۰
                  دیدگاه
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  {post.body}
                </Typography>
              </Box>
              {post.image && (
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <img
                    style={{
                      borderRadius: 20,
                      maxWidth: 500,
                      boxShadow: "0 4px 24px #0002",
                    }}
                    src={post.image}
                    alt={post.title}
                  />
                </Box>
              )}
            </Box>
            <Box
              flex={1}
              bgcolor={theme.palette.customPaletteColors.blog.listBG}
              p={2}
              borderRadius={3}
              maxWidth={300}
            >
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600, color: grey[800] }}
              >
                سایر مقالات
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <List>
                {otherPosts.map((item) => (
                  <ListItem
                    key={item.id}
                    disablePadding
                    sx={{ display: "flex", alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold",
                        marginLeft: 8,
                        fontSize: 22,
                        lineHeight: 2.5,
                      }}
                    >
                      &bull;
                    </span>
                    <ListItemButton
                      component={RouterLink}
                      to={`/blog/${item.id}`}
                      sx={{ pl: 0 }}
                    >
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
        ) : (
          <Typography color="error" mt={4}>
            مقاله مورد نظر پیدا نشد.
          </Typography>
        )
      ) : (
        <Typography mt={4}>لطفاً یک مقاله را انتخاب کنید.</Typography>
      )}
    </Box>
  );
};

export default BlogPostMain;
