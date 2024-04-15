import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

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
        address: {
            type: mongoose.Schema.ObjectId,
            ref: "address",
            required: true,
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

partySchema.plugin(mongooseAutoPopulate);
export default mongoose.model("party", partySchema, "party");
