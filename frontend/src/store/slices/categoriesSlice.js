import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        isLoading: false,
        categories: [],
        errorMessage: '',
    },
    reducers: {
        startLoadingCategories: (state) => {
            state.isLoading = true;
        },
        setCategories: (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
            state.errorMessage = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
    },
});

export const { startLoadingCategories, setCategories, setErrorMessage } =
    categoriesSlice.actions;
