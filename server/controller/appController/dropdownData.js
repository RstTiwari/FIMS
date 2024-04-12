import dropdownData from "../../models/appModels/dropdownData.js"; // as multiple enitity are there
const dropDownData = async (req, res, next) => {
    try {
        const entity = req.body.entity;
        const  data  = await dropdownData.findOne({ entity: entity }).select({data:1}).lean().exec();
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
