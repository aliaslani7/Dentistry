import { Instagram, WhatsApp, X } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";

const SocialMedia = () => {
      const theme = useTheme();
      const iconColor = theme.palette.text.primary;

    return (
        <Box pt={1} mx={-2}>
          <IconButton>
            <Instagram sx={{ color: iconColor, fontSize: 40 }} />
          </IconButton>
          <IconButton>
            <X sx={{ color: iconColor, fontSize: 40 }} />
          </IconButton>
          <IconButton>
            <WhatsApp sx={{ color: iconColor, fontSize: 40 }} />
          </IconButton>
        </Box>
     );
}

export default SocialMedia;