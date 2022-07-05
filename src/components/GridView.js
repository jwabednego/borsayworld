import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helper";
import { MdAdsClick } from "react-icons/md";
import { Link } from "react-router-dom";
import Stars from "./Stars";

const GridView = ({ recipes }) => {
  return (
    <Wrapper>
      <div className="recipe-center">
        <div className="recipes">
          {recipes.map((recipe) => {
            const { id, name, url, price, stars, reviews } = recipe;
            return (
              <article key={id} className="recipe">
                <img src={url} alt={name} className="img recipe-img" />
                <Link to={`/recipes/${id}`} className="link">
                  <MdAdsClick />
                </Link>
                <Stars stars={stars} reviews={reviews} />
                <div className="info">
                  <h5>{name}</h5>
                  <h5 className="price">{formatPrice(price)}</h5>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .recipe-center {
  }
  .recipes {
    display: grid;
    gap: 2.5rem 0;
  }
  .recipe-img {
    height: 14rem;
    margin-bottom: 0.5rem;
    border-radius: var(--borderRadius);
    transition: var(--transition-1);
  }
  .info {
    margin-top: -0.95rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price {
    color: var(--gold-color);
  }
  .recipe {
    position: relative;
    transition: var(--transition-1);
  }
  .link {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    color: white;
    visibility: hidden;
    cursor: pointer;
    transition: var(--transition-1);
  }
  .recipe:hover .link {
    visibility: visible;
  }
  .recipe:hover .recipe-img {
    filter: brightness(60%);
  }

  @media screen and (min-width: 420px) {
    .info {
      padding: 0 1.8rem;
    }
  }
  @media screen and (min-width: 760px) {
    .recipes {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
    .info {
      padding: 0 1rem;
    }
  }
  @media screen and (min-width: 992px) {
    .recipes {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 1370px) {
    .recipes {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default GridView;
