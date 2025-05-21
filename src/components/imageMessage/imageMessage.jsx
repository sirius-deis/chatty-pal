import PropTypes from "prop-types";
import { StyledImageMessage } from './imageMessage.styles'

const ImageMessage = ({ message }) => {
  return <StyledImageMessage>
    <img src={message.src} alt={message.src} />
  </StyledImageMessage>
}

ImageMessage.propTypes = {
  message: PropTypes.object.isRequired,
}

export default ImageMessage;