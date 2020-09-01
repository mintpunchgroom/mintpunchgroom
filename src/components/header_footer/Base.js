import styled from "styled-components";

const Base = styled.header`
  height: 100px;
  padding: 0 20px;
  background: ${(props) => props.theme.bgAlt};
  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    height: 60px;
  }

  a {
    color: currentColor;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: currentColor;
    }
  }
`;

export default Base;
