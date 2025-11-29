import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";
import Lists from "../ListBlogData";

const ListDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Box>
      <Button onClick={toggleDrawer(true)}>مقالات</Button>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        <Lists />
      </Drawer>
    </Box>
  );
};

export default ListDrawer;
