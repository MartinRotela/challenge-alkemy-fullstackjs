import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: '',
        uid: '',
        isLoading: false,
        errorMessage: '',
    },
    reducers: {
        startLoadingUser: (state) => {
            state.isLoading = true;
        },
        setUser: (state, action) => {
            state.isLoading = false;
            state.errorMessage = '';
            state.name = action.payload.name;
            state.uid = action.payload.uid;
        },
        setErrorMessage: (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
        },
        logout: (state) => {
            state.errorMessage = '';
            state.name = '';
            state.uid = '';
        },
    },
});
