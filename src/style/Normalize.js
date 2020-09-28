import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const Normalize = createGlobalStyle`
  ${normalize}

  &:focus {
    outline: none;
  }

  body {
    margin: 0;
      font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  .awssld__content {
    background-color: transparent;
  }

  a {
    color: ${(props) => props.theme.text};
    transition: color ease-in 200ms;

    &:visited {
      color: ${(props) => props.theme.text};
    }
  }
`;

export default Normalize;
