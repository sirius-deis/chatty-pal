import styled from 'styled-components';

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Row = ({ children, style }) => {
  return <StyledRow style={style}>{children}</StyledRow>;
};

export default Row;
