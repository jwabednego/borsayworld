import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useRecipesContext } from "../contexts/recipes_context";

const AddToCart = () => {
  const { single_recipe: recipe } = useRecipesContext();
  const { fields = {} } = recipe;
  const [value, setValue] = useState(1);
  const { ready } = fields;

  const minus = () => {
    setValue((oldvalue) => {
      let newValue = oldvalue - 1;
      if (newValue < 1) {
        newValue = 1;
      }
      return newValue;
    });
  };
  const plus = () => {
    setValue((oldvalue) => {
      let newValue = oldvalue + 1;
      if (newValue > ready) {
        newValue = ready;
      }
      return newValue;
    });
  };

  return (
    <Wrapper>
      <div className="addtocart-center">
        <article className="ctrls">
          <button className="minus" onClick={minus}>
            <AiOutlineMinus />
          </button>
          <h2>{value}</h2>
          <button className="plus" onClick={plus}>
            <AiOutlinePlus />
          </button>
        </article>
        <Link to={"/cart"} className="btn atc-btn">
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ctrls {
    display: flex;
    gap: 0 2rem;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;
  }
  .minus,
  .plus {
    font-size: 2rem;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }
  .atc-btn {
    margin: 0 1.5rem;
  }
`;

export default AddToCart;
