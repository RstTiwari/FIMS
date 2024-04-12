import PageHeader from "Component/PageHeader";
import SaveButton from "Component/SaveButton";
import PartyForm from "Form/AppForm/PartyForm";
import React from "react";

const AddParty = () => {
    return (
        <div style={{}}>
            <PageHeader  title={"ADD NEW PARTY"} />
            <PartyForm  />
        </div>
    );
};

export default AddParty;
