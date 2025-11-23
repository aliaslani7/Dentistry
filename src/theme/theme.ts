import { createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";

// ایجاد cache برای RTL
export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// ایجاد theme با فونت IRANSans
export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "'IRANSans', sans-serif",
  },
});
