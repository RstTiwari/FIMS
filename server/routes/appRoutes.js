import express from "express";
import appController from "../controller/appController/index.js";
import databaseMidleware from "../middleware/database/databaseSelector.js";

const router = express.Router();

router.post("/dropDownData",  appController.dropDownData);  /// no middleware for database
router.post("/addDropDownData",  appController.addDropDownData);  /// no middleware for database
router.post("/addData", databaseMidleware, appController.addExcellData);
router.post("/create" ,databaseMidleware,appController.create)
export default router;
