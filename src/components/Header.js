import React, { useState, useEffect } from "react";
import axios from "axios";
import SpaceRocket from "../Rocket.png";

const Header = () => {
    const [currentTime, setCurrentTime] = useState([]);
    const [currentDate, setCurrentDate] = useState([]);

    const Time = () => {
        const time = new Date();
        setCurrentTime(time.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true }));
    };

    const CalendarDate = () => {
        const date = new Date();
        setCurrentDate(date.toLocaleString("en-US", { month: "long", day: "2-digit", year: "numeric" }));
    };

    /* Date and time refreshed every second */
    useEffect(() => {
        Time();
        CalendarDate();
        const interval = setInterval(() => {
            Time();
            CalendarDate();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="headerContainer">
            <div>
                <h1 className="time">{currentTime}</h1>
            </div>

            <div>
                <h3 className="date">{currentDate}</h3>
            </div>
        </div>
    );
};

export default Header;
