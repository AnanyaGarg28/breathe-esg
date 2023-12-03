import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import navReducer from "./redux/nav/navSlice";

//root reducer
const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
