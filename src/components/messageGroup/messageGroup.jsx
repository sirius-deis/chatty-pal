import Message from "../message/message";
import React from "react";
import { StyledMessageGroup } from "./messageGroup.styles";

//TODO: Add different types of messages
const MessageGroup = ({ messages, userId }) => {
  const isOwn = messages[0].senderId === userId;
  return (
    <StyledMessageGroup
      className={isOwn ? "own" : ""}
      data-testid="message_group"
    >
      {messages.map((message, i) => (
        <Message
          message={message}
          key={message.id}
          isLast={i === messages.length - 1}
          isOwn={isOwn}
        >
        </Message>
      ))}
    </StyledMessageGroup>
  );
};

export default MessageGroup;
