import { BsCheck2All, BsCheck } from "react-icons/bs";
import { StyledInfo, StyledMessage } from "./message.styles";

const Message = ({ children, isLast, isOwn }) => {
  console.log(children.createdAt);
  const time = children.createdAt.match(/T(\d{1,2}:\d{1,2}:\d{1,2})\./)[1];

  const onMessageClickHandler = () => {};

  return (
    <StyledMessage
      className={`${isLast ? "last" : ""} ${isOwn ? "own" : ""}`}
      onDoubleClick={onMessageClickHandler}
    >
      {children.message}
      <StyledInfo>
        {time}
        {isOwn && !children.isRead && (
          <BsCheck style={{ color: "var(--text)" }} />
        )}
        {isOwn && children.isRead && (
          <BsCheck2All style={{ color: "var(--primary)" }} />
        )}
      </StyledInfo>
    </StyledMessage>
  );
};

export default Message;
