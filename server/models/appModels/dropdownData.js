import mongoose from "mongoose";

const dropDownDataSchema = new mongoose.Schema(
    {
        entity: {
            type: String,
            required: true,
        },
        data: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
    },
    { timestamps: true }
);


export default mongoose.model(
    "dropdownData",
    dropDownDataSchema,
    "dropdownData"
);
