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
`;
