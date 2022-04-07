import React, { useState, useEffect } from "react";
import axios from "axios";
import SpaceRocket from "../Rocket.png";

const Header = () => {
    const [currentTime, setCurrentTime] = useState([]);
    const [currentDate, setCurrentDate] = useState([]);
    const [currentAstronauts, setCurrentAstronauts] = useState([]);

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

    useEffect(() => {
        axios
            .get("http://api.open-notify.org/astros.json")
            .then((res) => {
                console.log(res.data.number);
                setCurrentAstronauts(res.data.number);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="headerContainer">
            <div>
                <h1 className="time">{currentTime}</h1>
            </div>

            <div>
                <h3 className="date">{currentDate}</h3>
            </div>

            <div className="spaceContainer">
                <div className="rocketContainer">
                    <h3>{currentAstronauts}</h3>
                    <img src={SpaceRocket} className="rocketIcon" />
                </div>
                <p className="spaceText">People in Space</p>
            </div>
        </div>
    );
};

export default Header;
