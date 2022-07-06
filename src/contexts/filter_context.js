import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/filters_reducer";
import { useRecipesContext } from "./recipes_context";

const FiltersContext = React.createContext();
const initialState = {
  filter_recipes: [],
  all_recipes: [],
  sort: "price-lowest",
};

export const FilterProvider = ({ children }) => {
  const { recipes } = useRecipesContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_RECIPES", payload: recipes });
  }, [recipes]);

  useEffect(() => {
    dispatch({ type: "SORT_RECIPES" });
  }, [recipes, state.sort]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: value });
  };

  return (
    <FiltersContext.Provider value={{ ...state, updateSort }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FiltersContext);
};
