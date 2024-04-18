import PageHeader from "Component/PageHeader";
import React from "react";

const PartyList = () => {
    return (
        <div>
            <PageHeader
                title={"list of party"}
                subTitle={"add party"}
                addRoute={"party"}
                cancelRoute={"dashboard"}
            />
        </div>
    );
};

export default PartyList;
