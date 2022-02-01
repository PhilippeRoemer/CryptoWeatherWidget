import React, { useState, useEffect } from "react";

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
            <h3>{currentTime}</h3>
            <h3>{currentDate}</h3>
        </div>
    );
};

export default Header;
