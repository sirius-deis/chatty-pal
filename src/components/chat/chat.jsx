import { useState } from 'react';
import styled from 'styled-components';

const StyledChat = styled.div`
  flex-grow: 40;
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

const Chat = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  return <StyledChat>{!messages.length && <GreetMessage>Select a chat to start messaging</GreetMessage>}</StyledChat>;
};

export default Chat;
