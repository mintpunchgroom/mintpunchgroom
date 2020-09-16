import React from "react";
import styled from "styled-components";

const Container = styled.blockquote`
  display: inline-block;
  position: relative;
  ${(props) => props.theme.huge};
  margin: 0;
  padding: 0 30px;

  @media (max-width: 720px) {
    font-size: 28px;
  }
`;

const Blockquote = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Blockquote;
