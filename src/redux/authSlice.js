// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    login: (state) => {
      state.token = "fake-jwt-token-12345"; // demo only
    },
    logout: (state) => {
      state.token = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
