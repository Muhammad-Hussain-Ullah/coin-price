"use client";
import { useState, useEffect } from "react";

export default function CoinDetail() {
  const API_KEY = "caaa5387202916fc2cf13e78dbbc5f09";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <div className="parent">
      <h1>Live Cryptocurrency Prices</h1>
      <table>
        <thead>
          <tr>
            <th>Coin Name</th>
            <th>Price in &#36;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin</td>
            <td>&#36;{data?.rates?.BTC}
            </td>
          </tr>
          <tr>
            <td>Ethereum</td>
            <td>&#36;{data?.rates?.ETH}</td>
          </tr>
          <tr>
            <td>Doge Coin</td>
            <td>&#36;{data?.rates?.DOGE}</td>
          </tr>
          <tr>
            <td>Ripple&#40;XRP&#41;</td>
            <td>&#36;{data?.rates?.XRP}</td>
          </tr>
          <tr>
            <td>Avalanche</td>
            <td>&#36;{data?.rates?.AVAX}</td>
          </tr>
          <tr>
            <td>Data</td>
            <td>&#36;{data?.rates?.DSH}</td>
          </tr>
          <tr>
            <td>Litecoin</td>
            <td>&#36;{data?.rates?.LTC}</td>
          </tr>
          <tr>
            <td>Solana</td>
            <td>&#36;{data?.rates?.SOL}</td>
          </tr>
          <tr>
            <td>Tron</td>
            <td>&#36;{data?.rates?.TRX}</td>
          </tr>
          <tr>
            <td>Binance</td>
            <td>&#36;{data?.rates?.BNB}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
