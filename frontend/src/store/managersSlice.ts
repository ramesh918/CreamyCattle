// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ManagersState {
  managers: any;
}

const initialState: ManagersState = {
  managers: [],
};

const managersSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {
    getManagers: (state:any, action: PayloadAction<any>) => {
      state.managers = action.payload;
    },
  },
});

export const { getManagers } = managersSlice.actions;
export default managersSlice.reducer;
