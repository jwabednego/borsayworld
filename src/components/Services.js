import React from "react";
import styled from "styled-components";
import { MdLocalAirport } from "react-icons/md";
import { FaMortarPestle } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";

const Services = () => {
  return (
    <Wrapper>
      <h2 className="title">services</h2>
      <div className="service section-center section">
        <article className="services-header">
          <section>
            <h4>Global Recipes</h4>
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
    width: 100%;
  }
  .services-header {
    display: grid;
    background-color: var(--clr-primary-9);
    padding: 2rem 2.5rem;
    width: 100%;
  }
  .services-header h4 {
    text-transform: none;
    padding-right: 0;
  }
  .services-header p {
    font-size: 0.85rem;
    padding-right: 0;
  }
  .services {
    width: 100%;
    margin: 0 auto;
  }
  .info {
    background-color: var(--white);
    margin: 2rem;
    padding: 1rem 1.5rem;
    text-align: center;
    box-shadow: var(--shadow-4);
    font-size: 0.75rem;
  }
  & span {
    color: var(--clr-primary-2);
    font-size: 2.5rem;
    border-radius: 50%;
    margin-top: 0;
    padding-top: 0;
  }
  @media screen and (min-width: 760px) {
    .service {
      position: relative;
      width: 95%;
      border-radius: var(--borderRadius);
    }
    .services {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 0.25rem;
      position: absolute;
      top: 130%;
      left: 50%;
      width: 90%;
      transform: translate(-50%, -50%);
    }
    .services-header {
      padding: 2rem 2.5rem 3.5rem;
    }
    .info {
      margin: 2rem;
      padding: 1rem 1.8rem;
      font-size: 0.85rem;
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
      gap: 0 1rem;
      top: 90%;
    }
    .services-header {
      padding: 2rem 2.5rem 8rem;
    }
  }
`;

export default Services;
