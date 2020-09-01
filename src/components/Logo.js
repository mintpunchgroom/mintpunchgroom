import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as LogoSVG } from "../assets/logo.svg";

const Style = styled.div`
  display: inline-block;
  font-size: 24px;
  font-weight: 300;

  @media (max-width: 720px) {
    font-size: 20px;

    svg {
      width: 50px;
      height: 50px;
    }
  }

  a {
    display: flex;
    align-items: flex-end;
  }

  span {
    margin-left: ${(props) => props.theme.space.sm};
  }
`;

const Logo = ({ onClick }) => {
  return (
    <Style>
      <Link to="/" onClick={onClick}>
        <LogoSVG />
        <span>
          Mint <br /> Punchgroom
        </span>
      </Link>
    </Style>
  );
};

export default Logo;
