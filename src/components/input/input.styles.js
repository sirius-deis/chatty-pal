import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  font-size: 2rem;
  padding: 1.3rem 1.3rem;
  border: ${(props) => (props.border ? "1px solid var(--text)" : 0)};
  border-radius: ${(props) => (props.borderRounded ? "50px" : "unset")};
  background-color: transparent;
  color: ${(props) =>
    props.color ? `var(--${props.color})` : "var(--text-darker)"};
  &:focus {
    outline: none;
    box-shadow: ${(props) => (props.shadow ? "var(--shadow)" : "unset")};
  }
  &::placeholder {
    color: var(--text);
    opacity: 1;
  }
`;
