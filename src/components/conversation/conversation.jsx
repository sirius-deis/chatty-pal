import { useNavigate } from "react-router-dom";
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

const Conversation = ({
  id,
  pictures,
  title,
  messages,
  time,
  unreadMessagesCount,
  isOnline = false,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick(id);
    navigate(`/chat/${id}`);
  };

  return (
    <StyleConversation onClick={handleClick}>
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
  onClick: PropTypes.func.isRequired,
};

export default Conversation;
