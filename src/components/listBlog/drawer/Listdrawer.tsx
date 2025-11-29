import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";
import Lists from "../ListBlogData";

const ListDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Box textAlign={"center"} my={4}>
      <Box display="flex" justifyContent="center" alignItems="center" width="100%">
        <Button
          size="large"
          variant="contained"
          onClick={toggleDrawer(true)}
          fullWidth
          sx={{ maxWidth: "600px" }} // حداکثر عرض دلخواه
        >
          دانشنامه دندانپزشکی
        </Button>
      </Box>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        <Lists />
      </Drawer>
    </Box>
  );
};

export default ListDrawer;
