import React from "react";
import styled from "styled-components";

const Style = styled.h1`
  ${(props) => (props.secondary ? props.theme.h2 : props.theme.h1)}
  text-align: ${(props) =>
    props.align ? props.align : props.secondary ? "left" : "center"};
  margin: 0;
`;

const Heading = ({ align, secondary = false, children }) => {
  return (
    <Style align={align} secondary={secondary}>
      {children}
    </Style>
  );
};

export default Heading;
