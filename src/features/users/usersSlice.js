import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
})

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    loaded: false,
    error: undefined,
    users: [],
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
      state.loaded = false;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.error = undefined;
      state.loaded = true;
      state.loading = false;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.payload;
      state.users = [action.payload];
      state.loaded = true;
      state.loading = false;
    })
  }

})

// Action creators are generated for each case reducer function
export const {  } = usersSlice.actions

export default usersSlice.reducer