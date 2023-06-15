import {
  StyledListItem,
  StyledImageContainer,
  StyledStatus,
  StyledWrapper,
  StyledMessage,
  StyledName,
  StyledTime,
  StyledAmount,
} from './listItem.styles';

import Row from '../row/row';

const ListItem = ({ image, name, message, time, unreadAmount, isOnline }) => {
  return (
    <StyledListItem>
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
    </StyledListItem>
  );
};

export default ListItem;
