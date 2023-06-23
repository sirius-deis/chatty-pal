import { useState } from 'react';
import styled from 'styled-components';
import Message from '../message/message';

const StyledChat = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GreetMessage = styled.div`
  padding: 1.3rem 5rem;
  background-color: var(--bg-color-darker);
  font-size: 1.7rem;
  font-weight: 500;
  color: var(--text-color-lighter);
  border-radius: 10px;
  box-shadow: var(--shadow);
`;

const Chat = ({ chatId, isChatChosen }) => {
  const [messages, setMessages] = useState([]);
  return (
    <StyledChat>
      {!isChatChosen && <GreetMessage>Select a chat to start messaging</GreetMessage>}
      {isChatChosen &&
        messages.map((message) => (
          <Message own={false} time={null}>
            {message}
          </Message>
        ))}
    </StyledChat>
  );
};

export default Chat;
