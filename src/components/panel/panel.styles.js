import styled from "styled-components";

export const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: ${(props) => props.padding}rem;
  box-shadow: var(--shadow);
  border-radius: 5px;
  background-color: var(--text-lighter);
  img {
    width: 15rem;
  }
`;
