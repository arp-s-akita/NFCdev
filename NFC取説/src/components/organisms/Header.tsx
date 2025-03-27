import { AppBar, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'M PLUS Rounded 1c', sans-serif",
  },
});

export const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Box
          sx={{
            height: "30px",
            backgroundColor: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              fontSize: "15px",
              width: "80%",
              alignContent: "flex-start",

              fontWeight: "900",
            }}
          >
            NFCproduct
          </Typography>
        </Box>

        <Box
          sx={{ height: "1px", width: "100%", backgroundColor: "#bbbbbb" }}
        ></Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90px",
            backgroundColor: "#ffffff",
          }}
        >
          <Box sx={{ width: "80%", display: "flex", gap: "40px" }}>
            <Typography
              sx={{
                color: "#000000",
                fontWeight: "900",
              }}
            >
              取説一覧
            </Typography>
            <Typography sx={{ fontWeight: "900", color: "#000000" }}>
              メゾンマークについて
            </Typography>
            <Typography sx={{ fontWeight: "900", color: "#000000" }}>
              QA
            </Typography>
          </Box>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};
