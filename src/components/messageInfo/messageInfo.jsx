import { BsCheck2All, BsCheck } from "react-icons/bs";
import { StyledMessageInfo } from './messageInfo.styles'

const MessageInfo = ({ isOwn, isRead, createdAt }) => {
  const time = createdAt.match(/T(\d{1,2}:\d{1,2}:\d{1,2})./)[1];
  <StyledMessageInfo>
    {time}
    {isOwn && !isRead && (
      <BsCheck style={{ color: "var(--text)" }} />
    )}
    {isOwn && isRead && (
      <BsCheck2All style={{ color: "var(--primary)" }} />
    )}
  </StyledMessageInfo>
}

export default MessageInfo;