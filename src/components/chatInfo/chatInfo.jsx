import PropTypes from "prop-types";
import { StyledChatInfo } from "./chatInfo.styles";

const ChatInfo = ({ name, photoSrc }) => {
  return <StyledChatInfo>
    {name}
    <img src={photoSrc} alt={`${name} profile photo`} />
  </StyledChatInfo>;
};

ChatInfo.propTypes = {
  name: PropTypes.string.isRequired,
  photoSrc: PropTypes.string,
};

export default ChatInfo;
