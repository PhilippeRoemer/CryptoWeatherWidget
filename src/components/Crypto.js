import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import SettingsIcon from "../SettingsIcon.png";

const Crypto = () => {
    const [coins, setCoins] = useState([]);
    const [coinSearch, setCoinSearch] = useState(false);

    const CryptoData = () => {
        var txt = "";
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        for (var checkbox of checkboxes) {
            txt = txt + checkbox.value;
        }

        const selectedCoins = txt;

        if (txt.length > 0) {
            axios
                .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=" + selectedCoins + "order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d")
                .then((res) => {
                    setCoins(res.data);
                    setCoinSearch(true);
                    document.getElementById("coinContainer").style.display = "none";
                })
                .catch((errors) => console.log(errors));
        } else {
            alert("Please select at least one cryptocurrency.");
        }
    };

    /* Pulls crypto data on load and updates every 10 seconds */
    useEffect(() => {
        if (coinSearch === true) {
            const interval = setInterval(() => {
                CryptoData();
                const updateTime = new Date();
                console.log("Crypto data updated at: " + updateTime.toLocaleTimeString());
            }, 10000);
            return () => clearInterval(interval);
        }
    }, [coinSearch]);

    const showCoins = () => {
        document.getElementById("coinContainer").style.display = "block";
    };

    return (
        <div className="cryptoContainer">
            <div id="coinContainer">
                <div className="cryptoList">
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="bitcoin" value="bitcoin%2C%20"></input>
                        <label htmlFor="bitcoin" className="cryptoLabel">
                            Bitcoin
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="ethereum" value="ethereum%2C%20"></input>
                        <label htmlFor="ethereum" className="cryptoLabel">
                            Ethereum
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="cardano" value="cardano%2C%20"></input>
                        <label htmlFor="cardano" className="cryptoLabel">
                            Cardano
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="solana" value="solana%2C%20"></input>
                        <label htmlFor="solana" className="cryptoLabel">
                            Solana
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="iota" value="iota%2C%20"></input>
                        <label htmlFor="iota" className="cryptoLabel">
                            IOTA
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/692/large/IOTA_Swirl.png?1604238557" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="polkadot" value="polkadot%2C%20"></input>
                        <label htmlFor="polkadot" className="cryptoLabel">
                            Polkadot
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="dogecoin" value="dogecoin%2C%20"></input>
                        <label htmlFor="dogecoin" className="cryptoLabel">
                            Dogecoin
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="avalanche" value="avalanche-2%2C%20"></input>
                        <label htmlFor="avalanche" className="cryptoLabel">
                            Avalanche
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="cosmos" value="cosmos%2C%20"></input>
                        <label htmlFor="cosmos" className="cryptoLabel">
                            Cosmos
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="litecoin" value="litecoin%2C%20"></input>
                        <label htmlFor="litecoin" className="cryptoLabel">
                            Litecoin
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="chainlink" value="chainlink%2C%20"></input>
                        <label htmlFor="chainlink" className="cryptoLabel">
                            Chainlink
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="uniswap" value="uniswap%2C%20"></input>
                        <label htmlFor="uniswap" className="cryptoLabel">
                            Uniswap
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="tron" value="tron%2C%20"></input>
                        <label htmlFor="tron" className="cryptoLabel">
                            Tron
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="algorand" value="algorand%2C%20"></input>
                        <label htmlFor="algorand" className="cryptoLabel">
                            Algorand
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="stellar" value="stellar%2C%20"></input>
                        <label htmlFor="stellar" className="cryptoLabel">
                            Stellar
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="hedera" value="hedera-hashgraph%2C%20"></input>
                        <label htmlFor="hedera" className="cryptoLabel">
                            Hedera
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/3688/large/hbar.png?1637045634" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="vechain" value="vechain%2C%20"></input>
                        <label htmlFor="vechain" className="cryptoLabel">
                            VeChain
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/1167/large/VeChain-Logo-768x725.png?1547035194" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="elrond" value="elrond-erd-2%2C%20"></input>
                        <label htmlFor="elrond" className="cryptoLabel">
                            Elrond
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/12335/large/elrond3_360.png?1626341589" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="monero" value="monero%2C%20"></input>
                        <label htmlFor="monero" className="cryptoLabel">
                            Monero
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="loopring" value="loopring%2C%20"></input>
                        <label htmlFor="loopring" className="cryptoLabel">
                            Loopring
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/913/large/LRC.png?1572852344" />
                        </label>
                    </div>
                    <div className="cryptoCheckbox">
                        <input type="checkbox" className="checkbox" id="nano" value="nano%2C%20"></input>
                        <label htmlFor="nano" className="cryptoLabel">
                            Nano
                            <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/756/large/nano.png?1637232468" />
                        </label>
                    </div>
                </div>
                <div className="cryptoList">
                    <button className="cryptoSubmit" type="submit" onClick={CryptoData}>
                        Submit
                    </button>
                </div>
            </div>
            {coins.length > 0 ? (
                <div>
                    <div onClick={showCoins} className="selectCoinsDiv">
                        <img src={SettingsIcon} className="cogIcon"></img>
                        <h4>Select Coins</h4>
                    </div>
                    <p>Crypto Updated at: </p>
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
                </div>
            ) : (
                <div class="loadingRing" id="loading"></div>
            )}
        </div>
    );
};

export default Crypto;
