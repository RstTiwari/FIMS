import databaseSelector from "../../helper/database/databaseSelector.js";
const dropDownData = async (req, res, next) => {
    try {
        const entity = req.body.entity;
        const database = databaseSelector("dropdownData")
        const  data  = await database.findOne({ entity: entity }).select({data:1}).lean().exec();
        res.status(200).json({
            success: 1,
            result: data ? data.data : [],
            message: "Data Fetched Successfully",
        });
    } catch (error) {
        /// need to Design error comman function for sending Error
    }
};

export default dropDownData;
