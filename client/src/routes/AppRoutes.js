import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "../Pages/Dashbord/Index.js";
import Layout from "../Component/Layout";

const Approuter = ({userName,role}) => {
    return (
        <Routes>
            <Route element={<Layout   />}>
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" exact element={<Dashbord />} />
                

                {/**In case some one acess login page after being logged in */}
                <Route
                    path="/login"
                    element={<Navigate to="/dashboard" replace />}
                />
            </Route>
        </Routes>
    );
};

export default Approuter;
