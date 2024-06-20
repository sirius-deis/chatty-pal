import styled from "styled-components";

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => "space-around" || `space-${props.space}`};
  align-items: center;
  position: relative;
`;

const Row = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};

export default Row;
