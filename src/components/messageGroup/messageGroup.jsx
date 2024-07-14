import Message from "../message/message";
import React from "react";
import { StyledMessageGroup } from "./messageGroup.styles";

const MessageGroup = ({ messages, userId }) => {
  const isOwn = messages[0].senderId === userId;
  return (
    <StyledMessageGroup
      className={isOwn ? "own" : ""}
      data-testid="message_group"
    >
      {messages.map((child, i) => (
        <Message
          key={child.id}
          isLast={i === messages.length - 1}
          isOwn={isOwn}
        >
          {child}
        </Message>
      ))}
    </StyledMessageGroup>
  );
};

export default MessageGroup;
