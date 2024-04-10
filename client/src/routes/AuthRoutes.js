import { Routes, Route, Navigate } from "react-router-dom";
import { App } from "antd";

import Login from "../Pages/Auth/Login";
import ForgotPassword from "Pages/Auth/ForgotPassword";

export default function AuthRouter() {
    return (
        <App>
            <Routes>
                <Route element={<Login />} path="/login" />
                <Route path="*" element={<Navigate to="/login" />} replace />
                <Route path="/forgotPassword" element={<ForgotPassword />} />/

            </Routes>
        </App>
    );
}
