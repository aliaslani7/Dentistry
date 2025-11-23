import { Box, Divider, Typography } from "@mui/material";
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
  return (
    <Box display={"flex"} flexDirection={"row"} gap={2} alignContent={"center"} alignItems={"center"}>
      <Box display={"flex"} gap={2} sx={{ userSelect: "none" }}>
        <Typography variant="h6" fontWeight={700}>
          Dentistry
        </Typography>
      <Divider orientation="vertical" flexItem />
      </Box>
      {headerItems?.map((item) => (
          <Box key={item.id} sx={{ userSelect: "none" }}>
          <Typography>{item.title}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Header;
