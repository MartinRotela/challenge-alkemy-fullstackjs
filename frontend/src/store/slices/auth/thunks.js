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
