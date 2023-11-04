import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredient: [{
        type: String,
        required: true,
    }],
    instructions: { type: String, required: true },
    imageUrl: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    userOwner: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
});

export const RecipesModel = mongoose.model("recipes", recipesSchema);