import { Box, CssBaseline } from "@mui/material";
import { Header } from "../organisms/Header";
import { Items } from "../organisms/Items";
import { LifeIsCrossing } from "../organisms/LifeIsCrossing";
import { Footer } from "../organisms/Footer";

export const TopPage = () => {
  return (
    <CssBaseline>
      <Box>
        <Header />
        <Box>
          <Items />
          <LifeIsCrossing />
        </Box>
        <Footer />
      </Box>
    </CssBaseline>
  );
};
