import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  border: 5px solid ${(props) => props.theme.primary};
  border-radius: 50px;

  ${(props) => (props.large ? props.theme.huge : props.theme.h2)}
  text-align:center;
`;

const Quote = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  top: ${(props) => !props.bottom && "-30px"};
  left: ${(props) => !props.bottom && "-30px"};
  bottom: ${(props) => props.bottom && "-30px"};
  right: ${(props) => props.bottom && "-30px"};

  ${(props) => props.theme.h2}
  color: ${(props) => props.theme.primary};

  background-color: ${(props) => props.theme.bg};
  width: 70px;
  height: 70px;
`;
const Review = ({ large = false, borderless = false, children }) => {
  return (
    <Container large={large} borderless={borderless}>
      <Quote>
        <i class="fas fa-quote-right"></i>
      </Quote>
      <div>{children}</div>
      <Quote bottom>
        <i class="fas fa-quote-left"></i>
      </Quote>
    </Container>
  );
};

export default Review;
