import styled from 'styled-components';

const StyledMessage = styled.div``;

const Message = ({ children }) => {
  return <StyledMessage>{children}</StyledMessage>;
};

export default Message;
