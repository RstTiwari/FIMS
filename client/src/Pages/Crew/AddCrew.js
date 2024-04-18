import PageHeader from "Component/PageHeader";
import CrewForm from "Form/AppForm/CrewForm";
import React from "react";
import useFormSubmission from "CutomHooks/UseFormSubmission";
const AddCrew = () => {
    const handleSubmit = useFormSubmission();
    const onFormFinish = async (value) => {
        await handleSubmit("crew", value);
    };

    return (
        <div >
            <PageHeader title={"ADD NEW CREW"} cancelRoute={"crew"} />
            <CrewForm onFormFinish={onFormFinish} crewData={null} />
        </div>
    );
};

export default AddCrew;
