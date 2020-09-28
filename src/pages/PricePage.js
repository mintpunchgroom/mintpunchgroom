import React from "react";
import styled from "styled-components";

import Section from "../components/Section";
import Heading from "../components/Heading";

import text from "../text";

const Container = styled.div`
  display: flex;

  justify-content: space-between;

  flex-wrap: wrap;
  margin-top: calc(-1 * ${(props) => props.theme.space.lg});
`;

const HeadingStyle = styled.div`
  margin-bottom: 1rem;
`;

const PriceSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;
  padding: ${(props) => props.theme.space.lg};
  background: ${(props) => props.theme.bgAlt};
  margin: ${(props) => props.theme.space.lg};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  width: calc(50% - 2 * ${(props) => props.theme.space.lg});

  @media (max-width: 860px) {
    width: 100%;
    margin: ${(props) => props.theme.space.md} 0;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.5rem;
  padding-bottom: 0.5rem;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:last-of-type {
    border: none;
  }

  > span + span {
    margin-left: 1rem;
  }
`;

const Warning = styled.div`
  padding-top: 1rem;

  color: ${(props) => props.theme.textAlt};
  font-size: 12px;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const PricePage = () => {
  return (
    <Section heading={text.price.title} main>
      <Container>
        {text.price.prices.map((price, i) => (
          <PriceSection key={i}>
            <div>
              <HeadingStyle>
                <Heading secondary>{price.section}</Heading>
              </HeadingStyle>
              {price.items.map((item, j) => (
                <ListItem key={j}>
                  <span>{item.title} </span>
                  <span>{item.price}грн</span>
                </ListItem>
              ))}
            </div>
            {price.withWarning && <Warning>{text.price.warningText}</Warning>}
          </PriceSection>
        ))}
      </Container>
    </Section>
  );
};

export default PricePage;
