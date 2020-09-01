import React from "react";
import styled from "styled-components";

const Container = styled.blockquote`
  display: inline-block;
  position: relative;
  ${(props) => props.theme.huge};
  margin: 0;
  padding: 0 30px;

  /* I dont like quotes */

  /* &:before {
    content: "“";
    left: 0;
    top: -40px;
  }
  &:after {
    content: "”";
    right: 0;
    top: 70px;
  } */

  &:before,
  &:after {
    position: absolute;
    font-size: 90px;
    line-height: 1;
  }

  @media (max-width: 720px) {
    font-size: 28px;
  }
`;

const Blockquote = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Blockquote;
