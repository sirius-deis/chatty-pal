import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: var(--bg-color-lighter);
  box-shadow: var(--shadow);
  font-size: 1.5rem;
  z-index: 100;
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--shadow-color);
  cursor: pointer;
  z-index: 99;
`;

export const StyledCloseButtonWrapper = styled.div`
  position: absolute;
  opacity: 0;
  top: 0.5rem;
  right: 0.5rem;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 1;
  }
`;
