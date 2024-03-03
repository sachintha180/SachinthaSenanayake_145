import axios, { AxiosResponse } from "axios";
import { AuthForm, AuthFaliure, AuthSuccess } from "../@types/auth";
import {
  RecipeItemProps,
  RecipeSubmitFaliure,
  RecipeSubmitSuccess,
} from "../@types/recipeItem";

const signin = async (authData: AuthForm) => {
  const url = "http://localhost:5000/auth/signin";
  const { data }: AxiosResponse<AuthFaliure | AuthSuccess> = await axios.post(
    url,
    authData,
  );
  return data;
};

const signup = async (authData: AuthForm) => {
  const url = "http://localhost:5000/auth/signup";
  const { data }: AxiosResponse<AuthSuccess | AuthFaliure> = await axios.post(
    url,
    authData,
  );
  return data;
};

const createRecipe = async (recipeData: RecipeItemProps) => {
  const url = "http://localhost:5000/recipe/";
  const { data }: AxiosResponse<RecipeSubmitFaliure | RecipeSubmitSuccess> =
    await axios.post(url, recipeData);
  return data;
};

const getRecipes = async () => {
  const url = "http://localhost:5000/recipe/";
  const { data } = await axios.get(url);
  return data;
};

export { signin, signup, getRecipes, createRecipe };
