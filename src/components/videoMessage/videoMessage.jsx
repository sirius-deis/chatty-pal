import PropTypes from "prop-types";
import TextMessage from "../textMessage/textMessage";
import {StyledVideoMessage, StyledVideo} from './videMessage.styles'

const VideoMessage = ({message, isOwn}) => {
  return <StyledVideoMessage>
    <StyledVideo src={message.src}></StyledVideo>
    <TextMessage>{message.message}</TextMessage>
    <MessageInfo createdAt={message.createdAt} isRead={message.isRead} isOwn={isOwn}/>
  </StyledVideoMessage>
}

VideoMessage.propTypes = {
  message: PropTypes.object.isRequired,
  isOwn: PropTypes.bool,
}

export default VideoMessage;