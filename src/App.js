import React, { useState, useEffect } from "react";
import Weather from "./components/Weather.js";
import Crypto from "./components/Crypto.js";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Weather />
            <Crypto />
        </div>
    );
}

export default App;
