import PropTypes from "propTypes";
import MessageInfo from "../messageInfo/messageInfo";

const ImageMessage = ({message, isOwn}) => {
  return <div>
    <img src={message.imageURL} alt={message.imageURL} />
    <p>{message.message}</p>
    <MessageInfo createdAt={message.createdAt} isOwn={isOwn} isRead={message.isRead} />
  </div>
}

ImageMessage.propTypes = {
  message: PropTypes.object.isRequired,
  isOwn: PropTypes.bool,
}

export default ImageMessage;