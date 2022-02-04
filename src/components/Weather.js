import React, { useState, useEffect } from "react";
import RainIcon from "../RainIcon.png";
import axios from "axios";

const Weather = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [newSearch, setNewSearch] = useState(false);
    const [forecastUpdate, setForecastUpdate] = useState(null);

    /* Currently */
    const [location, setLocation] = useState(null);
    const [region, setRegion] = useState([]);
    const [currentTemp, setCurrentTemp] = useState([]);
    const [currentCondition, setCurrentCondition] = useState([]);
    const [currentConditionIcon, setCurrentConditionIcon] = useState([]);

    /* Today */
    const [day0ConditionIcon, setDay0ConditionIcon] = useState([]);
    const [day0Rain, setDay0Rain] = useState([]);
    const [day0High, setDay0High] = useState([]);
    const [day0Low, setDay0Low] = useState([]);

    /* Tomorrow */
    const [day1ConditionIcon, setDay1ConditionIcon] = useState([]);
    const [day1Rain, setDay1Rain] = useState([]);
    const [day1High, setDay1High] = useState([]);
    const [day1Low, setDay1Low] = useState([]);
    const [day1, setDay1] = useState([]);

    /* After Tomorrow */
    const [day2ConditionIcon, setDay2ConditionIcon] = useState([]);
    const [day2Rain, setDay2Rain] = useState([]);
    const [day2High, setDay2High] = useState([]);
    const [day2Low, setDay2Low] = useState([]);
    const [day2, setDay2] = useState([]);

    /* Sunrise and Sunset */
    const [sunrise, setSunrise] = useState([]);
    const [sunset, setSunset] = useState([]);

    const CurrentWeather = () => {
        const zip = document.getElementById("zipcode").value;

        axios
            .get("https://api.weatherapi.com/v1/forecast.json?key=04bfe3901ff14893882233129221801&q=" + zip + "&days=7")
            .then((res) => {
                /* Current Weather */
                setLocation(res.data.location.name);
                setRegion(res.data.location.region);
                setCurrentTemp(Math.trunc(res.data.current.temp_f));
                setCurrentCondition(res.data.current.condition.text);
                setCurrentConditionIcon(res.data.current.condition.icon);

                /* Today's Weather */
                setDay0ConditionIcon(res.data.forecast.forecastday[0].day.condition.icon);
                setDay0High(Math.trunc(res.data.forecast.forecastday[0].day.maxtemp_f));
                setDay0Low(Math.trunc(res.data.forecast.forecastday[0].day.mintemp_f));
                setDay0Rain(res.data.forecast.forecastday[0].day.daily_chance_of_rain);

                /* Tomorrow's Weather */
                const day1 = new Date();
                day1.setDate(day1.getDate() + 1);
                setDay1(day1.toLocaleString("default", { weekday: "short" }));
                setDay1ConditionIcon(res.data.forecast.forecastday[1].day.condition.icon);
                setDay1High(Math.trunc(res.data.forecast.forecastday[1].day.maxtemp_f));
                setDay1Low(Math.trunc(res.data.forecast.forecastday[1].day.mintemp_f));
                setDay1Rain(res.data.forecast.forecastday[1].day.daily_chance_of_rain);

                /* After Tomorrow's Weather */
                const day2 = new Date();
                day2.setDate(day2.getDate() + 2);
                setDay2(day2.toLocaleString("default", { weekday: "short" }));
                setDay2ConditionIcon(res.data.forecast.forecastday[2].day.condition.icon);
                setDay2High(Math.trunc(res.data.forecast.forecastday[2].day.maxtemp_f));
                setDay2Low(Math.trunc(res.data.forecast.forecastday[2].day.mintemp_f));
                setDay2Rain(res.data.forecast.forecastday[2].day.daily_chance_of_rain);

                /* Sunrise and Sunset */
                setSunrise(res.data.forecast.forecastday[0].astro.sunrise);
                setSunset(res.data.forecast.forecastday[0].astro.sunset);

                /* Updated */
                const updateTime = new Date();
                setForecastUpdate("Weather Updated at: " + updateTime.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true }));
            })
            .catch((errors) => {
                console.error(errors);
            });
    };
    const newHandleSearch = () => {
        setNewSearch(true);
    };

    /* Pulls weather data on submit and updates every 30 minutes */
    useEffect(() => {
        if (isRunning || newSearch === true) {
            CurrentWeather();
            newHandleSearch();
            setIsRunning(false);
            const interval = setInterval(() => {
                CurrentWeather();
            }, 1800000);
            return () => clearInterval(interval);
        }
    }, [isRunning, newSearch]);

    return (
        <div>
            <div className={location === null ? "zipCodeContainer" : "hideDiv"}>
                <h2>Local Forecast</h2>
                <br />
                <input type="text" size="15" maxLength="5" id="zipcode" placeholder="Enter ZIP Code" className="zipInput"></input>
                <button onClick={() => setIsRunning(true)} className="zipSubmit">
                    Submit
                </button>
            </div>

            <div>
                <h3 className={location === null ? "hideDiv" : "location"}>
                    Forecast for {location}, {region}
                </h3>
                <div className={location === null ? "hideDiv" : "weatherContainer"}>
                    {/* Currently */}
                    <div>
                        <h3>Currently</h3>
                        <div className="align">
                            <p className="currentTemp">{currentTemp}&#176;</p>
                            <img src={currentConditionIcon} />
                        </div>
                        <p>{currentCondition}</p>
                    </div>

                    {/* Today */}
                    <div>
                        <h3>Today</h3>
                        <img src={day0ConditionIcon} />
                        <p>
                            <span className="highTemp">{day0High}&#176;</span> | {day0Low}&#176;
                        </p>
                        <div className="rainChance">
                            <img src={RainIcon} className="rainIcon" />
                            <p>{day0Rain}%</p>
                        </div>
                    </div>

                    {/* Tomorrow */}
                    <div>
                        <h3>{day1}</h3>
                        <img src={day1ConditionIcon} />
                        <p>
                            <span className="highTemp">{day1High}&#176;</span> | {day1Low}&#176;
                        </p>
                        <div className="rainChance">
                            <img src={RainIcon} className="rainIcon" />
                            <p>{day1Rain}%</p>
                        </div>
                    </div>

                    {/* After Tomorrow */}
                    <div>
                        <h3>{day2}</h3>
                        <img src={day2ConditionIcon} />
                        <p>
                            <span className="highTemp">{day2High}&#176;</span> | {day2Low}&#176;
                        </p>
                        <div className="rainChance">
                            <img src={RainIcon} className="rainIcon" />
                            <p>{day2Rain}%</p>
                        </div>
                    </div>

                    {/* Sunrise and Sunset */}
                    <div>
                        <h3>Sunrise</h3>
                        <p>{sunrise}</p>
                        <br />
                        <h3>Sunset</h3>
                        <p>{sunset}</p>
                        <br />
                        <p className="weatherUpdate">{forecastUpdate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
