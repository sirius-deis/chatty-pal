import styled from 'styled-components';

const StyledRow = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Row = ({ children, style }) => {
  return <StyledRow style={style}>{children}</StyledRow>;
};

export default Row;
