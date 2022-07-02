import React from "react";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Reviews from "../components/Reviews";
import FeaturedRecipes from "../components/FeaturedRecipes";
import styled from "styled-components";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <FeaturedRecipes />
      <Services />
      <Contact />
      <Faq />
      <Reviews />
      {/* <Footer /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 650vh;
  @media screen and (min-width: 430px) {
    height: 630vh;
  }
  @media screen and (min-width: 760px) {
    height: 520vh;
  }
  @media screen and (min-width: 1370px) {
    height: 435vh;
  }
`;
export default Home;
