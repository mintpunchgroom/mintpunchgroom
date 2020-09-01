const space = {
  null: 0,
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
};

const font = {
  size: {
    sm: "14px",
    regular: "16px",
    medium: "24px",
    large: "28px",
    xlarge: "38px",
  },
};

const bp = {
  desktop: "1200px",
};

export const defaultTheme = {
  space,
  bp,

  /* TEXT */
  p: `font-size: ${font.size.regular};`,
  h1: `font-size: ${font.size.large}; font-weight: 300;`,
  h2: `font-size: ${font.size.medium}; font-weight: 500;`,
  small: `font-size: ${font.size.sm};`,
  huge: `font-size: ${font.size.xlarge};`,

  /* COLORS */
  primary: "#52CDC1",
  secondary: "#feb5a5",

  bg: "white",
  bgAlt: "#fde8e4",

  text: "#2e2e2e",
  textWhite: "white",
  textAlt: "#616161",
};
