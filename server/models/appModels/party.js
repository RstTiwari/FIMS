import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const partySchema = new mongoose.Schema(
    {
        partyType: {
            type: String,
            required: true,
        },
        firmType: {
            type: String,
            required: true,
        },
        partyName: {
            type: String,
            required: true,
        },
        addressLine1: {
            type: String,
            requiredd: true,
        },
        addressLine2: {
            type: String,
            requiredd: true,
        },
        addressLine3: {
            type: String,
        },
        landmark: {
            type: String,
        },
        city: {
            type: String,
            requiredd: true,
        },
        state: {
            type: String,
            requiredd: true,
        },
        country: {
            type: String,
            requiredd: true,
        },
        pinCode: {
            type: Number,
            requiredd: true,
        },
        telPhone1: {
            type: Number,
        },
        telPhone2: {
            type: Number,
        },
        countryCode: {
            type: Number,
            required: true,
        },
        mobNumber1: {
            type: Number,
            required: true,
            unique: true,
        },
        mobNumber2: {
            type: Number,
            required: true,
            unique: true,
        },
        emailId1: {
            type: String,
            required: true,
            unique: true,
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
            required: true,
            unique: true,
        },
        panNo: {
            type: String,
            required: true,
            unique: true,
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

partySchema.plugin(mongooseAutoPopulate);
export default mongoose.model("party", partySchema, "party");
