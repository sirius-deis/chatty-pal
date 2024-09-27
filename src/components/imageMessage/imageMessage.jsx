import PropTypes from "prop-types";
import MessageInfo from "../messageInfo/messageInfo";
import TextMessage from "../textMessage/textMessage";
import {StyledImageMessage} from './imageMessage.styles'

const ImageMessage = ({message, isOwn}) => {
  return <StyledImageMessage>
    <img src={message.src} alt={message.src} />
    <TextMessage>{message.message}</TextMessage>
    <MessageInfo createdAt={message.createdAt} isOwn={isOwn} isRead={message.isRead} />
  </StyledImageMessage>
}

ImageMessage.propTypes = {
  message: PropTypes.object.isRequired,
  isOwn: PropTypes.bool,
}

export default ImageMessage;