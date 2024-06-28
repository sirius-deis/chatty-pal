import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
  StyleChatBox,
  StyledImageContainer,
  StyledStatus,
  StyledWrapper,
  StyledMessage,
  StyledName,
  StyledTime,
  StyledAmount,
} from "./chatBox.styles";
import { getTime } from "../../utils/helpers";

import Row from "../row/row";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ChatBox = ({
  id,
  pictures,
  title,
  messages,
  unreadMessagesCount,
  isOnline = false,
}) => {
  const { user } = useSelector((state) => state.user);
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
    <StyleChatBox
      onClick={handleClick}
      className={`${isSelected ? "selected" : ""}`}
    >
      <StyledImageContainer>
        {pictures ? (
          <img src={pictures[0]} alt="chanel logo" />
        ) : (
          <div>{title.slice(0, 1).toUpperCase()}</div>
        )}
        {isOnline && <StyledStatus data-testid="status" />}
      </StyledImageContainer>
      <StyledWrapper>
        <Row space="between">
          <StyledName>{title}</StyledName>
          <StyledTime>
            {messages[0] && getTime(messages[0].createdAt)}
          </StyledTime>
        </Row>
        <Row>
          <StyledMessage unread={messages[0]?.senderId !== user.id}>
            {messages && messages[0]?.message}
          </StyledMessage>
        </Row>
      </StyledWrapper>
      {unreadMessagesCount > 0 && (
        <StyledAmount>{unreadMessagesCount}</StyledAmount>
      )}
    </StyleChatBox>
  );
};

ChatBox.propTypes = {
  id: PropTypes.number.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
  unreadMessagesCount: PropTypes.number,
  isOnline: PropTypes.bool,
};

export default ChatBox;
