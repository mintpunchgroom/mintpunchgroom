import React from "react";
import styled from "styled-components";

import Heading from "./Heading";
import Text from "./Text";
import Button from "./Button";

import text from "../text";

const CardStyle = styled.div`
  min-width: ${(props) => (props.large ? "300px" : "250px")};
  position: relative;
  display: inline-flex;
  flex-direction: column;
  border-radius: 10px;
  padding: ${(props) => props.theme.space.lg};
  background: ${(props) => props.theme.bg};

  overflow: hidden;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 ${(props) => props.theme.space.lg};

  height: 100%;
`;

const TextStyle = styled.div`
  margin: ${(props) => props.theme.space.lg} 0;
  font-size: 18px;
  text-align: center;
`;

const TextItem = styled.div`
  margin-top: 0.25rem;
`;

const PriceStyle = styled.div`
  margin: ${(props) => props.theme.space.xl} 0;
  font-size: 32px;
  font-weight: 900;
  text-align: center;
`;

const PriceCard = ({ item, large = false }) => {
  return (
    <CardStyle large={large}>
      <CardInner>
        <Heading secondary align="center">
          {item.title}
        </Heading>
        <TextStyle>
          {item.text.map((textLine, index) => (
            <TextItem key={index}>{textLine}</TextItem>
          ))}
        </TextStyle>
        <div>
          <PriceStyle>{item.price}&nbsp;Грн</PriceStyle>
          <Text align="center">
            <Button>{text.button}</Button>
          </Text>
        </div>
      </CardInner>
    </CardStyle>
  );
};

export default PriceCard;
