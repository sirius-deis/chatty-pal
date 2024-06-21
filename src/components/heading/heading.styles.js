import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-weight: ${(props) => (props.weight ? props.weight : 300)};
  font-size: ${(props) => (props.size ? `${props.size}rem` : "2.8rem")};
  color: ${(props) =>
    props.color ? `var(--${props.color})` : "var(--text-darker)"};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : "0")};
`;