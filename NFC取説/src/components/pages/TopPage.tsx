import { Box, CssBaseline } from "@mui/material";
import { Header } from "../organisms/Header";
import { Slide } from "../organisms/Slide";

export const TopPage = () => {
  return (
    <CssBaseline>
      <Box sx={{ height: "1000px" }}>
        <Header></Header>
        <Slide></Slide>
      </Box>
    </CssBaseline>
  );
};
