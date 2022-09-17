import axios from 'axios';
import { financesApi } from '../../../api/financesApi';
import {
    setBalance,
    setEntries,
    setErrorMessage,
    startLoadingEntries,
} from '../entriesSlice';

export const startSettingEntries = (email, password) => {
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
