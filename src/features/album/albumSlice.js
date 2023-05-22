import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAlbum = createAsyncThunk('album/fetchAlbum', async (id) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
  return res.data;
})

export const albumSlice = createSlice({
  name: 'album',
  initialState: {
    albumOwner: undefined, // { id, name, email }
    loading: false,
    loaded: false,
    error: undefined,
    album: [],
  },
  reducers: {
    setAlbumOwner: (state, action) => {
      state.albumOwner = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAlbum.pending, (state, action) => {
      state.loading = true;
      state.loaded = false;
    })
    .addCase(fetchAlbum.fulfilled, (state, action) => {
      state.album = action.payload;
      state.error = undefined;
      state.loaded = true;
      state.loading = false;
    })
    .addCase(fetchAlbum.rejected, (state, action) => {
      state.error = action.payload;
      state.album = [action.payload];
      state.loaded = true;
      state.loading = false;
    })
  }

})

export const { setAlbumOwner } = albumSlice.actions

export default albumSlice.reducer