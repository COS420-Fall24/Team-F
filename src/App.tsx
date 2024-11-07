import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Home from "./Home.tsx";
import "./style/App.css";

function App(): React.JSX.Element {
    return (
        <Router>
            <Navbar />
        </Router>
    );
}

export default App;
