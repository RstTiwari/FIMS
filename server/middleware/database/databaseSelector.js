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
        throw new Error(`Database Schema not found for entity: ${entity}`);
    }
};

// Middleware function to dynamically pass models based on entities
const databaseMiddleware = (req, res, next) => {
    try {
        // Entities for which you need models
        const entities = req.body.entities;

        // Get models for each entity
        const Model = getModelByEntity(entity);

        // Attach the models object to the request object for use in route handlers
        req.database = Model;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Pass any errors to the error handling middleware
        next(error);
    }
};

export default databaseMiddleware;
