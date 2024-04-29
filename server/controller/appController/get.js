import databaseSelector from "../../helper/database/databaseSelector.js";

const get = async (req, res, next) => {
    try {
        let { pageNo, limit, entity, filters } = req.query;
        const database = databaseSelector(entity);
        let filter = {};

        // Iterate over each key in parsedFilters and add regex conditions
        if(filters){
            for (const key in filters) {
                filter[key] = { $regex: filters[key], $options: "i" }; // Case-insensitive regex search
            }
        }
      
        pageNo = parseInt(pageNo) || 0;
        limit = parseInt(limit) || 10;
        const skip = pageNo * limit; // skipping the number  as per pageNo and limit
        const filtredData = await database
            .find(filter)
            .skip(skip)
            .limit(limit)
            .lean();
        if (!filtredData || filtredData.length <= 0) {
            throw new Error("No data found Please change the filter");
        }
        
        const total = await database.countDocuments(filter)
        res.status(200).json({
            success: 1,
            result: filtredData,
            total:total,
            message: "Data Fetched Succefully",
        });
    } catch (error) {
        console.error(error);
    }
};

export default get;
