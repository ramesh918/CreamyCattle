import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import managersReducer from './managersSlice'
const store = configureStore({
  reducer: {
    auth: authReducer,
    manager: managersReducer
  }
});
export default store;