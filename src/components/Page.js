import React from "react";
import styled from "styled-components";

const Style = styled.main`
  padding-top: 60px;
  min-height: calc(100vh - 100px);
`;

const Page = ({ children }) => {
  return <Style>{children}</Style>;
};

export default Page;
