import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const Questions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Wrapper>
      <article className="question">
        <div className="question-content">
          <button type="button" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <BsChevronDown /> : <BsChevronRight />}
          </button>
          <h4>{title}</h4>
        </div>
        {showInfo ? <p>{info}</p> : null}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .question {
    padding: 0.5rem 0.5rem 0 0.5rem;
    box-shadow: var(--shadow-4);
    border-radius: var(--borderRadius);
    margin-bottom: 1rem;
    transition: var(--transition-1);
    border: 1px solid var(--clr-primary-2);
  }
  .question p {
    padding-left: 2.4rem;
    font-size: 0.75rem;
    max-width: 50em;
    transition: var(--transition-1);
  }
  .question-content {
    display: flex;
    gap: 0 1rem;
  }
  & button {
    color: var(--clr-primary-2);
    font-size: 1.2rem;
    margin: 0.5rem 0;
    background: transparent;
    border: transparent;
    cursor: pointer;
    transition: var(--transition-1);
  }
  .question-content h4 {
    font-size: 0.7rem;
    margin-bottom: 1rem;
    padding: 1.3rem 0 1rem 0;
  }
  @media screen and (min-width: 760px) {
    .question-content h4 {
      font-size: 1rem;
      padding: 1.5rem 0 1.2rem 0;
    }
    button {
      color: var(--clr-primary-2);
      font-size: 1.5rem;
    }
  }
`;

export default Questions;
