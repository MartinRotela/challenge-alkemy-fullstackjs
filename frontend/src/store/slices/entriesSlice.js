import { createSlice } from '@reduxjs/toolkit';

export const entriesSlice = createSlice({
    name: 'entries',
    initialState: {
        entries: [],
        isLoading: false,
        errorMessage: '',
        balance: 0,
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
        setBalance: (state, action) => {
            state.balance = action.payload;
            state.isLoading = false;
        },
        setErrorMessage: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        updateEntry: (state, action) => {
            state.entries = state.entries.map((e) =>
                e.id === action.payload.id ? action.payload : e
            );
        },
        deleteEntry: (state, action) => {
            state.entries = state.entries.filter(
                (e) => e.id !== action.payload
            );
        },
        addNewEntry: (state, action) => {
            state.entries = [action.payload, ...state.entries];
        },
    },
});

export const {
    startLoadingEntries,
    setEntries,
    setBalance,
    setErrorMessage,
    addNewEntry,
    updateEntry,
    deleteEntry,
} = entriesSlice.actions;
