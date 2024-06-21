import styled from "styled-components";

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => "space-around" || `space-${props.space}`};
  align-items: center;
  position: relative;
`;
