import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MessageGroup from "../messageGroup/messageGroup";
import ChatInput from "../chatInput/chatInput";
import Loader from "../loader/loader";
import AnimateWrapper from "../animateWrapper/animateWrapper";
import ChatInfo from "../chatInfo/chatInfo";
import Error from "../error/error";
import { fetchSingleChat } from "../../store/chat/chat.actions";
import {
  StyledChat,
  StyledDate,
  StyledMessageContainer,
  StyledMessageContainerWrapper,
} from "./chat.styles";

const formatDateFromString = (date) => {
  const regexp = /^(\d{4}-\d{1,2}-\d{1,2})/;
  return date.match(regexp)[1];
};

const areDatesTheSame = (d1 = "", d2 = "") => {
  const match1 = formatDateFromString(d1);
  const match2 = formatDateFromString(d2);
  return Date.parse(match1) === Date.parse(match2);
};

const divideMessagesInGroups = (messages = []) => {
  const messagesObj = {};
  let currDate = null;
  for (let i = 0; i < messages.length; i++) {
    if (!currDate || !areDatesTheSame(currDate, messages[i].createdAt)) {
      currDate = formatDateFromString(messages[i].createdAt);
      messagesObj[currDate] = [];
    }
    let curArrLength = messagesObj[currDate].length - 1;
    const currArrLink = messagesObj[currDate][curArrLength];
    if (
      i === 0 ||
      !currArrLink ||
      currArrLink[0].senderId !== messages[i].senderId
    ) {
      messagesObj[currDate].push([]);
      curArrLength++;
    }
    messagesObj[currDate][curArrLength].unshift(messages[i]);
  }
  return messagesObj;
};

const Chat = ({ chatId }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const user = useSelector((state) => state.user.user);
  const { chats, isLoading, error } = useSelector((state) => state.chat);

  const chat = chats.find((chat) => chat.id === chatId);
  const sortedMessages = divideMessagesInGroups(chat?.messages);

  const messagesToRender = [];

  for (let key in sortedMessages) {
    const messageGroupArr = sortedMessages[key].map((messageGroup, i) => {
      return (
        <MessageGroup
          key={`${key}-${i}`}
          userId={user.id}
          messages={messageGroup}
        />
      );
    });
    messagesToRender.push(...messageGroupArr);
    messagesToRender.push(<StyledDate>{key}</StyledDate>);
  }

  useEffect(() => {
    if (!chat) {
      dispatch(fetchSingleChat(chatId));
    }
  }, [dispatch, chatId]);

  return (
    <StyledChat>
      <AnimateWrapper
        isMounted={isHovered}
        mountedStyle={{ animation: "slideOut 0.2s linear 1 forwards" }}
        unmountedStyle={{ animation: "slideIn 0.2s linear 1 forwards" }}
        delay={200}
      >
        <ChatInfo />
      </AnimateWrapper>
      <StyledMessageContainerWrapper>
        {isLoading && <Loader />}
        {!isLoading && error && (
          <Error fSize={3}>Something went wrong. Please reload the page</Error>
        )}
        {!isLoading && !error && (
          <StyledMessageContainer>{messagesToRender}</StyledMessageContainer>
        )}
      </StyledMessageContainerWrapper>
      <ChatInput chatId={chatId} />
    </StyledChat>
  );
};

Chat.propTypes = {
  chatId: PropTypes.string,
};

export default Chat;
