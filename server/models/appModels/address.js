import mongoose, { Schema } from "mongoose";
const addressSchema = new Schema.mongoose({
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
},{timeStamp:true});

export default mongoose.model("address", addressSchema, "address");
