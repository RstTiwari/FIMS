import mongoose from "mongoose";

// Helper function to get the model based on entity name
const getModelByEntity = (entity) => {
    // Assuming you have a naming convention for your models
    // For example, if your models follow the pattern 'EntityModel'
    const modelName = entity;

    // Check if the model has already been registered
    if (mongoose.models[modelName]) {
        return mongoose.model(modelName);
    } else {
        // If the model doesn't exist, throw an error
        throw new Error(`Database Schema not found for entity: ${entity}`); // manage a custom error here
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
