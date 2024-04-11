import express from "express";
import appController from "../controller/appController/index.js";
import databaseMiddleware from "../middleware/database/databaseSelector.js";

const router = express.Router();

router.post("/dropDownData", databaseMiddleware, appController.dropDownData);

export default router;
