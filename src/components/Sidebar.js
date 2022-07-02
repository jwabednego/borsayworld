import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRecipesContext } from "../contexts/recipes_context";
import { navlinks } from "../utils/links";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useRecipesContext();
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-center">
          <div className="sidebar-header">
            <img src={logo} alt="borsay world" />
            <button
              type="button"
              className="sidebar-btn"
              onClick={closeSidebar}
            >
              <FaTimes className="times" />
            </button>
          </div>
          <ul className="sidebar-links">
            {navlinks.map((link) => {
              const { id, name, url } = link;
              return (
                <li key={id}>
                  <Link to={url} className="link" onClick={closeSidebar}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="sidebar-icons">
            <span>Login </span> <FiUserPlus className="login" />
            <span>Cart </span> <HiOutlineShoppingCart className="cart" />
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    transition: var(--transition-1);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  aside {
    height: 5rem;
  }
  .sidebar-center {
    width: 95vw;
    margin: 0 auto;
    max-width: var(--maxWidth);
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.4rem;
    padding: 0 1.3rem;
  }
  img {
    width: 10rem;
    margin-left: -15px;
  }
  .sidebar-btn {
    background-color: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
  }
  .times {
    color: crimson;
  }
  .sidebar-links {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sidebar-links li {
    text-transform: capitalize;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
  }
  .link {
    color: black;
  }
  .sidebar-icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    font-size: 2rem;
    margin-top: 6rem;
  }
  .sidebar-icons span {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 800px) {
    img {
      width: 10rem;
    }
    .sidebar {
      display: none;
    }
  }
`;
export default Sidebar;
