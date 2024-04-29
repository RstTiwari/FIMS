import PageHeader from "Component/PageHeader";
import SaveButton from "Component/SaveButton";
import PartyForm from "Form/AppForm/PartyForm";
import React from "react";
import UseFormSubmission from "CutomHooks/UseFormSubmission";
const AddParty = () => {
    const handleSubmit = UseFormSubmission();
    const onFormFinish = async(value) => {
        await handleSubmit("party", value, );
    };

    return (
        <div style={{}}>
            <PageHeader title={"ADD NEW PARTY"} cancelRoute={"party"} />
            <PartyForm onFormFinish={onFormFinish} partyData={null} />
        </div>
    );
};

export default AddParty;
