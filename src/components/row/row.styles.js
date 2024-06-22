import styled from "styled-components";

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.space ? `space-${props.space}` : "space-around"};
  align-items: center;
  position: relative;
`;
