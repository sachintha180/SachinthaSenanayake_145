import _React from "react";
import RecipeItem from "./RecipeItem/RecipeItem";
import { RecipeListProps } from "../../@types/recipeList";

const RecipeList = ({ recipeItems }: RecipeListProps) => {
  const RecipeElements = recipeItems.map((recipeItem) => {
    return <RecipeItem key={recipeItem.recipeName} {...recipeItem} />;
  });

  return (
    <div className="mx-auto grid divide-y overflow-hidden rounded-xl border shadow-sm sm:flex sm:divide-x sm:divide-y-0">
      {RecipeElements}
    </div>
  );
};

export default RecipeList;
