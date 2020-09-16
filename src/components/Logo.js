import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as LogoSVG } from "../assets/logo.svg";

const Style = styled.div`
  display: inline-block;
  font-weight: 300;

  font-size: 18px;

  svg {
    width: 40px;
    height: 40px;
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
