import styled from 'styled-components';
import Message from '../message/message';

const StyledMessageGroup = styled.div``;

const MessageGroup = ({ messages }) => {
  return (
    <StyledMessageGroup>
      {messages.map((message) => (
        <Message>{message}</Message>
      ))}
    </StyledMessageGroup>
  );
};

export default MessageGroup;
