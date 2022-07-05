import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecipesContext } from "../contexts/recipes_context";
import { useParams, useNavigate, Link } from "react-router-dom";
import { singleRecipe_url as url } from "../utils/links";
import Loading from "../components/Loading";
import Error from "../components/Error";
import RecipeImages from "../components/RecipeImages";
import RecipeStars from "../components/RecipesStars";
import AddToCart from "../components/AddToCart";
import { formatPrice } from "../utils/helper";

const SingleRecipe = () => {
  const {
    fetchSingleRecipe,
    single_recipe: recipe,
    singleIsError: error,
    singleIsLoading: loading,
  } = useRecipesContext();
  const { recipeID } = useParams();

  useEffect(() => {
    fetchSingleRecipe(`${url}${recipeID}`);
  }, [recipeID]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { id, fields = {} } = recipe;
  const {
    name,
    price,
    description,
    category,
    type,
    reviews,
    images,
    stars,
    ready,
  } = fields;

  return (
    <Wrapper>
      <div className="section">
        <h2 className="title"> recipe details</h2>
        <div className="section-center recipe-center">
          <RecipeImages images={images} />
          <article className="info">
            <h2>{name}</h2>
            <RecipeStars stars={stars} reviews={reviews} />
            <h4 className="price">{formatPrice(price)}</h4>
            <p>{description}</p>
            <h4>{category}</h4>
            <h4>{type}</h4>
            <h4>ready : {ready}</h4>
            <br />
            <hr />
            {ready > 0 && <AddToCart />}
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .price {
    color: var(--gold-color);
  }
  @media screen and (min-width: 992px) {
    .title {
      margin-bottom: 6rem;
    }
    .recipe-center {
      width: 85%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 3rem;
    }
  }
`;

export default SingleRecipe;
