import styled from "styled-components";

export const StyledChatPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Greeting = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    padding: 1.3rem 5rem;
    background-color: var(--text-lighter);
    font-size: 1.7rem;
    font-weight: 500;
    color: var(--text-darker);
    border-radius: 10px;
    box-shadow: var(--shadow);
  }
`;
