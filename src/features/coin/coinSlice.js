import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ENDPOINTS } from '../../constants/endpoint';

export const fetchCoinMarket = createAsyncThunk(
  'coin/fetchCoinMarket', 
  async (params) => {
    const res = await axios.get(ENDPOINTS.COINS_MARKETS, {params});
    return res.data;
})

export const fetchCoinDetail = createAsyncThunk(
  'coin/fetchCoinDetail', 
  async (id, { getState }) => {
    const { coinStore } = getState();
    if (coinStore.coin?.id == id) {
      return coinStore.coin
    }
    const res = await axios.get(`${ENDPOINTS.COIN_DETAIL}/${id}?localization=false`);
    return res.data;
})

export const coinSlice = createSlice({
  name: 'coin',
  initialState: {
    filters: undefined,
    loading: false,
    loaded: false,
    error: undefined,
    coins: [],
    coin: {
      name: '',
      image: {large: ''},
      symbol: '',
      categories: [],
      coingecko_score: '',
      links: {blockchain_site: []}
    }
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCoinMarket.pending, (state, action) => {
      state.loading = true;
      state.loaded = false;
    })
    .addCase(fetchCoinMarket.fulfilled, (state, action) => {
      state.coins = action.payload;
      state.error = undefined;
      state.loaded = true;
      state.loading = false;
    })
    .addCase(fetchCoinMarket.rejected, (state, action) => {
      state.error = action.payload;
      state.coins = [action.payload];
      state.loaded = true;
      state.loading = false;
    })
    .addCase(fetchCoinDetail.pending, (state, action) => {
      state.loading = true;
      state.loaded = false;
    })
    .addCase(fetchCoinDetail.fulfilled, (state, action) => {
      state.coin = action.payload;
      state.error = undefined;
      state.loaded = true;
      state.loading = false;
    })
    .addCase(fetchCoinDetail.rejected, (state, action) => {
      state.error = action.payload;
      state.coin = [action.payload];
      state.loaded = true;
      state.loading = false;
    })
  }
})

export const { setFilters } = coinSlice.actions

export default coinSlice.reducer