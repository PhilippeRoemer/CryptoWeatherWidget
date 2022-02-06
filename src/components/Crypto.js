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
                <input type="checkbox" id="bitcoin" value="bitcoin%2C%20"></input>
                <label htmlFor="bitcoin">
                    Bitcoin
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="ethereum" value="ethereum%2C%20"></input>
                <label htmlFor="ethereum">
                    Ethereum
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="cardano" value="cardano%2C%20"></input>
                <label htmlFor="cardano">
                    Cardano
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="solana" value="solana%2C%20"></input>
                <label htmlFor="solana">
                    Solana
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="iota" value="iota%2C%20"></input>
                <label htmlFor="iota">
                    IOTA
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/692/large/IOTA_Swirl.png?1604238557" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="xrp" value="ripple%2C%20"></input>
                <label htmlFor="xrp">
                    XRP
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="polkadot" value="polkadot%2C%20"></input>
                <label htmlFor="polkadot">
                    Polkadot
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="dogecoin" value="dogecoin%2C%20"></input>
                <label htmlFor="dogecoin">
                    Dogecoin
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="avalanche" value="avalanche-2%2C%20"></input>
                <label htmlFor="avalanche">
                    Avalanche
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="shibaInu" value="shiba-inu%2C%20"></input>
                <label htmlFor="shibaInu">
                    Shiba Inu
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="cosmos" value="cosmos%2C%20"></input>
                <label htmlFor="cosmos">
                    Cosmos
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="litecoin" value="litecoin%2C%20"></input>
                <label htmlFor="litecoin">
                    Litecoin
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="chainlink" value="chainlink%2C%20"></input>
                <label htmlFor="chainlink">
                    Chainlink
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="uniswap" value="uniswap%2C%20"></input>
                <label htmlFor="uniswap">
                    Uniswap
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png?1600306604" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="tron" value="tron%2C%20"></input>
                <label htmlFor="tron">
                    Tron
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="algorand" value="algorand%2C%20"></input>
                <label htmlFor="algorand">
                    Algorand
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/4380/large/download.png?1547039725" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="stellar" value="stellar%2C%20"></input>
                <label htmlFor="stellar">
                    Stellar
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png?1552356157" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="hedera" value="hedera-hashgraph%2C%20"></input>
                <label htmlFor="hedera">
                    Hedera
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/3688/large/hbar.png?1637045634" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="vechain" value="vechain%2C%20"></input>
                <label htmlFor="vechain">
                    VeChain
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/1167/large/VeChain-Logo-768x725.png?1547035194" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="elrond" value="elrond-erd-2%2C%20"></input>
                <label htmlFor="elrond">
                    Elrond
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/12335/large/elrond3_360.png?1626341589" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="monero" value="monero%2C%20"></input>
                <label htmlFor="monero">
                    Monero
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/69/large/monero_logo.png?1547033729" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="loopring" value="loopring%2C%20"></input>
                <label htmlFor="loopring">
                    Loopring
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/913/large/LRC.png?1572852344" />
                </label>
            </div>
            <div>
                <input type="checkbox" id="nano" value="nano%2C%20"></input>
                <label htmlFor="nano">
                    Nano
                    <img className="coin-list-img" src="https://assets.coingecko.com/coins/images/756/large/nano.png?1637232468" />
                </label>
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
                <div className="loadingRing"></div>
            )}
        </div>
    );
};

export default Crypto;
