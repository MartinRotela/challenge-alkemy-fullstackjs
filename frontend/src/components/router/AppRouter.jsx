import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../home/HomeScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const { uid } = useSelector((state) => state.auth);
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
                    path="/"
                    element={
                        <PrivateRoute isAuth={!!uid}>
                            <HomeScreen />
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
