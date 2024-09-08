import styled from "styled-components";

export const StyledError = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0.3rem 10rem;
  border-radius: 15px;
  color: var(--warning);
  font-size: ${(props) => `${props.fSize}rem` || "1.8rem"};
`;
