import styled from "styled-components";

export const StyledHeader = styled.div`
  color: ${(props) =>
    props.color ? `var(--${props.color})` : "var(--text-darker)"};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : "0")};
  h1 {
    font-weight: ${(props) => (props.weight ? `${props.weight}` : "600")};
    font-size: ${(props) => (props.size ? `${props.size}rem` : "3rem")};
  }
  h2 {
    font-weight: ${(props) => (props.weight ? `${props.weight}` : "400")};
    font-size: ${(props) => (props.size ? `${props.size}rem` : "2.5rem")};
  }
  h3 {
    font-weight: ${(props) => (props.weight ? `${props.weight}` : "300")};
    font-size: ${(props) => (props.size ? `${props.size}rem` : "2rem")};
  }
`;
