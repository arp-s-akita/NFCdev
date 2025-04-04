import { Box, CssBaseline } from "@mui/material";
import { Header } from "../organisms/Header";
import { WiFi } from "../molecules/WiFi";
import { Footer } from "../organisms/Footer";

export const WiFiPage = () => {
  return (
    <CssBaseline>
      <Box>
        <Header />
        <Box>
          <WiFi />
        </Box>
        <Footer />
      </Box>
    </CssBaseline>
  );
}; 