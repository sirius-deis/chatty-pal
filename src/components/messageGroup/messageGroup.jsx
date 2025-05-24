import PropTypes from "prop-types";
import Message from "../message/message";
import { StyledMessageGroup } from "./messageGroup.styles";

const MessageGroup = ({ messages, userId }) => {
  const isOwn = messages[0].senderId === userId;
  return (
    <StyledMessageGroup
      className={isOwn ? "own" : ""}
      data-testid="message_group"
    >

      {messages.map((message, i) => {
        return <Message
          message={message}
          key={message.id}
          isLast={i === messages.length - 1}
          isOwn={isOwn}
        >
        </Message>
      })}
    </StyledMessageGroup>
  );
};

MessageGroup.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      senderId: PropTypes.number.isRequired,
      message: PropTypes.string,
      src: PropTypes.string,
      type: PropTypes.string.isRequired,
      isRead: PropTypes.bool,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  userId: PropTypes.number.isRequired,
}

export default MessageGroup;
