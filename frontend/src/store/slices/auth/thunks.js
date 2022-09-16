import { financesApi } from '../../../api/financesApi';
import { setErrorMessage, setUser, startLoadingUser } from '../authSlice';
import axios from 'axios';

export const startLogin = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingUser());
            const { data } = await financesApi.post('/users/', {
                email,
                password,
            });
            localStorage.setItem('token', data.token);
            dispatch(setUser(data));
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
export const startRegister = (name, email, password) => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingUser());
            const { data } = await financesApi.post('/users/new', {
                name,
                email,
                password,
            });
            localStorage.setItem('token', data.token);
            dispatch(setUser(data));
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

export const startChecking = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        const { data } = await financesApi.get('/users/renew', {
            headers: {
                'x-token': token,
            },
        });
        const { token: newToken, ...userData } = data;
        localStorage.clear();
        localStorage.setItem('token', newToken);
        dispatch(setUser(userData));
    };
};
