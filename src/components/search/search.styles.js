import styled from "styled-components";

export const StyledWrapper = styled.div`
  flex-grow: 6;
  position: relative;
  padding: 0.4rem;
  border: 1px solid var(--text);
  border-radius: 3px;
  background-color: transparent;
  &:has(input:focus) {
    border: 1px solid var(--text-darker);
  }
`;

export const StyledSearch = styled.input`
  width: 95%;
  padding: 0.5rem 1rem;
  caret-color: var(--text-darker);
  border: 0;
  &:focus {
    outline: none;
  }
  &:placeholder {
    color: var(--text-darker);
  }
`;

export const StyledCross = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  border: 0;
  background-color: transparent;
  color: var(--text-darker);
  transform: translateY(-50%);
  cursor: pointer;
`;
