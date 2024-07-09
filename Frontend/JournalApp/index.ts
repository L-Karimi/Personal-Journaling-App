// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

// slices/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
