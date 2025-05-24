import PropTypes from "prop-types";
import MessageInfo from "../messageInfo/messageInfo";
import TextMessage from "../textMessage/textMessage";
import AudioMessage from "../audioMessage/audioMessage";
import VideoMessage from "../videoMessage/videoMessage";
import ImageMessage from "../imageMessage/imageMessage";
import { StyledMessage } from "./message.styles";

const chooseMessageType = ({ type, ...rest }) => {
  switch (type) {
    case "audio":
      return <AudioMessage {...rest} />;
    case "video":
      return <VideoMessage {...rest} />;
    case "image":
      return <ImageMessage {...rest} />;
    default:
      return null;
  }
}

const Message = ({ message, isLast, isOwn, clickHandler = () => { } }) => {

  const onMessageClickHandler = () => {
    clickHandler(message.id);
  };

  const ContentToRender = chooseMessageType(message)

  return (
    <StyledMessage
      className={`${isLast ? "last" : ""} ${isOwn ? "own" : ""}`}
      onDoubleClick={onMessageClickHandler}
    >
      {ContentToRender}
      {message.message && <TextMessage>{message.message}</TextMessage>}
      <MessageInfo createdAt={message.createdAt} isOwn={isOwn} isRead={message.isRead} />
    </StyledMessage>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
  isLast: PropTypes.bool,
  isOwn: PropTypes.bool,
}

export default Message;
