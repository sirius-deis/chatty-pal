import { useNavigate } from 'react-router-dom';
import {
  StyleConversation,
  StyledImageContainer,
  StyledStatus,
  StyledWrapper,
  StyledMessage,
  StyledName,
  StyledTime,
  StyledAmount,
} from './conversation.styles';

import Row from '../row/row';

const Conversation = ({
  id,
  pictures,
  title,
  messages,
  time,
  unreadMessagesCount,
  isOnline = false,
  onClickHandler,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClickHandler(id);
    navigate(`/chat/${id}`);
  };

  return (
    <StyleConversation onClick={handleClick}>
      <StyledImageContainer>
        {pictures ? (
          <img src={pictures[0]} alt='chanel logo' />
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
      {unreadMessagesCount > 0 && <StyledAmount>{unreadMessagesCount}</StyledAmount>}
    </StyleConversation>
  );
};

export default Conversation;
