import React, { useState } from "react";
import styled from "styled-components";
import { RiFilter3Fill, RiSearchLine } from "react-icons/ri";
import { CgSortZa } from "react-icons/cg";
import FilterContent from "./FilterContent";
import { useFilterContext } from "../contexts/filter_context";

const Filters = () => {
  const { filter_recipes, sort, updateSort } = useFilterContext();
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <Wrapper>
      <div>
        <div className="content">
          {/* Search Form */}
          <form>
            <input
              type="text"
              placeholder="search recipes"
              className="search-input"
            />
          </form>
          {/* End of Search Form */}
          <p className="nop">({filter_recipes.length}) recipes found</p>
          {/* Sort Form */}
          <form className="sort">
            <label htmlFor="sort">sort by</label>
            <select name="sort" id="sort" value={sort} onChange={updateSort}>
              <option value="price-lowest">Price (Lowest)</option>
              <option value="price-highest">Price (Highest)</option>
              <option value="name-a">Name (A - Z)</option>
              <option value="name-z">Name (Z - A)</option>
            </select>
          </form>
          {/* End of Sort Form */}
          {/* Filter Toggle Button */}
          <button className="filter" onClick={() => setOpenFilter(!openFilter)}>
            {openFilter ? (
              <CgSortZa className="down-filter" />
            ) : (
              <RiFilter3Fill />
            )}
            Filters
          </button>
        </div>
      </div>
      {openFilter && <FilterContent />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sort {
    border: 1px solid var(--clr-primary-2);
    justify-self: flex-end;
  }
  & select {
    border: transparent;
  }
  .sort:focus {
    border: 1px solid red;
    outline: 1px solid red;
  }

  @media screen and (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      justify-content: center;
      justify-items: center;
      align-items: center;
    }
    .nop {
      margin-top: 1.5rem;
      text-transform: capitalize;
      font-size: 0.95rem;
      justify-content: flex-start;
    }
    .filter {
      justify-self: flex-end;
      background: transparent;
      border: 1px solid var(--clr-primary-2);
      padding: 0.5rem;
      border-radius: var(--borderRadius);
      font-size: 1.25rem;
      cursor: pointer;
    }
    .search-input {
      justify-self: flex-start;
      padding: 0.75rem;
      border: 1px solid black;
      border-radius: var(--borderRadius);
      /* background: var(--clr-gray-8); */
      background: white;
      border: 1px solid var(--clr-primary-2);
    }
    .search-input::placeholder {
      text-transform: capitalize;
    }
    .search-input:focus {
      font-size: 1rem;
      outline: 2px solid var(--clr-primary-3);
      border: none;
    }
  }
`;

export default Filters;
