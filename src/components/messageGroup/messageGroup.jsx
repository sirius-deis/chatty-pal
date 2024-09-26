import Message from "../message/message";
import React from "react";
import { StyledMessageGroup } from "./messageGroup.styles";
import ImageMessage from "../imageMessage/imageMessage";
import AudioMessage from "../audioMessage/audioMessage";
import VideoMessage from "../videoMessage/videoMessage";

//TODO: Add different types of messages
const MessageGroup = ({ messages, userId }) => {
  const isOwn = messages[0].senderId === userId;
  return (
    <StyledMessageGroup
      className={isOwn ? "own" : ""}
      data-testid="message_group"
    >
      
      {messages.map((message, i) => {
        let Component;
        switch (message.type) {
          case "text":
            Component = Message;
            break;
          case "image":
            Component = ImageMessage
            break;
          case 'audio':
            Component = AudioMessage
            break;
          case 'video':
            Component = VideoMessage
            break;
          default:
            Component = Message;
        }
        return <Component
            message={message}
            key={message.id}
            isLast={i === messages.length - 1}
            isOwn={isOwn}
          >
          </Component>
      })}
    </StyledMessageGroup>
  );
};

export default MessageGroup;
