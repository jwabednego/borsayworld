import React from "react";
import styled from "styled-components";
import Questions from "./Questions";
import { questions } from "../utils/links";

const Faq = () => {
  return (
    <Wrapper>
      <div className="section faq">
        <h2 className="title">Frequently Asked Questions</h2>
      </div>
      <div className="section-center faq-info">
        {questions.map((item) => {
          return <Questions {...item} key={item.id} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .faq-info {
    display: block;
    margin: 0 auto;
    width: 98%;
    max-width: 1170px;
    transition: var(--transition-1);
  }
  @media screen and (min-width: 800px) {
    .faq-info {
      width: 70vw;
      display: block;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 1370px) {
    .faq-info {
      width: 50vw;
      /* max-width: var(---max-width); */
      display: block;
      margin: 0 auto;
    }
  }
`;

export default Faq;
