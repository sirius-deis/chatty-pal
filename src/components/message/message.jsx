import styled from 'styled-components';

const StyledMessage = styled.div``;

const Message = ({ children, own }) => {
  return <StyledMessage>{children.message}</StyledMessage>;
};

export default Message;
