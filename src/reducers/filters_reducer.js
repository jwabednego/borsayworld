const filter_reducer = (state, action) => {
  if (action.type === "LOAD_RECIPES") {
    console.log(action.payload);
    return {
      ...state,
      all_recipes: [...action.payload],
      filter_recipes: [...action.payload],
    };
  }

  if (action.type === "UPDATE_SORT") {
    return { ...state, sort: action.payload };
  }

  if (action.type === "SORT_RECIPES") {
    const { filter_recipes, sort } = state;
    let newRecipes = [...filter_recipes];

    if (sort === "price-lowest") {
      newRecipes = newRecipes.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-highest") {
      newRecipes = newRecipes.sort((a, b) => b.price - a.price);
    }

    if (sort === "name-a") {
      newRecipes = newRecipes.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (sort === "name-z") {
      newRecipes = newRecipes.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return { ...state, filter_recipes: newRecipes };
  }

  throw new Error(`No Action Matches type of ${action.type}`);
};
export default filter_reducer;
