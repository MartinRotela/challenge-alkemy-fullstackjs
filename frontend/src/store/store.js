import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice';
import { entriesSlice } from './slices/entriesSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        entries: entriesSlice.reducer,
    },
});
