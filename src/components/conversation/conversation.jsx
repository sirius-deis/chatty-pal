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

const Conversation = ({ image, name, message, time, unreadAmount, isOnline }) => {
  return (
    <StyleConversation>
      <StyledImageContainer>
        <img src={image} alt='chanel logo' />
        {isOnline && <StyledStatus />}
      </StyledImageContainer>
      <StyledWrapper>
        <Row>
          <StyledName>{name}</StyledName>
          <StyledTime>{time}</StyledTime>
        </Row>
        <Row>
          <StyledMessage unread={unreadAmount}>{message}</StyledMessage>
          <StyledAmount>{unreadAmount}</StyledAmount>
        </Row>
      </StyledWrapper>
    </StyleConversation>
  );
};

export default Conversation;
