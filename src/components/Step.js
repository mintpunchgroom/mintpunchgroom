import React from "react";
import styled from "styled-components";

import Heading from "./Heading";

const Container = styled.div`
  display: flex;
  flex-shrink: 0;

  align-items: center;
`;

const IndexCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink:0;

  width: 90px;
  height: 90px;

  border-radius: 200px;

  ${(props) => props.theme.huge}

  background-color: ${(props) => props.theme.secondary};
`;

const Label = styled.div`
  margin: 0 ${(props) => props.theme.space.md};
`;

const Step = ({ index = 0, title, children }) => {
  return (
    <Container>
      <IndexCircle>{index}</IndexCircle>
      <Label>
        <Heading secondary>{title}</Heading>
        <div>{children}</div>
      </Label>
    </Container>
  );
};

export default Step;
