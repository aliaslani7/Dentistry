import { grey } from "@mui/material/colors";
import type { customPaletteType } from "./paletteDataType";

export const customPaletteColors: customPaletteType = {
  dark: {
    header: {
      headerIcon: grey[500],
      headerText: "#FFFFFF",
      headerBackground: "#1976d2",
    },
    accordion: {
      descriptionBG: grey[800],
      background: grey[800],
    },
    blog: {
      textBlog: grey[900],
      listBG: grey[900],
    },
  },
  light: {
    header: {
      headerIcon: grey[600],
      headerText: "#1976d2",
      headerBackground: "#FFFFFF",
    },
    accordion: {
      descriptionBG: grey[100],
      background: grey[50],
    },
    blog: {
      textBlog: grey[900],
      listBG: grey[100],
    },
  },
};
