import React from "react";
import styled from "styled-components";
import { useRecipesContext } from "../contexts/recipes_context";

const Error = () => {
  const { refresh } = useRecipesContext();

  return (
    <Wrapper>
      <div className="error-msg">
        <h4>There was an error while loading...</h4>
        <button className="btn" onClick={refresh}>
          refresh
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 10rem);
  display: grid;
  place-items: center;
  text-align: center;
`;

export default Error;
