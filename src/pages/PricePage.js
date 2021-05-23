import React from "react";
import styled from "styled-components";

import Section from "../components/Section";
import Heading from "../components/Heading";

import text from "../text";

const HeadingStyle = styled.div`
  margin-bottom: ${(props) => props.theme.space.lg};
`;

const PriceSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;
  padding: ${(props) => props.theme.space.lg};
  background: ${(props) => props.theme.bgAlt};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  margin-top: ${(props) => props.theme.space.xl};
  width: 100%;

  page-break-inside: avoid;
  break-inside: avoid;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: ${(props) => props.theme.space.sm};
  padding-bottom: ${(props) => props.theme.space.sm};

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:last-of-type {
    border: none;
  }

  > span + span {
    margin-left: ${(props) => props.theme.space.md};
  }
`;

const Warning = styled.div`
  padding-top: ${(props) => props.theme.space.md};

  color: ${(props) => props.theme.textAlt};
  font-size: 12px;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  margin-top: calc(-1 * ${(props) => props.theme.space.xl});

  columns: 2;
  column-gap: ${(props) => props.theme.space.xl};
  height: 1200px; //largest card height hardcoded

  @media (max-width: 860px) {
    columns: 1;
    height: auto;
  }
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
