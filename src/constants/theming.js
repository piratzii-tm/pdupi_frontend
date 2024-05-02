import { createTheme } from "@mui/material";

export const Colors = {
  barberry: "#E5DD0E",
  cod_gray: "#111111",
  tuatara: "#2D2D2C",
  bandicoot: "#84836C",
  mineshaft: "#2A2A2A",
};

export const Fonts = {
  koulen: ["Koulen", "sans-serif"],
  mohave: ["Mohave", "sans-serif"],
  montserrat: ["Montserrat", "sans-serif"],
};

export const muiTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderStyle: "none",
          border: `2px solid ${Colors.barberry}`,
          borderRadius: "0.75rem",
        },
      },
    },
  },
});
