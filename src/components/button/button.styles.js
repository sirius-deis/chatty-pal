import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 2rem;
  background-color: ${(props) =>
    props.backgroundColor
      ? `var(--${props.backgroundColor})`
      : "var(--main-color)"};
  color: ${(props) =>
    props.color ? `var(--${props.color})` : "var(--text-color-lighter)"};
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;

export const StyledPlainButton = styled(StyledButton)`
  padding: 1rem 8rem;
  border-radius: 5px;
`;

export const StyledRoundedButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;
