import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './features/todos/todoSlice';

export const makeStore = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
