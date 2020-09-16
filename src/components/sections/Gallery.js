import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import useWindowSize from "../../utility/useWindowSize";
import Heading from "../Heading";
import Text from "../Text";

import images from "../../images";
import text from "../../text";

const Contatiner = styled.div`
  margin-top: -0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Img = styled.img`
  padding: 0.25rem;
  width: 300px;
  height: 300px;

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 400px) {
    width: 300px;
    height: 300px;
  }
`;

const LinkStyle = styled.div`
  margin-bottom: 3rem;

  a {
    color: ${(props) => props.theme.text};

    &:visited {
      color: ${(props) => props.theme.text};
    }
  }
`;

const Gallery = () => {
  const width = useWindowSize().width;
  const [imagesArray, setImagesArray] = React.useState(images);

  React.useEffect(() => {
    if (width < 1500 && width >= 1200) {
      setImagesArray(images.slice(0, 8));
    } else if (width < 1200 && width >= 900) {
      setImagesArray(images.slice(0, 6));
    } else if (width < 900 && width >= 400) {
      setImagesArray(images.slice(0, 4));
    } else if (width < 400) {
      setImagesArray(images.slice(0, 2));
    } else {
      setImagesArray(images.slice(0, 10));
    }
  }, [width]);

  return (
    <>
      <Heading>{text.sections.galery.heading}</Heading>
      <Contatiner>
        {imagesArray.map((src, i) => (
          <Img key={i} src={src} />
        ))}
      </Contatiner>
      <LinkStyle>
        <Text align="center">
          <Link to="/galery">{text.sections.galery.link}</Link>
        </Text>
      </LinkStyle>
    </>
  );
};

export default Gallery;
