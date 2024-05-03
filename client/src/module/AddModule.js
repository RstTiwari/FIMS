import NotFound from "Component/NotFound";
import AddCrew from "Pages/Crew/AddCrew";
import AddParty from "Pages/Party/AddParty";
import AddVehicle from "Pages/Vehicle/AddVehicle";
import React from "react";
import { useParams } from "react-router-dom";

const AddModule = () => {
    const { entity } = useParams();
    let componentToRender = <NotFound />;
    switch (entity) {
        case "party":
            componentToRender = <AddParty />;
            break;
        case "crew":
            componentToRender = <AddCrew />;
        case "vehicle":
            componentToRender = <AddVehicle />;
    }
    console.log("entity", entity, componentToRender);
    return <>{componentToRender}</>;
};

export default AddModule;
