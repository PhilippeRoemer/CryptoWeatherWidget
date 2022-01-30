import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./App.css";

function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [newSearch, setNewSearch] = useState(false);

    /* Currently */
    const [location, setLocation] = useState([]);
    const [region, setRegion] = useState([]);
    const [currentTemp, setCurrentTemp] = useState([]);
    const [currentCondition, setCurrentCondition] = useState([]);
    const [currentConditionIcon, setCurrentConditionIcon] = useState([]);

    /* Today */
    const [day0ConditionIcon, setDay0ConditionIcon] = useState([]);
    const [day0High, setDay0High] = useState([]);
    const [day0Low, setDay0Low] = useState([]);

    /* Tomorrow */
    const [day1ConditionIcon, setDay1ConditionIcon] = useState([]);
    const [day1High, setDay1High] = useState([]);
    const [day1Low, setDay1Low] = useState([]);
    const [day1, setDay1] = useState([]);

    /* After Tomorrow */
    const [day2ConditionIcon, setDay2ConditionIcon] = useState([]);
    const [day2High, setDay2High] = useState([]);
    const [day2Low, setDay2Low] = useState([]);
    const [day2, setDay2] = useState([]);

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

                /* Tomorrow's Weather */
                const day1 = new Date();
                day1.setDate(day1.getDate() + 1);
                setDay1(day1.toLocaleString("default", { weekday: "short" }));
                setDay1ConditionIcon(res.data.forecast.forecastday[1].day.condition.icon);
                setDay1High(Math.trunc(res.data.forecast.forecastday[1].day.maxtemp_f));
                setDay1Low(Math.trunc(res.data.forecast.forecastday[1].day.mintemp_f));

                /* After Tomorrow's Weather */
                const day2 = new Date();
                day2.setDate(day2.getDate() + 2);
                setDay2(day2.toLocaleString("default", { weekday: "short" }));
                setDay2ConditionIcon(res.data.forecast.forecastday[2].day.condition.icon);
                setDay2High(Math.trunc(res.data.forecast.forecastday[2].day.maxtemp_f));
                setDay2Low(Math.trunc(res.data.forecast.forecastday[2].day.mintemp_f));
            })
            .catch((errors) => {
                console.error(errors);
            });
    };

    const CryptoData = () => {
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=bitcoin%2C%20ethereum%2C%20iota%2C%20xrp%2C%20litecoin%2C%20dogecoin%2C%20cardano%2C%20monero%2C%20stellar%2C%20nano%2C%20chainlink&order=market_cap_desc&per_page=50&page=1&sparkline=true")
            .then((response) => {
                console.log(response.data);
            })
            .catch((errors) => console.log(errors));
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
                const updateTime = new Date();
                console.log("Weather data updated at: " + updateTime.toLocaleTimeString());
            }, 1800000);
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    /* Pulls crypto data on load and updates every 10 seconds */
    useEffect(() => {
        CryptoData();
        const interval = setInterval(() => {
            CryptoData();
            const updateTime = new Date();
            console.log("Crypto data updated at: " + updateTime.toLocaleTimeString());
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            <h1>Weather API</h1>
            <input type="text" size="15" maxLength="5" id="zipcode"></input>
            <button onClick={() => setIsRunning(true)}>Submit</button>
            <h1>
                Forecast for {location}, {region}
            </h1>
            <div className="forecastContainer">
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
                        {day0High}&#176; | {day0Low}&#176;
                    </p>
                </div>

                {/* Tomorrow */}
                <div>
                    <h3>{day1}</h3>
                    <img src={day1ConditionIcon} />
                    <p>
                        {day1High}&#176; | {day1Low}&#176;
                    </p>
                </div>

                {/* After Tomorrow */}
                <div>
                    <h3>{day2}</h3>
                    <img src={day2ConditionIcon} />
                    <p>
                        {day2High}&#176; | {day2Low}&#176;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
