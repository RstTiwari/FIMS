import vehicle from "../../models/appModels/vehicle.js";
import party from "../../models/appModels/party.js";
import crew from "../../models/appModels/crew.js";
import dropdownData from "../../models/appModels/dropdownData.js";

// Helper function to get the model based on entity name
const getModelByEntity = (entity) => {
    let model = null;
    try {
        switch (entity) {
            case "crew":
                model = crew;
                break;
            case "party":
                model = party;
                break;
            case "dropdownData":
                model = dropdownData;
                break;
            case "vehicle":
                model = vehicle;
                break;
            default:
                throw new Error("No model Found");
        }
        return model;
    } catch (error) {
        console.error(error);
    }
};

// Middleware function to dynamically pass models based on entities
const databaseSelector = (entity) => {
    // Get models for each entity
    const Model = getModelByEntity(entity);

    // Attach the models object to the request object for use in route handlers
    return Model;
};

export default databaseSelector;
