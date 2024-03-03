import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  recipeName: { type: String, unique: true, required: true },
  recipeIngredients: { type: String, required: true },
  recipeInstructions: { type: String, required: true },
  timeToPrepare: { type: String, required: true },
  creator: { type: String },
  createdAt: { type: Date, default: new Date() },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export { recipeSchema };
export default Recipe;
