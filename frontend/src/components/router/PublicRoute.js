import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, isAuth }) => {
    return !isAuth ? children : <Navigate to="/" />;
};
