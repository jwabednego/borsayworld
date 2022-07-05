import React from "react";
import styled from "styled-components";
import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

const RecipeStars = ({ stars, reviews }) => {
  return (
    <Wrapper>
      <div className="stars">
        <span>
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>

        <span>
          {stars >= 2 ? (
            <BsStarFill />
          ) : stars >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>

        <span>
          {stars >= 3 ? (
            <BsStarFill />
          ) : stars >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>

        <span>
          {stars >= 4 ? (
            <BsStarFill />
          ) : stars >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>

        <span>
          {stars >= 5 ? (
            <BsStarFill />
          ) : stars >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
      </div>
      <div className="reviews">
        <p>({reviews}) customers reviews</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-top: 0.25rem; */

  .stars {
    color: var(--gold-color);
  }
  /* .reviews p {
    font-size: 0.7rem;
  } */
`;

export default RecipeStars;
