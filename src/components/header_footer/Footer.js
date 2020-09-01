import React from "react";
import styled from "styled-components";
import Base from "./Base";

const Style = styled(Base)`
  bottom: 0;
  left: 0;
  right: 0;

  color: ${(props) => props.theme.textAlt};

  @media (max-width: 720px) {
    height: auto !important;
    flex-direction: column;

    text-align: center;
  }
`;

const Icons = styled.div`
  display: flex;

  justify-content: space-between;

  > * + * {
    margin-left: 0.5rem;
  }
`;

const Icon = styled.div`
  i {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <Style>
      <p>
        <span>
          Photo by <br />
          <a href="https://unsplash.com/@purplelydia?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Lydia Tan
          </a>{" "}
          and{" "}
          <a href="https://unsplash.com/@jamie452?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Jamie Street
          </a>{" "}
          <br />
          on{" "}
          <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </p>
      <Icons>
        <a href="https://www.google.com/">
          <Icon>
            <i class="fab fa-twitter-square"></i>
          </Icon>
        </a>
        <a href="https://www.instagram.com/">
          <Icon>
            <i class="fab fa-instagram-square"></i>
          </Icon>
        </a>
        <a href="https://www.google.com/">
          <Icon>
            <i class="fab fa-facebook-square"></i>
          </Icon>
        </a>
      </Icons>
      <p>Made by Dudak Studio. 2020</p>
    </Style>
  );
};

export default Footer;
