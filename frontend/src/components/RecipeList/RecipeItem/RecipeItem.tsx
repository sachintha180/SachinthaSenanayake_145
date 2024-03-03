import _React from "react";
import { RecipeItemProps } from "../../../@types/recipeItem";

const RecipeItem = ({
  recipeName,
  recipeIngredients,
  recipeInstructions,
  timeToPrepare,
}: RecipeItemProps) => {
  return (
    <div className="bg-white flex flex-[1_0_0%] flex-col max-w-[300px]">
      <img
        className="h-[200px] w-full object-cover"
        src="/placeholder.jpg"
        alt="Placeholder recipe image"
      />
      <div className="flex-1 p-4 md:p-5">
        <h3 className="text-gray-800 text-lg font-bold">Recipe Name: {recipeName}</h3>
        <p className="text-gray-500 mt-1">Ingredients: {recipeIngredients}</p>
        <p className="text-gray-500 mt-1">Instructions: {recipeInstructions}</p>
      </div>
      <div className="border-t p-4 sm:px-5">
        <p className="text-gray-500 text-xs">Time to Prepare: {timeToPrepare}</p>
      </div>
    </div>
  );
};

export default RecipeItem;
