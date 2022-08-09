import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    // Button Theme
    MuiButton: {
      styleOverrides: {
        root: {
          // width: "71px",
          height: "32px",
          margin: "4px 0 24px",
          padding: "8px 12px",
          backgroundColor: "#48b3cf",
          fontFamily: "NotoSansCJKkr",
          fontSize: "13px",
          fontWeight: "500",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "1.23",
          letterSpacing: "0.6px",
          textAlign: "center",
          color: "#fff",
          "&:hover": {
            width: "71px",
            height: "32px",
            margin: "4px 0 24px",
            padding: "8px 12px",
            backgroundColor: "#48b3cf",
          },
        },
      },
    },
  },
});
