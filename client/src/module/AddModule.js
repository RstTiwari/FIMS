import NotFound from "Component/NotFound";
import AddCrew from "Pages/Crew/AddCrew";
import AddParty from "Pages/Party/AddParty";
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
    }
    return <>{componentToRender}</>;
};

export default AddModule;
