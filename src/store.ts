import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import navReducer from "./redux/nav/navSlice";

/**
 * Creates a Redux store with the specified reducers.
 *
 * @param {Object} reducer - The reducers to be combined into the store.
 * @returns {Object} - The Redux store.
 */
const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
