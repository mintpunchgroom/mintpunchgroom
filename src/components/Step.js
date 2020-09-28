import React from "react";
import styled from "styled-components";

import Heading from "./Heading";
import Icon from "./Icon";

const Container = styled.div`
  display: flex;
  flex-shrink: 0;

  align-items: center;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 90px;
  height: 90px;

  border-radius: 200px;

  font-size: 50px;

  background-color: ${(props) => props.theme.primary};
`;

const Label = styled.div`
  margin: 0 ${(props) => props.theme.space.md};
  font-size: 18px;
`;

const Step = ({ img, title, children }) => {
  return (
    <Container>
      <Circle>
        <Icon src={img} />
      </Circle>
      <Label>
        <Heading secondary>{title}</Heading>
        <div>{children}</div>
      </Label>
    </Container>
  );
};

export default Step;
