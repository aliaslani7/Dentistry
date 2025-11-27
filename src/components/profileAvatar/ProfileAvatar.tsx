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
          <Avatar />
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
        <MenuItem onClick={handleClose} sx={{ fontSize: 13, minHeight: 32 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <span style={{ fontSize: 13 }}>پروفایل من</span>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ fontSize: 13, minHeight: 32 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <span style={{ fontSize: 13 }}>خروج</span>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileAvatar;
