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
  .contact {
    position: relative;
    width: 100%;
  }
  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.5rem;
  }
  .contact-img {
    height: 40vh;
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
    width: 70%;
    margin: 0;
  }
  .input::placeholder {
    color: var(--white);
  }
  .contact-btn {
    display: inline-block;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0.45rem 0.25rem;
  }

  @media screen and (min-width: 760px) {
    .contact {
      position: relative;
      width: 95%;
    }
    .contact-img {
      border-radius: var(--borderRadius);
    }
    margin-top: 25rem;
    .info p {
      color: var(--white);
      font-size: 1rem;
    }
    .input {
      width: 60%;
    }
    .content {
      padding: 2rem;
    }
  }
  @media screen and (min-width: 1370px) {
    margin-top: 10rem;
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      gap: 0 10rem;
      padding: 3rem;
    }
    .input {
      width: 80%;
    }
  }
`;
export default Contact;
