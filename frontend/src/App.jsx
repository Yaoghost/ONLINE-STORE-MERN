import { Box } from "@chakra-ui/react";
import CreatePage from "./pages/CreatePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
