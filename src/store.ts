import { configureStore } from '@reduxjs/toolkit';
import  authReducer from './redux/auth/authSlice';

//root reducer
const store = configureStore({
  reducer: {
    auth: authReducer
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store