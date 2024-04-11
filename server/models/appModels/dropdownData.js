import mongoose from "mongoose";

const dropDownDataSchema = new mongoose.Schema({
    entity: {
        type: String,
        require: true,
    },
    data: [
        {
            label: String,
            value: String,
        },
    ],
},{timestamps:true});


//PreSaving method for This Schema
dropDownDataSchema.pre("save", (next) => {
    data.forEach((item) => {
        item.label = item.label.toUpperCase();
        item.value = item.label.toLowerCase();
    });
});
export default mongoose.model(
    "dropdownData",
    dropDownDataSchema,
    "dropdownData"
);
