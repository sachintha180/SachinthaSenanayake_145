import { RecipeItemProps } from "./recipeItem";

interface RecipeListProps {
  recipeItems: RecipeItemProps[];
}

interface RecipeFetchFaliure {
    message: string;
  }
  

export { RecipeListProps, RecipeFetchFaliure };
