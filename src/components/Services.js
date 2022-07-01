import React from "react";
import styled from "styled-components";
import { MdLocalAirport } from "react-icons/md";
import { FaMortarPestle } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";

const Services = () => {
  return (
    <Wrapper>
      <div className="service section-center section">
        <article className="services-header">
          <section>
            <h4>
              Global Recipes <br />
            </h4>
            <h4>Prepared just for you, anytime and anyhow.</h4>
          </section>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            perspiciatis consectetur modi cum, nam autem necessitatibus! Totam
            nam vel in culpa placeat rem omnis consectetur nihil, debitis
            aspernatur expedita voluptas.
          </p>
        </article>
        <div className="services">
          <article className="info">
            <span>
              <GiGlassCelebration />
            </span>
            <h5>relaxation</h5>
            {/* <div className="underline"></div> */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            perspiciatis consectetur modi cum, nam autem necessitatibus!
          </article>

          <article className="info">
            <span>
              <FaMortarPestle />
            </span>
            <h5>home recipes</h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            perspiciatis consectetur modi cum, nam autem necessitatibus!
          </article>

          <article className="info">
            <span>
              <MdLocalAirport />
            </span>
            <h5>Intl recipes</h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            perspiciatis consectetur modi cum, nam autem necessitatibus!
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .service {
    position: relative;
  }
  .services-header {
    display: grid;
    place-items: center;
    background-color: var(--clr-primary-8);
    padding: 2rem 2rem 8rem 2rem;
  }
  .services-header h4 {
    text-transform: none;
  }
  .services-header p {
    font-size: 0.85rem;
  }
  @media screen and (min-width: 570px) {
    .services-header p {
      font-size: 1rem;
    }
  }
  .services {
    width: 70vw;
    margin: 0 auto;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%);
  }
  .info {
    background-color: var(--white);
    margin-bottom: 2rem;
    padding: 1.5rem 2rem;
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
    text-align: center;
    box-shadow: var(--shadow-4);
    font-size: 0.85rem;
  }
  & span {
    color: var(--clr-primary-2);
    font-size: 2.5rem;
    border-radius: 50%;
  }
  @media screen and (min-width: 760px) {
    .services {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 4rem;
      top: 60%;
    }
  }

  @media screen and (min-width: 1370px) {
    .services-header {
      display: flex;
      gap: 0 4rem;
      justify-content: space-between;
    }
    .services {
      width: 70vw;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0 4rem;
    }
  }
`;

export default Services;
