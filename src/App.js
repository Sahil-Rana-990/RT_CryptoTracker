import React, { useEffect } from "react";
import { getapi } from "./Reducer/CryptoReducer";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getapi());
  }, []);

  const { cryptoData } = useSelector((state) => state);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Crypto Tracker</h1>
      {cryptoData.map((val) => {
        return (
          <div
            style={{
              width: "80%",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              margin:"10px auto",
              alignItems: "center",
              border:"2px solid black",
              padding:"80px 0"
            }}
          >
            <img src={val.image} alt="" width={50} height={50} />
            <div >
              <span>Name:-{val.name}</span><br/>
              <span>Current Price:-{val.current_price}</span><br/>
              <span>Market Cap:-{val.market_cap}</span><br/>
              <span>Max Supply:-{val.max_supply}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
