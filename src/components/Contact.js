import React from "react";
import styled from "styled-components";
import img from "../assets/banner2.jpg";

const Contact = () => {
  return (
    <Wrapper>
      <div className="contact section section-center">
        <img src={img} alt="banner" className="img contact-img" />
        <article className="content">
          <div className="info">
            <h4>Join our NewsLetter today and get 15% off</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              cumque obcaecati neque dolore repellat tenetur voluptate earum, ex
              inventore quasi!
            </p>
          </div>
          <form>
            <input
              type="text"
              className="form-input input"
              placeholder="Enter Your Email"
            />
            <button className="contact-btn btn">subscribe</button>
          </form>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 45rem;
  .contact {
    position: relative;
  }
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 2rem;
  }
  .contact-img {
    height: 40vh;
    /* border-radius: var(--borderRadius); */
    filter: brightness(60%);
  }
  .info h4 {
    color: var(--clr-primary-1);
  }
  .info p {
    color: var(--white);
    font-size: 0.85rem;
  }
  .input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    display: inline;
    width: 60%;
    margin: 0;
  }
  .input::placeholder {
    color: var(--white);
  }
  .contact-btn {
    display: inline-block;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media screen and (min-width: 760px) {
    margin-top: 25rem;
    .info p {
      color: var(--white);
      font-size: 1rem;
    }
    .input {
      width: 60%;
    }
  }
  @media screen and (min-width: 1370px) {
    margin-top: 10rem;
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      gap: 0 11rem;
    }
    .input {
      width: 80%;
    }
  }
`;
export default Contact;
