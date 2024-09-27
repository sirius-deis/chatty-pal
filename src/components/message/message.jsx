import PropTypes from "prop-types";
import MessageInfo from "../messageInfo/messageInfo";
import TextMessage from "../textMessage/textMessage";
import { StyledMessage } from "./message.styles";

const Message = ({ message, isLast, isOwn, clickHandler = () => {} }) => {

  const onMessageClickHandler = () => {
    clickHandler(message.id);
  };

  return (
    <StyledMessage
      className={`${isLast ? "last" : ""} ${isOwn ? "own" : ""}`}
      onDoubleClick={onMessageClickHandler}
    >
      <TextMessage>{message.message}</TextMessage>
      <MessageInfo createdAt={message.createdAt} isOwn={isOwn} isRead={message.isRead}/>
    </StyledMessage>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
  isLast: PropTypes.bool,
  isOwn: PropTypes.bool,
}

export default Message;
