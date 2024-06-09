import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: flex-start;
  justify-content: center;
  list-style: none;
`;

export const StyledListItem = styled.li`
  width: 100%;
  cursor: pointer;
`;
