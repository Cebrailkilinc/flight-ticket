import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../slices/homeSlice';

const store = configureStore({
  reducer: {
    home: homeSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
