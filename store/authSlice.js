import { createSlice } from "@reduxjs/toolkit";
import { decodeToken } from "../src/utils";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Setear usuario tras login
    setUser: (state, action) => {
      state.user = decodeToken(action.payload.token).user;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.error = null;
    },
    // Logout
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    // Setear loading
    setAuthLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Setear error
    setAuthError: (state, action) => {
      state.error = action.payload;
    },
    // Actualizar usuario (ej. perfil)
    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { setUser, clearAuth, setAuthLoading, setAuthError, updateUser } =
  authSlice.actions;
export default authSlice.reducer;
