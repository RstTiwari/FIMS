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
    const data = this.data;
    data.forEach((item, index) => {
        // Modify each item in the data array
        data[index].label = item.label.toUpperCase();
        data[index].value = item.value.toLowerCase();
    });
    // After modifying all items, call next to continue with the save operation
    next();
});
export default mongoose.model(
    "dropdownData",
    dropDownDataSchema,
    "dropdownData"
);
