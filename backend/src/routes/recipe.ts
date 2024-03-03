import express from "express";
import { auth } from "../middleware";
import { getRecipes, createRecipe } from "../controllers/recipe";

const router = express.Router();

router.get("/", auth, getRecipes);
router.post("/", auth, createRecipe);

export default router;
