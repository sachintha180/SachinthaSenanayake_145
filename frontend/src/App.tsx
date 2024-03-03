import _React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import axios, { AxiosError } from "axios";

import { signin, signup, createRecipe, getRecipes } from "./api";
import { AuthForm, AuthFaliure } from "./@types/auth";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import Error from "./components/Error/Error";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipeSubmit from "./components/RecipeSubmit/RecipeSubmit";
import { RecipeItemProps } from "./@types/recipeItem";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { RecipeFetchFaliure } from "./@types/recipeList";

// Add JWT Token if authenticated
axios.interceptors.request.use((req) => {
  const profile = localStorage.getItem("profile");
  if (profile) {
    const parsedProfile = JSON.parse(profile as string);
    req.headers.Authorization = `Bearer ${parsedProfile.token}`;
  }
  return req;
});

const App = () => {
  // ------------------------- PROPS -------------------------
  // AUTH COMPONENT PROPS
  const [authData, setAuthData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  } as AuthForm);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  // RECIPE SUBMIT COMPONENT PROPS
  const [recipeData, setRecipeData] = useState({
    recipeName: "",
    recipeIngredients: "",
    recipeInstructions: "",
    timeToPrepare: "",
  } as RecipeItemProps);
  const [isRecipeSubmitLoading, setIsRecipeSubmitLoading] = useState(false);

  // ERROR COMPONENT PROPS
  const [error, setError] = useState("");

  // RECIPE LIST COMPONENT PROPS
  const [recipeItems, setRecipeItems] = useState([] as RecipeItemProps[]);

  // OTHER
  const navigate = useNavigate();

  // --------------------- END OF PROPS ----------------------

  // --------------------- CALLBACKS -------------------------
  // AUTH COMPONENT CALLBACKS
  const switchAuthMode = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };

  const handleAuthSubmit = async (
    event: React.FormEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setIsAuthLoading(true);
    setError("");
    try {
      let response;
      if (isSignIn) {
        response = await signin(authData);
      } else {
        response = await signup(authData);
      }
      localStorage.setItem("profile", JSON.stringify(response));
      navigate("/recipes");
    } catch (error) {
      const e = error as AxiosError<AuthFaliure>;
      const message = e.response?.data?.message || "";
      setError(message);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleAuthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [event.target.name]: event.target.value });
  };

  // RECIPE SUBMIT COMPONENT CALLBACKS
  const handleRecipeSubmit = async (
    event: React.FormEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setIsRecipeSubmitLoading(true);
    setError("");
    try {
      let response;
      response = await createRecipe(recipeData);
      navigate("/recipes");
    } catch (error) {
      const e = error as AxiosError<AuthFaliure>;
      const message = e.response?.data?.message || "";
      setError(message);
    } finally {
      setIsRecipeSubmitLoading(false);
    }
  };

  const handleRecipeSubmitChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRecipeData({ ...recipeData, [event.target.name]: event.target.value });
  };

  // RECIPE LIST CALLBACKS

  const fetchRecipes = async () => {
    try {
      const response = await getRecipes();
      setRecipeItems(response);
    } catch (error) {
      const e = error as AxiosError<RecipeFetchFaliure>;
      const message = e.response?.data?.message || "";
      setError(message);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // ------------------ END OF CALLBACKS ---------------------

  const loggedIn = JSON.parse(localStorage.getItem("profile")!);

  return (
    <>
      <Header />
      <main className="flex h-full flex-col justify-center bg-[url(/background.jpg)] bg-cover p-6">
        <Routes>
          {/* Private Root Route */}
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/recipes" />
              ) : (
                <Auth
                  handleSubmit={handleAuthSubmit}
                  handleChange={handleAuthChange}
                  switchAuthMode={switchAuthMode}
                  isLoading={isAuthLoading}
                  isSignIn={isSignIn}
                />
              )
            }></Route>
          {/* Private Recipe List Route */}
          <Route
            path="/recipes"
            element={
              <PrivateRoute>
                <RecipeList recipeItems={recipeItems} />
              </PrivateRoute>
            }></Route>
          {/* Private Recipe Submit Route */}
          <Route
            path="/recipe-submit"
            element={
              <PrivateRoute>
                <RecipeSubmit
                  handleSubmit={handleRecipeSubmit}
                  handleChange={handleRecipeSubmitChange}
                  isLoading={isRecipeSubmitLoading}
                />
              </PrivateRoute>
            }></Route>
          {/* Private User Profile Route */}
          {/* <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }></Route> */}
          {/* Auth(entication) Route */}
          <Route
            path="/auth"
            element={
              loggedIn ? (
                <Navigate to="/recipes" />
              ) : (
                <Auth
                  handleSubmit={handleAuthSubmit}
                  handleChange={handleAuthChange}
                  switchAuthMode={switchAuthMode}
                  isLoading={isAuthLoading}
                  isSignIn={isSignIn}
                />
              )
            }></Route>
        </Routes>
      </main>
      <Error errorMessage={error}></Error>
    </>
  );
};

export default App;
