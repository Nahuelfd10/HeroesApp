import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from "./PublicRouter";


export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/login" element={
                    <PublicRouter>
                        <LoginScreen />
                    </PublicRouter>
                }
                />

                {/* <Route path="/login" element={<LoginScreen />} /> */}

                <Route path='/*' element={
                    <PrivateRouter>
                        <DashboardRoutes />
                    </PrivateRouter>
                }
                />

                {/* <Route path='/*' element={<DashboardRoutes />} /> */}

            </Routes>
        </BrowserRouter>
    )
}