import mongoose from "mongoose";

const crewSchema = new mongoose.Schema(
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
        permanentAddress: {
            addressLine1: {
                type: String,
                required: true,
            },
            addressLine2: {
                type: String,
                required: true,
            },
            addressLine3: {
                type: String,
            },
            landmark: {
                type: String,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
            pinCode: {
                type: Number,
                required: true,
            },
        },
        currentAddress: {
            addressLine1: {
                type: String,
                required: true,
            },
            addressLine2: {
                type: String,
                required: true,
            },
            addressLine3: {
                type: String,
            },
            landmark: {
                type: String,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
            pinCode: {
                type: Number,
                required: true,
            },
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
        },
        drivingLicenceNo: {
            type: Number,
        },
        drivingLicenceType: {
            type: String,
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

export default mongoose.model("crew", crewSchema, "crew");
