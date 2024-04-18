import PageHeader from "Component/PageHeader";
import React from "react";

const CrewList = () => {
    return (
        <div>
            <PageHeader
                title={"LIST OF CREW"}
                subTitle={"ADD CREW"}
                addRoute={"crew"}
                cancelRoute={"dashboard"}
            />
        </div>
    );
};

export default CrewList;
