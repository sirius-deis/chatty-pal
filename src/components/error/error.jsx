import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledError = styled.div`
  margin: 0 auto;
  padding: 0.3rem 10rem;
  border-radius: 15px;
  color: var(--main-color);
`;

const Error = ({ children }) => {
  return <StyledError>{children}</StyledError>;
};

Error.propTypes = {
  children: PropTypes.node,
};

export default Error;
