import MessageInfo from "../messageInfo/messageInfo";
import { StyledMessage } from "./message.styles";

const Message = ({ children, isLast, isOwn, clickHandler = () => {} }) => {

  const onMessageClickHandler = () => {
    clickHandler(children.id);
  };

  return (
    <StyledMessage
      className={`${isLast ? "last" : ""} ${isOwn ? "own" : ""}`}
      onDoubleClick={onMessageClickHandler}
    >
      {children.message}
      <MessageInfo createdAt={children.createdAt} isOwn={isOwn} isRead={children.isRead}/>
    </StyledMessage>
  );
};

export default Message;
