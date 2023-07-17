import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MessageGroup from '../messageGroup/messageGroup';
import useFetch from '../../hooks/useFetch';

const StyledChat = styled.div`
  padding: 0.9rem 1.5rem;
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: baseline;
  gap: 0.5rem;
`;

const divideMessagesInGroups = (messages = []) => {
  const arr = [];
  for (let i = 0; i < messages.length; i++) {
    if (i === 0 || arr[arr.length - 1][0].senderId !== messages[i].senderId) {
      arr[arr.length] = [];
    }
    arr[arr.length - 1].push(messages[i]);
  }
  return arr;
};

const Chat = ({ chatId }) => {
  const user = useSelector((state) => state.user.user);
  const [messages, isLoading, error] = useFetch(`chats/${chatId}/messages`);
  return (
    <StyledChat>
      {divideMessagesInGroups(messages?.messages).map((messageGroup) => (
        <MessageGroup messages={messageGroup} userId={user.id} />
      ))}
    </StyledChat>
  );
};

export default Chat;
