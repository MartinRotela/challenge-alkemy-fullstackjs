import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/authSlice';
import { categoriesSlice } from './slices/categoriesSlice';
import { entriesSlice } from './slices/entriesSlice';
import { modalSlice } from './slices/modalSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        entries: entriesSlice.reducer,
        categories: categoriesSlice.reducer,
        modal: modalSlice.reducer,
    },
});
