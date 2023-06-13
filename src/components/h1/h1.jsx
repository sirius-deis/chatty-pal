import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-weight: 300;
  font-size: 2.8rem;
`;

const H1 = ({ children, color }) => {
  return <StyledH1 color={color}>{children}</StyledH1>;
};

export default H1;
