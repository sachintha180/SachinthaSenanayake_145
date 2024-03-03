import { Request, Response } from "express";

import { AuthRequestSignature } from "../@types/auth";
import { RecipeItem } from "../@types/recipe";
import Recipe from "../models/Recipe";

const createRecipe = async (req: Request, res: Response) => {
  const recipe: RecipeItem = req.body;

  try {
    const result = await Recipe.create({
      ...recipe,
      creator: (req as AuthRequestSignature).userID,
      createdAt: new Date().toISOString(),
    });

    try {
      await result.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

const getRecipes = async (req: Request, res: Response) => {
  try {
    const result = await Recipe.find();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export { createRecipe, getRecipes };
