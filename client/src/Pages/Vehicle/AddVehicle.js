import PageHeader from "Component/PageHeader";
import VehicleForm from "Form/AppForm/VehicleForm";
import React from "react";
import UseFormSubmission from "CutomHooks/UseFormSubmission";
const AddVehicle = () => {
    const handleSubmit = UseFormSubmission();
    const onFormFinish = async(value) => {
        await handleSubmit("vehicle", value, );
    };

    return (
        <div style={{}}>
            <PageHeader title={"ADD NEW VEHICLE"} cancelRoute={"vehicle"} />
            <VehicleForm onFormFinish={onFormFinish} partyData={null} />
        </div>
    );
};

export default AddVehicle;
