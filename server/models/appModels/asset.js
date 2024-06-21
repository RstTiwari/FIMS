import mongoose from "mongoose";
const assetSchema = new mongoose.Schema({});

export default mongoose.model("asset", assetSchema, "asset");
