import { Routes, Route } from 'react-router-dom';

import { CategoriesScreen } from '../categories/CategoriesScreen';
import { HomeScreen } from '../home/HomeScreen';

export const PrivateRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-containter">
                <Routes>
                    <Route path="home" element={<HomeScreen />} />
                    <Route path="categories" element={<CategoriesScreen />} />
                </Routes>
            </div>
        </div>
    );
};
