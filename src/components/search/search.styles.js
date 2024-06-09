import styled from "styled-components";

export const StyledWrapper = styled.div`
  flex-grow: 6;
  position: relative;
  padding: 0.4rem;
  border-radius: 5px;
  background-color: var(--bg-color);
  &:has(input:focus) {
    box-shadow: var(--shadow);
  }
`;

export const StyledSearch = styled.input`
  width: 95%;
  padding: 0.5rem 1rem;
  caret-color: var(--default);
  border: 0;
  background-color: transparent;
  color: var(--text-darker);
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
