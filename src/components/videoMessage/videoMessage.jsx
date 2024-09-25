import PropTypes from "prop-types";

const VideoMessage = ({message, isOwn}) => {
  return <StyledVideoMessage>
    <StyledVideo src={message.src}></StyledVideo>
        <MessageInfo createdAt={message.createdAt} isRead={message.isRead} isOwn={isOwn}/>
  </StyledVideoMessage>
}

VideoMessage.propTypes = {
  message: PropTypes.object.isRequired,
  isOwn: PropTypes.bool,
}

export default VideoMessage;