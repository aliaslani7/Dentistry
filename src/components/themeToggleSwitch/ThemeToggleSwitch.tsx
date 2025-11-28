import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import { useThemeMode } from "../../provider/ThemeProvider";
import { useTheme } from "@mui/material/styles";

const ThemeToggleSwitch = () => {
  const { toggleTheme } = useThemeMode();
  const theme = useTheme();
  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme.palette.mode === "dark" ? (
        <Brightness7
          sx={{
            color: theme.palette.customPaletteColors.header.headerIcon,
          }}
        />
      ) : (
        <Brightness4
          sx={{
            color: theme.palette.customPaletteColors.header.headerIcon,
          }}
        />
      )}
    </IconButton>
  );
};

export default ThemeToggleSwitch;
