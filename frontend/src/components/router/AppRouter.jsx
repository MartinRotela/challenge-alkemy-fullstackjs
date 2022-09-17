import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { startChecking } from '../../store/slices/auth/thunks';
import { HomeScreen } from '../home/HomeScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const { uid } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/auth/*"
                    element={
                        <PublicRoute isAuth={!!uid}>
                            <AuthRouter />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PrivateRoute isAuth={!!uid}>
                            <PrivateRouter />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="*"
                    element={<Navigate replace to="/auth/login" />}
                />
            </Routes>
        </BrowserRouter>
    );
};
