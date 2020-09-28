import React from "react";
import styled from "styled-components";

import Section from "../Section";
import Blockquote from "../Blockquote";
import Button from "../Button";
import RatioContainer from "../RatioContainer";
import Icon from "../Icon";

import img from "../../assets/gerda.jpg";
import text from "../../text";

import corgi from "../../assets/icons/corgi.svg";

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;

  @media (max-width: 720px) {
    max-width: unset;
    margin-bottom: 40px;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;
  border-radius: 30px;

  object-fit: cover;
  transform: scaleX(-1); /* Flip image horizontaly */
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: inline-block;
  text-align: center;
  width: 50%;

  padding-top: ${(props) => props.text && "60px"};

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const Parent = styled.div`
  display: flex;
  align-items: center;
  margin-top: -40px;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;

const Space = styled.div`
  margin-top: ${(props) => props.theme.space.xl};
`;

const Main = () => {
  return (
    <Section alt main bigSpace>
      <Parent>
        <Container text>
          <Blockquote>
            <div>{text.sections.main.heading}</div>
            <div>
              {text.sections.main.subheading}{" "}
              <Icon src={corgi} alt="Corgi icon" />
            </div>
          </Blockquote>
          <Space>
            <Button>{text.button}</Button>
          </Space>
        </Container>
        <Container>
          <ImageWrap>
            <RatioContainer>
              <Image src={img}></Image>
            </RatioContainer>
          </ImageWrap>
        </Container>
      </Parent>
    </Section>
  );
};

export default Main;
