import mongoose  from "mongoose";

const partySchema = new mongoose.Schema(
    {
        partyType: {
            type: String,
            require: true,
        },
        firmType: {
            type: String,
            require: true,
        },
        partyName: {
            type: String,
            require: true,
        },
        addressLine1: {
            type: String,
            require: true,
        },
        addressLine2: {
            type: String,
            require: true,
        },
        addressLine3: {
            type: String,
        },
        landmark: {
            type: String,
        },
        city: {
            type: String,
            require: true,
        },
        state: {
            type: String,
            require: true,
        },
        country: {
            type: String,
            require: true,
        },
        pinCode: {
            type: Number,
            require: true,
        },
        stdCode: {
            type: Number,
        },
        telPhone1: {
            type: Number,
        },
        telPhone2: {
            type: Number,
        },
        countryCode: {
            type: Number,
            require: true,
        },
        mobNumber1: {
            type: Number,
            require: true,
        },
        mobNumber2: {
            type: Number,
            require: true,
        },
        emailId1: {
            type: String,
            require: true,
        },
        emailId2: {
            type: String,
        },
        website: {
            type: String,
        },
        gstType: {
            type: String,
        },
        gstNo: {
            type: String,
            require: true,
        },
        panNo: {
            type: String,
            require: true,
        },
        tanNo: {
            type: String,
        },
        tinNo: {
            type: String,
        },
    },
    { timestamps: true }
);


export default mongoose.model("party", partySchema,"party");
