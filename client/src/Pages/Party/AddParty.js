import PageHeader from "Component/PageHeader";
import SaveButton from "Component/SaveButton";
import PartyForm from "Form/AppForm/PartyForm";
import React from "react";
import PartyFormFileds from "Data/FormFileds/PartyFiled";
const AddParty = () => {
    return (
        <div style={{}}>
            <PageHeader title={"ADD NEW PARTY"} />
            <PartyForm fields={PartyFormFileds} />
        </div>
    );
};

export default AddParty;
