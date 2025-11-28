// --- Add custom palette type for footerBg and customPaletteColors ---
import type { themeModePaletteType } from "../theme/paletteDataType";
declare module "@mui/material/styles" {
  interface Palette {
    footerBg: string;
    customPaletteColors: themeModePaletteType;
  }
  interface PaletteOptions {
    footerBg?: string;
    customPaletteColors?: themeModePaletteType;
  }
}
import { createContext, useContext, useMemo, useState } from "react";
import { customPaletteColors } from "../theme/customPalette";
import type { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { grey } from "@mui/material/colors";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

type ThemeMode = "light" | "dark";

interface ThemeModeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined
);

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  }
  return context;
};

interface ThemeModeProviderProps {
  children: ReactNode;
}

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        direction: "rtl",
        palette: {
          mode,
          footerBg: mode === "dark" ? grey[900] : grey[100],
          customPaletteColors: customPaletteColors[mode],
        },
        typography: {
          fontFamily: "'IRANSans', sans-serif",
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ThemeModeContext.Provider>
  );
};
