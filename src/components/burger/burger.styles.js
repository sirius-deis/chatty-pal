import styled from "styled-components";

export const StyledMenu = styled.button`
  flex-grow: 1;
  width: 2.5rem;
  max-width: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledMenuItem = styled.div`
  width: 100%;
  height: 0.3rem;
  background-color: var(--text-darker);
`;
