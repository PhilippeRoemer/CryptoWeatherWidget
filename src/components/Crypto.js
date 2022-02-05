import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Crypto = () => {
    const [coins, setCoins] = useState([]);

    const CryptoData = () => {
        var txt = "";
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        for (var checkbox of checkboxes) {
            txt = txt + checkbox.value;
        }

        const selectedCoins = txt;

        axios
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=" + selectedCoins + "order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d")
            .then((res) => {
                setCoins(res.data);
            })
            .catch((errors) => console.log(errors));
    };

    return (
        <div className="cryptoContainer">
            <div>
                <input class="coinCheckbox" type="checkbox" value="bitcoin%2C%20"></input>
                <label>Bitcoin</label>
            </div>
            <div>
                <input class="coinCheckbox" type="checkbox" value="ethereum%2C%20"></input>
                <label>Ethereum</label>
            </div>
            <div>
                <input class="coinCheckbox" type="checkbox" value="cardano%2C%20"></input>
                <label>Cardano</label>
            </div>
            <div>
                <input class="coinCheckbox" type="checkbox" value="iota%2C%20"></input>
                <label>IOTA</label>
            </div>

            <div>
                <button type="submit" onClick={CryptoData}>
                    Submit
                </button>
            </div>

            {coins.length > 0 ? (
                <table>
                    <tr>
                        <th></th>
                        <th>Coin</th>
                        <th>Current Price</th>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>ATH</th>
                        <th>Market Cap</th>
                        <th>7d Chart</th>
                    </tr>
                    {coins.map((post) => {
                        const rank = post.market_cap_rank;
                        const name = post.name;
                        const price = post.current_price;
                        const marketcap = post.market_cap;
                        const image = post.image;
                        const priceChange_1h = post.price_change_percentage_1h_in_currency;
                        const priceChange_24h = post.price_change_percentage_24h;
                        const priceChange_7d = post.price_change_percentage_7d_in_currency;
                        const ath = post.ath;
                        const chart = post.sparkline_in_7d.price;

                        return (
                            <tr>
                                <td>
                                    <img src={image} className="coin-img" />
                                </td>
                                <td>
                                    <h3>{name}</h3>
                                    <sub>Rank: {rank}</sub>
                                </td>
                                <td>{price > ath ? <p className="ATHincoming">${price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</p> : <p>${price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</p>}</td>
                                <td>
                                    {priceChange_1h < 0 && priceChange_1h > -10 ? (
                                        <p className="red">{priceChange_1h.toFixed(2)}%</p>
                                    ) : priceChange_1h < -10 ? (
                                        <p className="redBold">{priceChange_1h.toFixed(2)}%</p>
                                    ) : priceChange_1h < 10 && priceChange_1h > 0 ? (
                                        <p className="green">{priceChange_1h.toFixed(2)}%</p>
                                    ) : (
                                        priceChange_1h > 10(<p className="greenBold">{priceChange_1h.toFixed(2)}%</p>)
                                    )}
                                </td>
                                <td>
                                    {priceChange_24h < 0 && priceChange_24h > -10 ? (
                                        <p className="red">{priceChange_24h.toFixed(2)}%</p>
                                    ) : priceChange_24h < -10 ? (
                                        <p className="redBold">{priceChange_24h.toFixed(2)}%</p>
                                    ) : priceChange_24h < 10 && priceChange_24h > 0 ? (
                                        <p className="green">{priceChange_24h.toFixed(2)}%</p>
                                    ) : (
                                        <p className="greenBold">{priceChange_24h.toFixed(2)}%</p>
                                    )}
                                </td>
                                <td>
                                    {priceChange_7d < 0 && priceChange_7d > -10 ? (
                                        <p className="red">{priceChange_7d.toFixed(2)}%</p>
                                    ) : priceChange_7d < -10 ? (
                                        <p className="redBold">{priceChange_7d.toFixed(2)}%</p>
                                    ) : priceChange_7d < 10 && priceChange_7d > 0 ? (
                                        <p className="green">{priceChange_7d.toFixed(2)}%</p>
                                    ) : (
                                        <p className="greenBold">{priceChange_7d.toFixed(2)}%</p>
                                    )}
                                </td>
                                <td>${ath.toLocaleString()}</td>
                                <td>${marketcap.toLocaleString()}</td>
                                <td className="sparklineGraph">
                                    <Sparklines data={chart}>{priceChange_7d < 0 ? <SparklinesLine color="#ea3943" /> : <SparklinesLine color="#16c784" />}</Sparklines>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            ) : (
                <div class="loadingRing"></div>
            )}
        </div>
    );
};

export default Crypto;
