import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";

import Section from "../Section";
import Card from "../Card";
import Heading from "../Heading";
import useWindowSize from "../../utility/useWindowSize";

import text from "../../text";

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const CardContainer = styled.div`
  margin: 0 ${(props) => props.theme.space.lg};
  width: 360px;
  min-width: 250px;
`;

const HeadingStyle = styled.div`
  margin: 1rem 0;
`;

const TextStyle = styled.p`
  min-height: 150px;

  display: flex;
  align-items: center;

  text-align: center;
  font-size: 18px;
`;

const AboutUs = ({ data = text.sections.about.cards }) => {
  const width = useWindowSize().width;

  const CardContent = ({ item }) => (
    <CardContainer>
      <Card>
        <HeadingStyle>
          <Heading secondary align="center">
            {item.title}
          </Heading>
        </HeadingStyle>
        <TextStyle>{item.description}</TextStyle>
      </Card>
    </CardContainer>
  );

  return (
    <Section heading={text.sections.about.heading}>
      {width > 900 ? (
        <Cards>
          {data.map((item, index) => (
            <CardContent key={index} item={item} />
          ))}
        </Cards>
      ) : (
        <AwesomeSlider>
          {data.map((item, index) => (
            <div key={index}>
              <CardContent item={item} />
            </div>
          ))}
        </AwesomeSlider>
      )}
    </Section>
  );
};

export default AboutUs;
