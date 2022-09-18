import axios from 'axios';
import { financesApi } from '../../../api/financesApi';
import {
    addNewEntry,
    deleteEntry,
    setBalance,
    setEntries,
    setErrorMessage,
    startLoadingEntries,
    updateEntry,
} from '../entriesSlice';

export const startSettingEntries = () => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingEntries());
            const token = localStorage.getItem('token');
            const { data } = await financesApi.get('/entries/', {
                headers: { 'x-token': token },
            });
            const { data: balanceData } = await financesApi.get(
                '/entries/balance',
                {
                    headers: { 'x-token': token },
                }
            );
            const { balance } = balanceData;
            const { entries } = data;
            dispatch(setEntries(entries));
            dispatch(setBalance(balance));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const err = error.response.data;
                const { msg } = err;
                dispatch(setErrorMessage(msg));
            } else {
                throw new Error('An unexpected error ocurred');
            }
        }
    };
};

export const startUpdateEntry = (id, newEntry) => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await financesApi.put(`/entries/${id}`, newEntry, {
                headers: { 'x-token': token },
            });
            dispatch(updateEntry(data));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const err = error.response.data;
                const { msg } = err;
                dispatch(setErrorMessage(msg));
            } else {
                throw new Error('An unexpected error ocurred');
            }
        }
    };
};

export const startDeleteEntry = (id) => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            await financesApi.delete(`/entries/${id}`, {
                headers: { 'x-token': token },
            });
            dispatch(deleteEntry(id));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const err = error.response.data;
                const { msg } = err;
                dispatch(setErrorMessage(msg));
            } else {
                throw new Error('An unexpected error ocurred');
            }
        }
    };
};

export const startAddNewEntry = (entry) => {
    return async (dispatch) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await financesApi.post(
                `/entries/new`,
                { ...entry },
                {
                    headers: { 'x-token': token },
                }
            );
            const { newEntry } = data;
            dispatch(addNewEntry(newEntry));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const err = error.response.data;
                const { msg } = err;
                dispatch(setErrorMessage(msg));
            } else {
                throw new Error('An unexpected error ocurred');
            }
        }
    };
};
