const dropDownData = async (req, res, next) => {
    try {
        const database = req.database; // taking it from middleware
        const data = await database.findAll();
        res.status(200).json({
            success: 1,
            result: data,
            message: "Data Fetched Successfully",
        });
    } catch (error) {
        /// need to Design error comman function for sending Error
    }
};

export default dropDownData;
