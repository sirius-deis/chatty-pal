import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Message from '../message/message';
import useFetch from '../../hooks/useFetch';

const StyledChat = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Chat = ({ chatId }) => {
  const user = useSelector((state) => state.user.user);
  const [messages, isLoading, error] = useFetch(`chats/${chatId}/messages`);
  return (
    <StyledChat>
      {messages?.messages.map((message) => (
        <Message own={user === message.senderId} time={null}>
          {message}
        </Message>
      ))}
    </StyledChat>
  );
};

export default Chat;
