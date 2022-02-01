import React, { useState, useEffect } from "react";

const Header = () => {
    const [currentTime, setCurrentTime] = useState([]);

    const Time = () => {
        const time = new Date();
        setCurrentTime(time.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true }));
    };

    useEffect(() => {
        Time();
        const interval = setInterval(() => {
            Time();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h3>{currentTime}</h3>
        </div>
    );
};

export default Header;
