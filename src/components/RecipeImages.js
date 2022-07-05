import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImg, setMainImg] = useState(images[0]);
  return (
    <Wrapper>
      <div>
        <img src={mainImg.url} alt={mainImg.name} className="img main-img" />
        <article className="images">
          {images.map((image, index) => {
            return (
              <img
                src={image.url}
                alt={images.name}
                className={
                  mainImg.url === image.url
                    ? "img other-img active"
                    : "img other-img"
                }
                key={index}
                onClick={() => setMainImg(images[index])}
              />
            );
          })}
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-img {
    height: 25rem;
    border-radius: var(--borderRadius);
  }
  .images {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0 0.25rem;
    margin: 2rem 0;
  }
  .other-img {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    border-radius: var(--borderRadius);
    border: 1px solid black;
    transition: var(--transition-1);
    cursor: pointer;
  }
  .active {
    border: 2px solid var(--clr-primary-3);
  }
  @media screen and (min-width: 380px) {
    .other-img {
      width: 5rem;
      height: 5rem;
    }
  }
  @media screen and (min-width: 380px) {
    .other-img {
      width: 6rem;
      height: 6rem;
    }
  }
  @media screen and (min-width: 680px) {
    .other-img {
      width: 7rem;
      height: 7rem;
      margin-bottom: 3rem;
    }
  }
`;

export default ProductImages;
