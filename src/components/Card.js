import React from "react";

import styled from "styled-components";

const CardStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: ${(props) => props.theme.space.lg};
  background: ${(props) => props.theme.bgAlt};

  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  &:after {
    content: "";

    position: absolute;
    top: 40%;
    left: -30%;

    z-index: 1;

    background: ${(props) => props.theme.secondary};

    width: 300px;
    height: 300px;
    border-radius: 1000px;
  }
`;

const Child = styled.div`
  z-index: 2;
`;

const Card = ({ children }) => {
  return (
    <CardStyle>
      <Child>{children}</Child>
    </CardStyle>
  );
};

export default Card;
