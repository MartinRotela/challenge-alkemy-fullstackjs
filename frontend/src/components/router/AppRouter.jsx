import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { HomeScreen } from '../home/HomeScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/" element={<HomeScreen />} />
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};
