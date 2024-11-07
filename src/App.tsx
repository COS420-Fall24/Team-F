import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Home from "./Home.tsx";
import About from "./About.tsx";
import "./style/App.css";
import { ChakraProvider, Box } from "@chakra-ui/react";

function App(): React.JSX.Element {
    return (
        <ChakraProvider>
            <Router>
                <Navbar />
                <Box minH="100vh" bgColor="red.100">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Box>
            </Router>
        </ChakraProvider>
    );
}

export default App;
