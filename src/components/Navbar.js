import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { navlinks } from "../utils/links";
import { useRecipesContext } from "../contexts/recipes_context";

const Navbar = () => {
  const { isSidebarOpen, openSidebar } = useRecipesContext();
  return (
    <Section>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button type="button" className="nav-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {navlinks.map((link) => {
              const { id, name, url } = link;
              return (
                <li key={id}>
                  <NavLink to={url} end={true} className="link">
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="nav-icons">
            <FiUserPlus className="login" />
            <HiOutlineShoppingCart className="cart" />
          </div>
        </div>
      </nav>
    </Section>
  );
};

const Section = styled.section`
  nav {
    height: 5rem;
    box-shadow: var(--shadow-3);
  }
  .nav-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--maxWidth);
    padding-top: 0.5rem;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 13rem;
    margin-left: -15px;
  }
  .nav-btn {
    background-color: transparent;
    border: transparent;
    font-size: 2rem;
    color: var(--clr-primary-1);
    cursor: pointer;
  }
  .nav-links,
  .nav-icons {
    display: none;
  }

  @media screen and (min-width: 800px) {
    .nav-btn {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;
      gap: 0 1rem;
    }
    .nav-links li {
      text-transform: capitalize;
      font-size: 1.25rem;
      transition: var(--transition-1);
    }
    .link {
      transition: var(--transition-1);
      color: var(--clr-gray-1);
    }
    .nav-links .link:hover {
      color: var(--clr-primary-4);
    }
    .nav-icons {
      color: var(--clr-gray-1);
      font-size: 1.5rem;
      display: flex;
      gap: 0 1rem;
      cursor: pointer;
    }
    .login,
    .cart {
      transition: var(--transition-1);
    }
    .nav-icons .login:hover,
    .cart:hover {
      color: var(--clr-primary-4);
    }
  }
`;

export default Navbar;
