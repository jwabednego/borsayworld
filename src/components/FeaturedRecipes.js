import React from "react";
import styled from "styled-components";
import { useRecipesContext } from "../contexts/recipes_context";
import Stars from "./Stars";
import { MdAdsClick } from "react-icons/md";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helper";

const FeaturedRecipes = () => {
  const { featured_recipes } = useRecipesContext();
  const featured = featured_recipes.slice(0, 3);

  return (
    <Wrapper>
      <div className="featured-center section-center">
        {featured.map((recipe) => {
          const { id, name, price, url, stars, reviews } = recipe;
          return (
            <article key={id}>
              <img src={url} alt={name} className="img featured-img" />
              <Link to={"/"} className="link">
                <MdAdsClick />
              </Link>
              <Stars stars={stars} reviews={reviews} />
              <div className="info">
                <h4>{name}</h4>
                <h4 className="price">{formatPrice(price)}</h4>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 60rem;
  /* min-height: calc(100vh - 10rem); */

  .featured-img {
    height: 14rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
    cursor: pointer;
    transition: var(--transition-1);
  }
  .featured-center {
    position: absolute;
    top: 80%;
    width: 80vw;
    gap: 0 8rem;
    left: 10%;
    transform: translateX(-50%, -50%);
  }
  .info {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: -0.65rem;
    margin-bottom: 0;
  }
  .info h4 {
    font-size: 1rem;
  }
  .price {
    color: var(--gold-color);
  }
  article {
    position: relative;
    margin-bottom: 5rem;
    box-shadow: var(--shadow-4);
    border-radius: var(--borderRadius);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4rem;
    height: 8rem;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: white;
    cursor: pointer;
    visibility: hidden;
    transition: var(--transition-1);
  }
  article:hover .featured-img {
    filter: brightness(50%);
  }
  article:hover .link {
    visibility: visible;
  }

  @media screen and (min-width: 760px) {
    margin-bottom: 30rem;
    .featured-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      gap: 0 2rem;
      left: 10%;
      transform: translateX(-50%, -50%);
    }

    @media screen and (min-width: 1370px) {
      margin-bottom: 10rem;

      .featured-center {
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        gap: 0 4rem;
        left: 10%;
        transform: translateX(-50%, -50%);
      }
    }
  }
`;

export default FeaturedRecipes;
