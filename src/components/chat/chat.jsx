import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MessageGroup from '../messageGroup/messageGroup';
import ChatInput from '../chatInput/chatInput';
import useFetch from '../../hooks/useFetch';

const StyledChat = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledMessageContainer = styled.div`
  padding: 0.9rem 1.5rem;
  width: 100%;
  min-height: calc(100% - 5rem);
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 1.2rem;
  overflow-y: scroll;
`;

const StyledDate = styled.div`
  margin: 0 auto;
  padding: 0.3rem 10rem;
  border-radius: 15px;
  background-color: var(--bg-color-darker);
  color: var(--bg-color-lighter);
`;

const formatDateFromString = (date) => {
  const regexp = /^(\d{4}-\d{1,2}-\d{1,2})/;
  return date.match(regexp)[1];
};

const areDateTheSame = (d1 = '', d2 = '') => {
  const match1 = formatDateFromString(d1);
  const match2 = formatDateFromString(d2);
  return Date.parse(match1) === Date.parse(match2);
};

const divideMessagesInGroups = (messages = []) => {
  const messagesObj = {};
  let currDate = null;
  for (let i = 0; i < messages.length; i++) {
    if (!currDate || !areDateTheSame(currDate, messages[i].createdAt)) {
      currDate = formatDateFromString(messages[i].createdAt);
      messagesObj[currDate] = [];
    }
    let curArrLength = messagesObj[currDate].length - 1;
    const currArrLink = messagesObj[currDate][curArrLength];
    if (i === 0 || !currArrLink || currArrLink[0].senderId !== messages[i].senderId) {
      messagesObj[currDate].push([]);
      curArrLength++;
    }
    messagesObj[currDate][curArrLength].push(messages[i]);
  }
  return messagesObj;
};

const Chat = ({ chatId }) => {
  const user = useSelector((state) => state.user.user);
  const [messages, isLoading, error] = useFetch(`chats/${chatId}/messages`);
  const sortedMessages = divideMessagesInGroups(messages?.messages);

  const messagesToRender = [];

  for (let key in sortedMessages) {
    const messageGroupArr = sortedMessages[key].map((messageGroup, i) => {
      return (
        <MessageGroup key={i} userId={user.id}>
          {messageGroup}
        </MessageGroup>
      );
    });
    messagesToRender.push(...messageGroupArr);
    messagesToRender.push(<StyledDate>{key}</StyledDate>);
  }

  return (
    <StyledChat>
      <StyledMessageContainer>{messagesToRender}</StyledMessageContainer>
      <ChatInput />
    </StyledChat>
  );
};

export default Chat;
