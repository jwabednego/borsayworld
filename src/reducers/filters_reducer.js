import React, { useContext } from "react";

const FiltersContext = React.createContext();

export const FilterProvider = ({ children }) => {
  return (
    <FiltersContext.Provider value={"Hello People"}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FiltersContext);
};
