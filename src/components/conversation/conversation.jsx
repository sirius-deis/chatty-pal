import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
  StyleConversation,
  StyledImageContainer,
  StyledStatus,
  StyledWrapper,
  StyledMessage,
  StyledName,
  StyledTime,
  StyledAmount,
} from "./conversation.styles";
import { getTime } from "../../utils/helpers";

import Row from "../row/row";
import { useEffect, useState } from "react";

const Conversation = ({
  id,
  pictures,
  title,
  messages,
  createdAt,
  unreadMessagesCount,
  isOnline = false,
}) => {
  const navigate = useNavigate();
  const { chatIdParam } = useParams();
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    navigate(`/chat/${id}`);
  };

  useEffect(() => {
    setIsSelected(id.toString() === chatIdParam);
  }, [chatIdParam]);

  console.log(title, messages);

  return (
    <StyleConversation
      onClick={handleClick}
      className={`${isSelected ? "selected" : ""}`}
    >
      <StyledImageContainer>
        {pictures ? (
          <img src={pictures[0]} alt="chanel logo" />
        ) : (
          <div>{title.slice(0, 1).toUpperCase()}</div>
        )}
        {isOnline && <StyledStatus />}
      </StyledImageContainer>
      <StyledWrapper>
        <Row space="start">
          <StyledName>{title}</StyledName>
          <StyledTime>
            {messages[0] && getTime(messages[0].createdAt)}
          </StyledTime>
        </Row>
        <Row>
          <StyledMessage unread={unreadMessagesCount}>
            {messages && messages[0]?.message}
          </StyledMessage>
        </Row>
      </StyledWrapper>
      {unreadMessagesCount > 0 && (
        <StyledAmount>{unreadMessagesCount}</StyledAmount>
      )}
    </StyleConversation>
  );
};

Conversation.propTypes = {
  id: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
  createdAt: PropTypes.string.isRequired,
  unreadMessagesCount: PropTypes.number,
  isOnline: PropTypes.bool,
};

export default Conversation;
