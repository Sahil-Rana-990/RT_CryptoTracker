import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getapi = createAsyncThunk("api", async () => {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  return res.data
});

const initialState = {
  cryptoData: [],
};
export const CryptoReducer = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getapi.fulfilled,(state,action)=>{
        state.cryptoData=action.payload
    })
  }
});


