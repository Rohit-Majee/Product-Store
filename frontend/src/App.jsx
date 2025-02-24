import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const CreatePage = lazy(() => import("./pages/CreatePage"));

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
