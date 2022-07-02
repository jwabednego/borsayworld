import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()}
            <span className="title"> Borsay World, </span> All rights reserved.
            <br />
            <span className="title"> abednegojw@gmail.com </span>
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footer {
    height: 7rem;
    width: 100%;
    background-color: black;
  }
  .footer-content {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-size: 0.87rem;
  }
  @media screen and (min-width: 760px) {
    .footer-content {
      font-size: 1rem;
    }
  }
`;
export default Footer;
