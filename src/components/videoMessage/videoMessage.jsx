import PropTypes from "prop-types";
import {StyledVideoMessage, StyledVideo, StyledTextMessage} from './videMessage.styles'

const VideoMessage = ({message, isOwn}) => {
  return <StyledVideoMessage>
    <StyledVideo src={message.src}></StyledVideo>
    <StyledTextMessage>{message.message}</StyledTextMessage>
    <MessageInfo createdAt={message.createdAt} isRead={message.isRead} isOwn={isOwn}/>
  </StyledVideoMessage>
}

VideoMessage.propTypes = {
  message: PropTypes.object.isRequired,
  isOwn: PropTypes.bool,
}

export default VideoMessage;