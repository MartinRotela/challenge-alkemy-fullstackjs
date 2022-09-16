import axios from 'axios';

export const financesApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
