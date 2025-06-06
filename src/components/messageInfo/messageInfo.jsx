import { BsCheck2All, BsCheck } from "react-icons/bs";
import { StyledMessageInfo } from './messageInfo.styles'

const MessageInfo = ({ isOwn, isRead, createdAt }) => {
  const time = createdAt.match(/T(\d{1,2}:\d{1,2}:\d{1,2})/)[1];
  return <StyledMessageInfo>
    {time}
    {isOwn && !isRead && (
      <BsCheck data-testid="notChecked" style={{ color: "var(--text)" }} />
    )}
    {isOwn && isRead && (
      <BsCheck2All data-testid="checked" style={{ color: "var(--primary)" }} />
    )}
  </StyledMessageInfo>
}

export default MessageInfo;