import { Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-containter">
                <Routes>
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="register" element={<RegisterScreen />} />
                </Routes>
            </div>
        </div>
    );
};
