import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";
import { useRecipesContext } from "../contexts/recipes_context";
import Loading from "../components/Loading";
import Error from "./Error";
import { formatPrice } from "../utils/helper";
import FeaturedRecipes from "../components/FeaturedRecipes";

const Hero = () => {
  const { featured_recipes, isLoading, isError } = useRecipesContext();
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex(index + 1);
  };
  const prev = () => {
    setIndex(index - 1);
  };

  useEffect(() => {
    const lastItem = featured_recipes.length - 1;
    if (index > lastItem) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastItem);
    }
  }, [index, featured_recipes]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Wrapper>
      <div className="hero section-center page-100">
        {featured_recipes.map((recipe, recipeIndex) => {
          const { id, name, price, category, type, url } = recipe;

          let position = "nextSlide";

          if (index === recipeIndex) {
            position = "activeSlide";
          }
          if (
            recipeIndex === index - 1 ||
            (index === 0 && recipeIndex === featured_recipes.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={url} alt={name} className="img hero-img" />
              <h2>{name}</h2>
              <h4>{category}</h4>
              <h4 className="type">{type}</h4>
              <h3 className="hero-price">@ {formatPrice(price)}</h3>
            </article>
          );
        })}
        <button type="button" className="btn hero-btn">
          visit recipe
        </button>
        <div className="ctrl-btns">
          <button type="button" className="ctrl-btn" onClick={prev}>
            <TbPlayerTrackPrev className="ctrl-btn" />
          </button>
          <button type="button" className="ctrl-btn" onClick={next}>
            <TbPlayerTrackNext className="ctrl-btn" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .hero {
    margin-top: 1rem;
    padding-top: 0;
    display: flex;
    gap: 2rem;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
  }
  .hero-img {
    height: calc(100vh - 15rem);
    width: 95%;
    margin: 0 auto;
    border-radius: var(--borderRadius);
    margin-bottom: 1rem;
    filter: brightness(50%);
  }
  article {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: var(--transition-1);
  }
  h2,
  h3,
  h4,
  .hero-btn {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
    text-align: center;
  }
  h2 {
    font-size: 2.5rem;
    padding-top: 2rem;
  }
  h4 {
    padding-top: 12rem;
    font-size: 1.5rem;
  }
  h3 {
    padding-top: 18rem;
  }
  .type {
    padding-top: 17rem;
  }
  .hero-price {
    color: var(--gold-color);
    margin-top: 3rem;
  }
  .hero-btn {
    margin-top: 14rem;
    padding: 0.75rem 1rem;
  }
  .ctrl-btns {
    position: absolute;
    width: 100%;
    top: 60%;
    left: 45%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  @media screen and (min-width: 600px) {
    .ctrl-btns {
      left: 50%;
    }
  }
  .ctrl-btn {
    color: var(--clr-primary-2);
    font-size: 2.5rem;
    margin-left: 1rem;
    background: transparent;
    border: transparent;
    cursor: pointer;
  }

  @media screen and (min-width: 700px) {
    .hero {
      width: 95vw;
    }
    .hero-img {
      margin: 0;
    }
    h2,
    h3,
    h4,
    .hero-btn {
      position: absolute;
      top: 20%;
      left: 10%;
      color: var(--white);
      transform: translate(0);
    }
    h2 {
      font-size: 4rem;
    }
    h4 {
      padding-top: 7rem;
      font-size: 2rem;
    }
    h3 {
      padding-top: 14rem;
    }
    .type {
      padding-top: 9.5rem;
    }
    .hero-price {
      color: var(--clr-primary-1);
    }
    .hero-btn {
      margin-top: 18rem;
      padding: 0.75rem 1rem;
    }

    .ctrl-btns {
      position: absolute;
      top: 50%;
      left: 60%;
    }
    .ctrl-btn {
      font-size: 4rem;
    }
    .hero-btn {
      padding-top: 0.575rem;
    }
    .hero-img {
      height: calc(100vh - 12rem);
      width: 95vw;
      border-radius: var(--borderRadius);
      margin-bottom: 1rem;
      filter: brightness(50%);
    }
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
`;

export default Hero;
