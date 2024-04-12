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

//PreSaving method for This Schema
dropDownDataSchema.pre("save", function (next) {
    this.data.forEach((item) => {
        item.label = item.label.toUpperCase();
        item.value = item.label.toLowerCase();
        next();
    });
});
export default mongoose.model(
    "dropdownData",
    dropDownDataSchema,
    "dropdownData"
);
