import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";

import Section from "../Section";
import PriceCard from "../PriceCard";
import useWindowSize from "../../utility/useWindowSize";

import text from "../../text";

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardStyle = styled.div`
  margin: 0 ${(props) => props.theme.space.lg};
  max-width: 320px;
`;

const AwesomeSliderStyles = styled.div`
  .awssld {
    height: 400px;
  }
`;

const Prices = ({ data = text.sections.prices.cards }) => {
  const width = useWindowSize().width;

  return (
    <Section heading={text.sections.prices.heading} alt>
      {width > 900 ? (
        <Cards>
          {data.map((item, index) => (
            <CardStyle key={index}>
              <PriceCard item={item} large={index === 1} />
            </CardStyle>
          ))}
        </Cards>
      ) : (
        <AwesomeSliderStyles>
          <AwesomeSlider>
            {data.map((item, index) => (
              <CardStyle key={index}>
                <PriceCard item={item} large />
              </CardStyle>
            ))}
          </AwesomeSlider>
        </AwesomeSliderStyles>
      )}
    </Section>
  );
};

export default Prices;
