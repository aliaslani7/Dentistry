import { grey } from "@mui/material/colors";
import type { customPaletteType } from "./paletteDataType";

export const customPaletteColors: customPaletteType = {
  dark: {
    header: {
      headerIcon: grey[500],
      headerText: "#FFFFFF",
      headerBackground: "#1976d2",
    },
    modal: {
      main: grey[900],
      background: grey[800],
    },
  },
  light: {
    header: {
      headerIcon: grey[600],
      headerText: "#1976d2",
      headerBackground: "#FFFFFF",
    },
    modal: {
      main: grey[100],
      background: grey[50],
    },
  },
};
