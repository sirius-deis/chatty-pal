import PropTypes from "prop-types";
import { StyledVideoMessage, StyledVideo } from './videMessage.styles'

const VideoMessage = ({ message }) => {
  return <StyledVideoMessage>
    <StyledVideo src={message.src} data-testid={"video"}></StyledVideo>
  </StyledVideoMessage>
}

VideoMessage.propTypes = {
  message: PropTypes.object.isRequired,
  isOwn: PropTypes.bool,
}

export default VideoMessage;