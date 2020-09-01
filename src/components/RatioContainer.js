import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc(
      (${(props) => props.ratioY} / ${(props) => props.ratioX}) * 100%
    );
  }
`;
const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const RatioContainer = ({ ratioX = 4, ratioY = 3, children }) => {
  return (
    <Container ratioX={ratioX} ratioY={ratioY}>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

export default RatioContainer;
