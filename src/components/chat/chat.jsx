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

const areDateTheSame = (d1 = '', d2 = '') => {
  const regexp = /^(\d{4}-\d{1,2}-\d{1,2})/;
  const match1 = d1.match(regexp)[1];
  const match2 = d2.match(regexp)[1];
  console.log(match1, match2);
  return Date.parse(match1) === Date.parse(match2);
};

const divideMessagesInGroups = (messages = []) => {
  const messagesObj = {};
  let currDate = null;
  for (let i = 0; i < messages.length; i++) {
    if (!currDate || !areDateTheSame(currDate, messages[i].createdAt)) {
      currDate = messages[i].createdAt;
      messagesObj[currDate] = [];
    }
    const currArrLink = messagesObj[currDate][messagesObj[currDate].length - 1];
    if (i === 0 || !currArrLink || currArrLink[0].senderId !== messages[i].senderId) {
      messagesObj[currDate].push([]);
    }
    messagesObj[currDate][messagesObj[currDate].length - 1].push(messages[i]);
  }
  return messagesObj;
};

const Chat = ({ chatId }) => {
  const user = useSelector((state) => state.user.user);
  const [messages, isLoading, error] = useFetch(`chats/${chatId}/messages`);
  const sortedMessages = divideMessagesInGroups(messages?.messages);
  return (
    <StyledChat>
      {[].map((messageGroup) => (
        <MessageGroup messages={messageGroup} userId={user.id} />
      ))}
    </StyledChat>
  );
};

export default Chat;
