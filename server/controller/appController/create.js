import databaseSelector from "../../helper/database/databaseSelector.js";
const create = async (req, res) => {
    try {
        const entity = req.body.entity
        const database = databaseSelector(entity);
        const payload = req.body.payload;
        console.log(payload,database,entity);
        const newData = new database(payload);
        const savedData = await newData.save();

        if (!savedData) {
            throw new Error("failed to Add Data");
        }
        res.status(200).json({
            success: 1,
            result: [],
            message: "Saved Succeffully",
        });
    } catch (error) {
        console.error("error in saving the data",error);
    }
};

export default create;
