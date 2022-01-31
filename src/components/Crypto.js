import React, { useState, useEffect } from "react";
import axios from "axios";

const Crypto = () => {
    const [coins, setCoins] = useState([]);

    const CryptoData = () => {
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=bitcoin%2C%20ethereum%2C%20iota%2C%20&order=market_cap_desc&per_page=50&page=1&sparkline=true")
            .then((response) => {
                setCoins(response.data);
                console.log(response.data);
            })
            .catch((errors) => console.log(errors));
    };

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
        <div>
            <div className="forecastContainer">
                {/*  <img src={cryptoLogo} /> */}
                {coins.map((post) => (
                    <div>
                        <p>{post.ath}</p>
                        <p>{post.name}</p>
                        <img src={post.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Crypto;
