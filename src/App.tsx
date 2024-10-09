import React from "react";
import "./App.css";

const logoPath: string = require("./logo.svg") as string;

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logoPath} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>COS 420 Fall 2024 - Team F</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
