import React, { useRef } from "react";
import styled from "styled-components";
import { useButton } from "@react-aria/button";
import { Link } from "react-router-dom";

const Style = styled.button`
  box-sizing: border-box;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  padding: 10px 20px;
  border: none;

  border-radius: 50px;
  transition: background-color ease-in 200ms;

  cursor: pointer;

  &:hover {
    background: #34cc9f;
  }

  &:active {
    transition: background-color ease-in 150ms;
    background: #33b58f;
  }
`;

const Button = ({ to = "/contacts", ...props }) => {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);

  return (
    <Link to={to}>
      <Style {...buttonProps} ref={ref}>
        {props.children}
      </Style>
    </Link>
  );
};

export default Button;
