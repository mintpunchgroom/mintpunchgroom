import React from "react";
import styled from "styled-components";

import Section from "../components/Section";
import RatioContainer from "../components/RatioContainer";

import images from "../images";
import text from "../text";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 500px));
  justify-content: center;

  gap: 2px;
`;

const Image = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GalleryPage = () => {
  return (
    <Section heading={text.gallery} main>
      <ImageGrid>
        {images.map((src, i) => (
          <Image key={i}>
            <RatioContainer ratioX={1} ratioY={1}>
              <img src={src} alt="" />
            </RatioContainer>
          </Image>
        ))}
      </ImageGrid>
    </Section>
  );
};

export default GalleryPage;
