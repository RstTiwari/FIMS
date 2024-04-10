import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        removed: {
            type: Boolean,
            default: false,
        },
        enabled: {
            type: Boolean,
            default: false,
        },
        name: {
            type: "String",
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        photo: {
            type: String,
            trim: true,
        },
        role: {
            type: String,
            default: "staff",
            enum: [
                "superadmin",
                "admin",
                "staffAdmin",
                "staff",
                "createOnly",
                "readOnly",
            ],
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);
