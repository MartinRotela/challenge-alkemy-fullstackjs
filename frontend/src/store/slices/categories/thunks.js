import axios from 'axios';
import { financesApi } from '../../../api/financesApi';
import {
    setCategories,
    setErrorMessage,
    startLoadingCategories,
} from '../categoriesSlice';

export const startSettingCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingCategories());
            const token = localStorage.getItem('token');
            const { data } = await financesApi.get('/categories/', {
                headers: { 'x-token': token },
            });
            const { categories } = data;
            console.log(categories);
            dispatch(setCategories(categories));
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
