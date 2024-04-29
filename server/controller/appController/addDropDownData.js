import databaseSelector from "../../helper/database/databaseSelector.js";
const addDropDownData = async (req, res, next) => {
    try {
        const payload = req.body;
        const entity = payload.entity;

        // selecting database dynamically 
        const database = databaseSelector("dropdownData")

        // check if the Same entity exist
        const existData = await database.findOne({ entity: entity });
        if (existData) {
            const newData = payload.data[0];
            newData.label = newData.label.toUpperCase(); // making it proper case before updating
            newData.value = newData.value.toLowerCase   (); // making it proper case before updating
            const updateObj = {
                $push: { data: newData },
            };
            const updateData = await database.updateOne(
                { entity: entity },
                updateObj
            );
            if (updateData.nModified <= 0) {
                throw new Error("Failed to add Data");
            }
            res.status(200).json({
                success: 1,
                result: [],
                message: "Data added successfully",
            });
        } else {
            const newData = new dropdownData(payload);
            await newData.save();
            res.status(200).json({
                success: 1,
                result: [],
                message: "Data added successfully",
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export default addDropDownData;
