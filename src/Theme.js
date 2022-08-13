import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 375,
        md: 768,
        lg: 1024,
        xl: 1440,
      },
    },
  });
  
  export default theme;