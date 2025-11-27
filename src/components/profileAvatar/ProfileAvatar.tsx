import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";

const ProfileAvatar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="پروفایل">
        <IconButton onClick={handleAvatarClick} size="small" sx={{ p: 0 }}>
          <Avatar sx={{ width: 28, height: 28 }} />
        </IconButton>
      </Tooltip>
      <Menu
        id="profileMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          پروفایل من
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          خروج
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileAvatar;
