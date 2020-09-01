import React from "react";
import styled from "styled-components";

import Section from "../Section";
import Review from "../Review";

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 60px;

  > * {
    margin: 0 ${(props) => props.theme.space.md};
    width: 300px;
    height: 175px;

    &:nth-child(2) {
      margin-top: ${(props) => props.theme.space.md};
      width: 350px;
      height: 200px;
    }
  }
`;

const data = [
  {
    text: "Thank you! Thank you! Thank you!",
  },
  {
    text: "Best place ever!",
  },
  {
    text:
      "What to do? Some very very very long freacking text inside the review box, event longer than that, you have no freacking idea how long it is.",
  },
];

const Reviews = () => {
  return (
    <Section bigSpace heading="Reviews">
      <Container>
        {data.map((item, index) => (
          <Review key={index} large={index === 1}>
            {item.text}
          </Review>
        ))}
      </Container>
    </Section>
  );
};

export default Reviews;
