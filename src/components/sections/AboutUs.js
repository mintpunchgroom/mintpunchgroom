import React from "react";
import styled from "styled-components";
import AwesomeSlider from "react-awesome-slider";

import Section from "../Section";
import Card from "../Card";
import Heading from "../Heading";
import Text from "../Text";
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

const TextStyle = styled.div`
  min-height: 150px;

  display: flex;
  align-items: center;
`;

const AboutUs = ({ data = text.sections.about.cards }) => {
  const width = useWindowSize().width;

  return (
    <Section heading={text.sections.about.heading}>
      {width > 900 ? (
        <Cards>
          {data.map((item, index) => (
            <CardContainer key={index}>
              <Card>
                <Text>
                  <Heading secondary align="center">
                    {item.title}
                  </Heading>
                </Text>
                <TextStyle>
                  <Text align="center">{item.description}</Text>
                </TextStyle>
              </Card>
            </CardContainer>
          ))}
        </Cards>
      ) : (
        <AwesomeSlider>
          {data.map((item, index) => (
            <div>
              <CardContainer key={index}>
                <Card>
                  <Text>
                    <Heading secondary align="center">
                      {item.title}
                    </Heading>
                  </Text>
                  <TextStyle>
                    <Text align="center">{item.description}</Text>
                  </TextStyle>
                </Card>
              </CardContainer>
            </div>
          ))}
        </AwesomeSlider>
      )}
    </Section>
  );
};

export default AboutUs;
