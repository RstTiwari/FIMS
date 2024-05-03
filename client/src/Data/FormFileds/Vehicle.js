import { type } from "@testing-library/user-event/dist/type";

const vehicleField = {
    vehicleClass: {
        label: "VEHICLE CLASS",
        type: "input",
        rules: [{ required: true, message: "Please input your VEHICLE CLASS" }],
    },
    registrationNo: {
        label: "REGISTRATION NO",
        type: "input",
        rules: [{ required: true, message: "Please input REGISTRATION NO " }],
    },
    registrationDate: {
        label: "REGISTRATION DATE",
        type: "date",
    },
    roadTaxValidUpTo: {
        label: "RD-TAX VALID UPTO",
        type: "date",
    },
    insuranceValidUpTo: {
        label: "INSU VALID UPTO",
        type: "date",
    },
    fitnessValidUpTo: {
        label: "FITNESS VALID UPTO",
        type: "date",
    },
    permitType: {
        label: "PERMIT TYPE",
        type: "select",
    },
    permitValidUpTo: {
        label: "PERMIT VALID UPTO",
        type: "date",
    },
    registrationValidUpTo: {
        label: "REG VALID UPTO",
        type: "date",
    },
    pucValidUpTo: {
        label: "PUC VALID UPTO",
        type: "date",
    },
    chasisNumber: {
        label: "CHASIS NO",
        type: "input",
    },
    engineNumber: {
        label: "ENGINE NO",
        type: "input",
    },
    vehicleMaker: {
        label: "VEHICLE MAKER",
        type: "input",
    },
    vehicleType: {
        label: "VEHICLE TYPE",
        type: "select",
        rules: [{ required: true, message: "Please input your VEHICLE TYPE" }],
    },
    ownerName: {
        label: "OWNER NAME",
        type: "input",
        rules: [{ required: true, message: "Please input your OWNER NAME" }],
    },
    firmName: {
        label: "FIRM NAME",
        type: "select",
        rules: [{ required: true, message: "Please input your FIRM NAME" }],
    },
    perDayCharge: {
        label: "CHARGES/DAY",
        type: "input",
    },
    perTripCharge: {
        label: "CHARGES/HOUR",
        type: "input",
    },
};

export default vehicleField;
