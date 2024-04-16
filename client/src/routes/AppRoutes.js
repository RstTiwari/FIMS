import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "../Pages/Dashbord/Index.js";
import Layout from "../Component/Layout";
import AddParty from "Pages/Party/AddParty.js";
import AddCrew from "Pages/Crew/AddCrew.js";
import NotFound from "Component/NotFound.js";

const Approuter = ({ userName, role }) => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" exact element={<Dashbord />} />
                <Route path="/customer" exact element={<AddParty />} />
                <Route path="/crew" exact element={<AddCrew />} />

                {/**In case some one acess login page after being logged in */}
                <Route
                    path="/login"
                    element={<Navigate to="/dashboard" replace />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default Approuter;
