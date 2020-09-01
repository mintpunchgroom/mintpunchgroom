import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const OuterContainer = styled.div`
  width: 100%;
  background: ${(props) => (props.alt ? props.theme.bgAlt : props.theme.bg)};
  padding-top: 3rem;
  padding-top: ${(props) => props.main && "0"};
  padding-bottom: ${(props) => (props.main ? "2rem" : "5rem")};

  margin-bottom: ${(props) => props.bigSpace && "4rem"};

  @media (max-width: 720px) {
    margin-bottom: 0;
  }
`;

const InnerContainer = styled.div`
  padding: 0 ${(props) => props.theme.space.md};
  margin: 0 auto;
  max-width: ${(props) => props.theme.bp.desktop};
`;

const HeadingStyle = styled.div`
  padding: ${(props) => props.theme.space.xl} 0;
`;

const Section = ({
  alt = false,
  heading,
  children,
  main = false,
  bigSpace = false,
}) => {
  return (
    <OuterContainer alt={alt} main={main} bigSpace={bigSpace}>
      <InnerContainer>
        {heading && (
          <HeadingStyle>
            <Heading>{heading}</Heading>
          </HeadingStyle>
        )}
        {children}
      </InnerContainer>
    </OuterContainer>
  );
};

export default Section;
