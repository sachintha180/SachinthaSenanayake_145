import _React from "react";
import { RecipeSubmitProps } from "../../@types/recipeSubmit";

const RecipeSubmit = ({ handleSubmit, handleChange, isLoading }: RecipeSubmitProps) => {
  return (
    <div className="bg-white border-purple-300 mx-auto mt-7 w-full max-w-md rounded-xl border-4 bg-gradient-to-r shadow-xl">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="text-gray-800 block text-2xl font-bold">
            Submit Recipe
          </h1>
        </div>
        <div className="mt-5">
          {/* Form */}
          <form>
            <div className="grid gap-y-4">
              {/* Form Group */}
              <div>
                <label htmlFor="recipeName" className="mb-2 block text-sm">
                  Recipe Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="recipeName"
                    name="recipeName"
                    className="border-gray-500 focus:border-violet-600 focus:ring-violet-600 block w-full rounded-lg px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* End Form Group */}
              {/* Form Group */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="recipeIngredients"
                    className="mb-2 block text-sm">
                    Recipe Ingredients
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="recipeIngredients"
                    name="recipeIngredients"
                    className="border-gray-500 focus:border-violet-600 focus:ring-violet-600 block w-full rounded-lg px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* End Form Group */}
              {/* Form Group */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="recipeInstructions"
                    className="mb-2 block text-sm">
                    Recipe Instructions
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="recipeInstructions"
                    name="recipeInstructions"
                    className="border-gray-500 focus:border-violet-600 focus:ring-violet-600 block w-full rounded-lg px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* End Form Group */}
              {/* Form Group */}
              <div>
                <label htmlFor="timeToPrepare" className="mb-2 block text-sm">
                  Time to Cook
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="timeToPrepare"
                    name="timeToPrepare"
                    className="border-gray-500 focus:border-violet-600 focus:ring-violet-600 block w-full rounded-lg px-4 py-3 text-sm disabled:pointer-events-none disabled:opacity-50"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* End Form Group */}
              <button
                type="submit"
                className="border-transparent text-white bg-violet-700 hover:bg-violet-600 inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-semibold disabled:pointer-events-none disabled:opacity-50"
                disabled={isLoading}
                onClick={handleSubmit}>
                {isLoading && (
                  <span
                    className="border-current border-t-transparent text-white inline-block size-4 animate-spin rounded-full border-[3px]"
                    role="status"
                    aria-label="loading"></span>
                )}
                Submit
              </button>
            </div>
          </form>
          {/* End Form */}
        </div>
      </div>
    </div>
  );
};

export default RecipeSubmit;
