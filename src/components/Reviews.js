import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { reviews } from "../utils/links";
import { GrNext, GrPrevious } from "react-icons/gr";

const Reviews = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > reviews.length - 1) {
      setValue(0);
    }

    if (value < 0) {
      const lastItem = reviews.length - 1;
      setValue(lastItem);
    }
  }, [reviews, value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value + 1);
    }, 8000);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Wrapper>
      <div className="section review-container">
        <h2 className="title">Customers' Reviews</h2>
        <div className="section-center reviews">
          {reviews.map((review, index) => {
            let position = "nextSlide";

            if (index === value) {
              position = "activeSlide";
            }

            if (
              index === value - 1 ||
              (value === 0 && index === reviews.length - 1)
            ) {
              position = "lastSlide";
            }

            const { id, name, image, quote } = review;
            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className="img review-img" />
                <h5>{name}</h5>
                <p>{quote}</p>
              </article>
            );
          })}
        </div>
        <div className="ctrl-btns">
          <button className="prev" onClick={() => setValue(value - 1)}>
            <GrPrevious />
          </button>
          <button className="next" onClick={() => setValue(value + 1)}>
            <GrNext />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .review-img {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    box-shadow: var(--shadow-4);
    border: 4px solid var(--clr-primary-1);
  }
  @media screen and (min-width: 760px) {
    .review-img {
      width: 12rem;
      height: 12rem;
    }
  }
  .reviews {
    width: 80vw;
    height: 350px;
    margin: 5rem auto;
    position: relative;
    display: flex;
    overflow: hidden;
    transition: var(--transition-1);
    margin-bottom: 0;
  }
  article {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: grid;
    place-items: center;
    text-align: center;
    opacity: 0;
    transition: var(--transition-1);
  }
  & h5 {
    margin-top: 1rem;
    margin-bottom: 0;
  }
  & p {
    padding-top: 0;
    font-size: 0.75rem;
  }
  .ctrl-btns {
    margin-top: 0;
    padding-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 2rem;
  }
  .next,
  .prev {
    border: transparent;
    background: transparent;
    color: var(--clr-primary-1);
    font-size: 1.5rem;
    cursor: pointer;
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
export default Reviews;
