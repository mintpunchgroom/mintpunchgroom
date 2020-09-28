import React from "react";
import styled from "styled-components";

import Section from "../Section";
import Step from "../Step";
import RatioContainer from "../RatioContainer";
import text from "../../text";
import img from "../../assets/steps.jpg";

const ParentContainer = styled.div`
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 50%;

  @media (max-width: 720px) {
    width: 100%;

    &:last-of-type {
      margin-top: ${(props) => props.theme.space.xl};
    }
  }
`;

const StepsContainer = styled.div`
  > * + * {
    margin-top: 1rem;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;

  border-radius: 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Steps = ({ data = text.sections.steps.steps }) => {
  return (
    <Section heading={text.sections.steps.heading} alt>
      <ParentContainer>
        <Container>
          <StepsContainer>
            {data.map((item, index) => (
              <Step key={index} img={item.img} title={item.title}>
                {item.description}
              </Step>
            ))}
          </StepsContainer>
        </Container>
        <Container>
          <RatioContainer>
            <Image src={img} />
          </RatioContainer>
        </Container>
      </ParentContainer>
    </Section>
  );
};

export default Steps;
