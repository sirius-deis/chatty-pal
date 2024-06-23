import styled from "styled-components";

export const StyledChatInput = styled.form`
  width: 100%;
  display: flex;
  background-color: var(--bg-color);
  border-top: 1px solid var(--text-darker);
`;

export const StyledLabel = styled.label`
  position: relative;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    font-size: 2.5rem;
    color: var(--text);
  }
  input {
    display: none;
  }
`;
