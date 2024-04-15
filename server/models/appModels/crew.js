import mongoose, { Schema } from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const crewSchema = new Schema.mongoose(
    {
        crewType: {
            type: String,
            required: true,
        },
        designation: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        nickName: {
            type: String,
        },
        gender: {
            type: String,
        },
        dob: {
            type: String,
        },
        firmName: {
            type: String,
            required: true,
        },
        permanentAdress: {
            type: mongoose.Schema.ObjectId,
            ref: "address",
            required: true,
            autopopulate: true,
        },
        currentAddress: {
            type: mongoose.Schema.ObjectId,
            ref: "address",
            autopopulate: true,
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
        emailId: {
            type: String,
            require: true,
        },
        website: {
            type: String,
        },
        memberOfUnion: {
            type: String,
        },
        memberShipType: {
            type: String,
        },
        unionCardNo: {
            type: Number,
        },
        memberShipValidUpto: {
            type: Number,
            required: true,
        },
        drivingLicenceNo: {
            type: Number,
        },
        drivingLicenceType: {
            type: String,
            required: true,
        },
        drvingLiceneValidUpto: {
            type: Number,
            required: function () {
                return !!this.drivingLicenceNo;
            },
        },
        wages: {
            type: Number,
        },
        aadharNo: {
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
    { timeStamp: true }
);

crewSchema.plugin(mongooseAutoPopulate);
export default mongoose.model("crew", crewSchema, "crew");
