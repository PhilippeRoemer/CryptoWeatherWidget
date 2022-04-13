import React, { useState, useEffect } from "react";
import axios from "axios";
import SpaceRocket from "../Rocket.png";

const Header = () => {
    const [currentTime, setCurrentTime] = useState([]);
    const [currentDate, setCurrentDate] = useState([]);
    const [currentAstronauts, setCurrentAstronauts] = useState([]);
    const [astronautInfo, setAstronautInfo] = useState([]);

    const Time = () => {
        const time = new Date();
        setCurrentTime(time.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true }));
    };

    const CalendarDate = () => {
        const date = new Date();
        setCurrentDate(date.toLocaleString("en-US", { month: "long", day: "2-digit", year: "numeric" }));
    };

    const AustronautData = () => {
        axios
            .get("http://api.open-notify.org/astros.json")
            .then((res) => {
                setCurrentAstronauts(res.data.number);
                setAstronautInfo(res.data.people);
            })
            .catch((error) => console.log(error));
    };

    /* Date and time refreshed every 1 second */
    useEffect(() => {
        Time();
        CalendarDate();
        const interval = setInterval(() => {
            Time();
            CalendarDate();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    /* Austronaut data is refreshed every 30 minutes*/
    useEffect(() => {
        AustronautData();
        const interval = setInterval(() => {
            AustronautData();
        }, 1800000);
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

            <div className="spaceContainer ">
                <div className="rocketContainer">
                    <h3>{currentAstronauts}</h3>
                    <img src={SpaceRocket} className="rocketIcon" />
                </div>
                <p className="spaceText">People in space</p>
                <div className="tooltiptext">
                    {astronautInfo.map((post) => {
                        const craft = post.craft;
                        const craftSearch = "http://www.google.com/search?q=" + post.craft;
                        const name = post.name;
                        return (
                            <div>
                                <p>
                                    <a href={craftSearch} target="_blank">
                                        {craft}
                                    </a>
                                    : {name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Header;
