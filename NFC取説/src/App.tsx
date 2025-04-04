import { TopPage } from "./components/pages/TopPage";
import { WiFiPage } from "./components/pages/WiFiPage";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Box>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/wifi" element={<WiFiPage />} />
          </Routes>
        </Box>
      </div>
    </Router>
  );
}

export default App;
