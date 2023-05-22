import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: undefined
  },
  reducers: {
    login: (state, action) => {
        // action { email, password }
        const token = 'egfjhfgafsjffdash';
        localStorage.setItem('token_id', token);
        state.user = { 
            email: action.payload.email,
            username: 'cenedesetommaso@gmail.com',
            token
        }
    }
  }
})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions

export default userSlice.reducer