import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100vh;
  padding: 1.2rem 0 0;
  background-color: var(--text-lighter);
  border-right: 1px solid var(--text-darker);
`;

export const StyledScroll = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  padding-top: 1.2rem;
  overflow-y: scroll;
`;
