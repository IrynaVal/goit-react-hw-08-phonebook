import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut, fetchCurrentUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isCurrentUserFetching: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state, action) {
      state.isCurrentUserFetching = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isCurrentUserFetching = false;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isCurrentUserFetching = false;
    },
  },
  isLoading: false,
  error: null,
});

export const authReducer = authSlice.reducer;
