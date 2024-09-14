import styled from "styled-components";

export const StyledMessage = styled.div`
  max-width: 55%;
  position: relative;
  padding: 0.7rem 1.4rem;
  font-size: 1.7rem;
  background-color: var(--warning-300);
  border-radius: 10px;
  &.last::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    background-color: var(--warning-300);
    z-index: -1;
  }
  &.last:not(.own)::before {
    left: 0;
  }
  &.own.last::before {
    right: 0;
  }
`;