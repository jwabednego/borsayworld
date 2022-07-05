import React from "react";
import Filter from "../components/Filters";
import Sort from "../components/Sort";
import RecipeView from "../components/RecipeView";
import styled from "styled-components";

const Recipes = () => {
  return (
    <Wrapper>
      <div className="section">
        <div className="section-center page">
          <Filter />
          <div className="content">
            <Sort />
            <RecipeView />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 4fr;
      gap: 0 2rem;
    }
    .section-center {
      width: 90vw;
    }
  }
`;

export default Recipes;
