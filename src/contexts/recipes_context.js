import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/recipes_reducers";
import { recipes_url as url } from "../utils/links";
import axios from "axios";

const RecipesContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
  isLoading: false,
  isError: false,
  recipes: [],
  featured_recipes: [],
  singleIsLoading: false,
  singleIsError: false,
  single_recipe: {},
  grid_view: true,
};

export const RecipesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };
  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };
  const refresh = () => {
    window.location.reload(true);
  };

  const fetchRecipes = async () => {
    try {
      dispatch({ type: "GET_RECIPES_START" });
      const { data } = await axios.get(url);
      dispatch({ type: "GET_RECIPES_CORRECT", payload: data });
    } catch (error) {
      dispatch({ type: "GET_RECIPES_ERROR" });
    }
  };

  const fetchSingleRecipe = async (url) => {
    dispatch({ type: "GET_SINGLE_RECIPE_START" });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: "GET_SINGLE_RECIPE_CORRECT", payload: data });
    } catch (error) {
      dispatch({ type: "GET_SINGLE_RECIPE_ERROR" });
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <RecipesContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchRecipes,
        refresh,
        fetchSingleRecipe,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipesContext = () => {
  return useContext(RecipesContext);
};
