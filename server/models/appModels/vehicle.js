import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
    {
        vehicleClass: {
            type: "String",
            required: true,
        },
        registrationNo: {
            type: "String",
            required: true,
            unique: true,
        },
        registrationDate: {
            type: String,
        },
        roadTaxValidUpTo: {
            type: String,
        },
        insuranceValidUpTo: {
            type: String,
        },
        fitnessValidUpTo: {
            type: String,
        },
        permitType: {
            type: String,
        },
        permitValidUpTo: {
            type: String,
        },
        registrationValidUpTo: {
            type: String,
        },
        pucValidUpTo: {
            type: String,
        },
        chasisNumber: {
            type: String,
            unique: true,
        },
        engineNumber: {
            type: String,
            unique: true,
        },
        vehicleMaker: {
            type: String,
        },
        vehicleType: {
            type: String,
            required: true,
        },
        ownerName: {
            type: String,
            required: true,
        },
        firmName: {
            type: String,
            required: true,
        },
        perDayCharge: {
            type: Number,
        },
        perTripCharge: {
            type: Number,
        },
    },
    { timestamps: true, timeseries: true }
);

export default mongoose.model("vehicle", vehicleSchema, "vehicle");
