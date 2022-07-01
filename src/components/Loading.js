import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 10rem);
  display: grid;
  place-items: center;
`;
export default Loading;
