import styled from "styled-components";

export const StyledImageMessage = styled.div`
  max-width: 55%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
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
  & img {
    max-width: 100%;
  }
`;

export const StyledTextMessage = styled.p`
  font-size: 1.7rem;
  background-color: var(--warning-300);
  border-radius: 10px;`
;