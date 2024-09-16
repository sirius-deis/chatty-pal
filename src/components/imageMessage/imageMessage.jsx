import PropTypes from "prop-types";
import MessageInfo from "../messageInfo/messageInfo";
import {StyledImageMessage, StyledTextMessage} from './imageMessage.styles'

const ImageMessage = ({message, isOwn}) => {
  return <StyledImageMessage>
    <img src={message.src} alt={message.src} />
    <StyledTextMessage>{message.message}</StyledTextMessage>
    <MessageInfo createdAt={message.createdAt} isOwn={isOwn} isRead={message.isRead} />
  </StyledImageMessage>
}

ImageMessage.propTypes = {
  message: PropTypes.object.isRequired,
  isOwn: PropTypes.bool,
}

export default ImageMessage;