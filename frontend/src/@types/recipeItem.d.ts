interface RecipeItemProps {
  recipeName: string;
  recipeIngredients: string;
  recipeInstructions: string;
  timeToPrepare: string;
}

interface RecipeSubmitFaliure {
  message: string;
}

interface RecipeSubmitSuccess {
  result: Document;
  token: string;
}

export { RecipeItemProps, RecipeSubmitFaliure, RecipeSubmitSuccess };
