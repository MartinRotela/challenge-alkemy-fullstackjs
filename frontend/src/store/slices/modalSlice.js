import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open: false,
        activeEntry: '',
    },
    reducers: {
        openModal: (state, action) => {
            state.open = true;
            state.activeEntry = action.payload;
        },
        closeModal: (state) => {
            state.open = false;
            state.activeEntry = '';
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
