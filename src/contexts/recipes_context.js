import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/recipes_reducers";
import { recipes_url as url } from "../utils/links";
import axios from "axios";

const RecipesContext = React.createContext();

const initialState = {
  isSidebarOpen: true,
  isLoading: false,
  isError: false,
  recipes: [],
  featured_recipes: [],
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
      dispatch({ type: "GET_RECIPES_FINISHED", payload: data });
    } catch (error) {
      dispatch({ type: "GET_RECIPES_ERROR" });
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <RecipesContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchRecipes, refresh }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipesContext = () => {
  return useContext(RecipesContext);
};
