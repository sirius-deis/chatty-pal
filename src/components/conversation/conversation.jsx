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

import Row from "../row/row";
import { useEffect, useState } from "react";

const Conversation = ({
  id,
  pictures,
  title,
  messages,
  time,
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
        <Row>
          <StyledName>{title}</StyledName>
          <StyledTime>{time}</StyledTime>
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
  time: PropTypes.string.isRequired,
  unreadMessagesCount: PropTypes.number,
  isOnline: PropTypes.bool,
};

export default Conversation;
