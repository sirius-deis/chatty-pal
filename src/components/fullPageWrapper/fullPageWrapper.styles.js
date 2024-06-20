import styled from "styled-components";

export const StyledFullPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: ${(props) => (props.dir === "row" ? "row" : "column")};
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.gap ? `${props.gap}rem` : "0")};
`;
