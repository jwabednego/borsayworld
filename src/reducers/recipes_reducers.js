const recipes_reducer = (state, action) => {
  if (action.type === "OPEN_SIDEBAR") {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }
  if (action.type === "CLOSE_SIDEBAR") {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }
  if (action.type === "GET_RECIPES_START") {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === "GET_RECIPES_FINISHED") {
    const featured = action.payload.filter(
      (recipe) => recipe.featured === "true"
    );
    return {
      ...state,
      isLoading: false,
      recipes: action.payload,
      featured_recipes: featured,
    };
  }
  if (action.type === "GET_RECIPES_ERROR") {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }
  throw new Error(`No Action Type Match ${action.type}, Pls Check Good.`);
};

export default recipes_reducer;
