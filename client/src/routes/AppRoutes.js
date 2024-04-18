import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "../Pages/Dashbord/Index.js";
import Layout from "../Component/Layout";
import AddParty from "Pages/Party/AddParty.js";
import AddCrew from "Pages/Crew/AddCrew.js";
import CrewList from "Pages/Crew/CrewList.js";
import NotFound from "Component/NotFound.js";
import AddModule from "module/AddModule.js";
import PartyList from "Pages/Party/PartyList.js";

const Approuter = ({ userName, role }) => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" exact element={<Dashbord />} />
                <Route path="/party" exact element={<PartyList />} />
                <Route path="/crew" exact element={<CrewList />} />

                {/**Creating  Module Routes */}
                <Route path="/add/:entity"  exact element ={<AddModule />} />

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
