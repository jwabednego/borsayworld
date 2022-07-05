import React, { useState } from "react";
import styled from "styled-components";
import { RiFilter3Fill, RiSearchLine } from "react-icons/ri";
import { CgSortZa } from "react-icons/cg";
import FilterContent from "./FilterContent";

const Filters = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <Wrapper>
      <div>
        <div className="filter-center">
          <div className="content">
            <form>
              <input
                type="text"
                placeholder="search recipes"
                className="search-input"
              />
            </form>
            <p className="nop">number of recipes found</p>
          </div>
          <button className="filter" onClick={() => setOpenFilter(!openFilter)}>
            {openFilter ? (
              <CgSortZa className="down-filter" />
            ) : (
              <RiFilter3Fill />
            )}
            Filters
          </button>
        </div>
        {openFilter && <FilterContent />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
    }
    .filter-center {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      justify-content: space-between;
      justify-items: center;
    }
    .nop {
      margin-top: 1.5rem;
      text-transform: capitalize;
      font-size: 0.95rem;
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
