import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
    name: 'auth',
    initialState: {
        entries: [],
        isLoading: false,
        errorMessage: '',
    },
    reducers: {
        startLoadingEntries: (state) => {
            state.isLoading = true;
        },
        setEntries: (state, action) => {
            state.isLoading = false;
            state.errorMessage = '';
            state.entries = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
    },
});

export const { startLoadingEntries, setEntries, setErrorMessage } =
    entriesSlice.actions;
