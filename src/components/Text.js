import styled from "styled-components";

const Text = styled.p`
  ${(props) => props.theme.p}
  text-align: ${(props) => (props.align ? props.align : "left")}

`;

export default Text;
