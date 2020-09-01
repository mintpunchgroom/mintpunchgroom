import React from "react";
import styled from "styled-components";

import Section from "../components/Section";
import Heading from "../components/Heading";
import Text from "../components/Text";
import RatioContainer from "../components/RatioContainer";

import text from "../text";
import img from "../assets/steps.jpg";

const ParentContainer = styled.div`
  display: flex;
  > * + * {
    margin-left: 3rem;
  }

  @media (max-width: 720px) {
    flex-direction: column-reverse;

    > * + * {
      margin-left: 0;
    }
  }
`;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;

  border-radius: 30px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const ContactPage = () => {
  return (
    <Section heading={text.contacts.heading} main>
      <ParentContainer>
        <Container>
          <RatioContainer ratioY={2.85}>
            <Image src={img} />
          </RatioContainer>
        </Container>
        <Container>
          <Text>
            <Heading secondary>{text.contacts.title}</Heading>
          </Text>
          <Text>
            {text.contacts.phone} {text.phone}
          </Text>
          <Text>{text.contacts.adress}</Text>
          <Text>
            <i class="fab fa-instagram"></i>
            <span>&nbsp;{text.contacts.insta}</span>
          </Text>
        </Container>
      </ParentContainer>
    </Section>
  );
};

export default ContactPage;
