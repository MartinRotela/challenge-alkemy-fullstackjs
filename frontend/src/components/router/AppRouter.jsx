import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { startChecking } from '../../store/slices/auth/thunks';
import { LoadingScreen } from '../ui/loading/LoadingScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const { uid, isLoading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const loading = useMemo(() => isLoading, [isLoading]);
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    return loading ? (
        <LoadingScreen />
    ) : (
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
