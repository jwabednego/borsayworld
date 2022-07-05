import React from "react";
import GridView from "../components/GridView";
import ListView from "../components/ListView";
import styled from "styled-components";
import { useRecipesContext } from "../contexts/recipes_context";

const RecipeView = () => {
  const { recipes, grid_view } = useRecipesContext();

  if (recipes.length < 1) {
    return <h4>sorry no recipe match your search</h4>;
  }

  if (grid_view === false) {
    return <ListView recipes={recipes} />;
  }
  return <GridView recipes={recipes} />;
};

export default RecipeView;
