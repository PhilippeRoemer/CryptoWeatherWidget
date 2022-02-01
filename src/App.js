import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Weather from "./components/Weather.js";
import Crypto from "./components/Crypto.js";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Weather />
            <Crypto />
        </div>
    );
}

export default App;
