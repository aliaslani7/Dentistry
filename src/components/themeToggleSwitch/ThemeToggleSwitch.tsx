import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import { useThemeMode } from "../../provider/ThemeProvider";
import { useTheme } from "@mui/material/styles";

const ThemeToggleSwitch = () => {
  const { mode, toggleTheme } = useThemeMode();
  const theme = useTheme();
  const palette = theme.palette.customPaletteColors[mode];
  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "dark" ? (
        <Brightness7
          sx={{
            color: palette.header.headerIcon,
          }}
        />
      ) : (
        <Brightness4
          sx={{
            color: palette.header.headerIcon,
          }}
        />
      )}
    </IconButton>
  );
};

export default ThemeToggleSwitch;
