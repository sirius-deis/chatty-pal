import styled from "styled-components";

export const StyledChat = styled.div`
  position: relative;
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledMessageContainerWrapper = styled.div`
  width: 100%;
  min-height: calc(100% - 5rem);
`;

export const StyledMessageContainer = styled.div`
  padding: 0.9rem 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 1.2rem;
  overflow-y: scroll;
  color: var(--text-darker);
`;

export const StyledDate = styled.div`
  margin: 0 auto;
  padding: 0.3rem 10rem;
  border-radius: 15px;
  background-color: var(--warning-300);
`;
