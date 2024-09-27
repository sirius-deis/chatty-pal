import styled from "styled-components";

export const StyledMessageGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 0.1rem;
  &.own {
    align-items: flex-end;
  }
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
