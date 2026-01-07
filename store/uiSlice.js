import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  isModalOpen: false,
  theme: "light", // light | dark
  notifications: [],
  sidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Toggle menu
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
    // Toggle modal
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    // Cambiar tema
    setTheme: (state, action) => {
      state.theme = action.payload; // light | dark
    },
    // Agregar notificación
    addNotification: (state, action) => {
      const notification = {
        id: Date.now(),
        type: action.payload.type, // success | error | warning | info
        message: action.payload.message,
        duration: action.payload.duration || 3000,
      };
      state.notifications.push(notification);
    },
    // Remover notificación
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notif) => notif.id !== action.payload
      );
    },
    // Limpiar todas las notificaciones
    clearNotifications: (state) => {
      state.notifications = [];
    },
    // Toggle sidebar
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const {
  toggleMenu,
  setMenuOpen,
  toggleModal,
  setModalOpen,
  setTheme,
  addNotification,
  removeNotification,
  clearNotifications,
  toggleSidebar,
  setSidebarOpen,
} = uiSlice.actions;

export default uiSlice.reducer;
