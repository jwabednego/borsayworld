import React from "react";
import styled from "styled-components";

const FilterContent = () => {
  return (
    <Wrapper>
      <div className="filter-center">
        <select>
          <option value="" key="">
            all categories
          </option>
          <option value="" key="">
            africa
          </option>
          <option value="" key="">
            american
          </option>
          <option value="" key="">
            european
          </option>
        </select>

        <select>
          <option value="" key="">
            all types
          </option>
          <option value="" key="">
            breakfast
          </option>
          <option value="" key="">
            lunch
          </option>
          <option value="" key="">
            dinner
          </option>
        </select>
        <button className="btn">clear filter</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  select {
    border: 1px solid var(--clr-primary-2);
    padding: 0.5rem 1rem;
    padding-right: 3rem;
    margin-left: 1rem;
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    font-family: var(--ff-body);
    appearance: red;
  }
  .select:focus {
    border-radius: var(--borderRadius);
    border: none;
    outline: none;
  }
  .filter-center {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0 2rem;
    margin: 1rem 0 2rem;
  }
  form {
    display: flex;
    gap: 0 0.5rem;
    text-transform: capitalize;
  }
  form input {
    background-color: var(--clr-primary-2);
  }
`;
export default FilterContent;
