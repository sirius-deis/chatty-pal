import styled from 'styled-components';

import Row from '../row/row';

const StyledListItem = styled.li`
  width: 100%;
  min-height: 7rem;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background-color: var(--bg-color);
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const StyledStatus = styled.span`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  top: 0.1rem;
  right: 0.1rem;
  background-color: var(--online-color);
  border: 2px solid var(--bg-color-lighter);
  border-radius: 50%;
`;

const StyledWrapper = styled.div`
  max-width: calc(100% - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const StyledMessage = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.3rem;
  color: var(--text-color);
  font-weight: ${(props) => (props.unread ? 600 : 400)};
`;

const StyledName = styled.h6`
  font-size: 1.4rem;
  font-weight: 400;
`;

const StyledTime = styled.div`
  font-size: 1rem;
  color: var(--text-color);
`;

const StyledAmount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.4rem;
  min-width: 2.1rem;
  min-height: 2.1rem;
  border-radius: 50px;
  background-color: var(--bg-color);
  color: var(--text-color-lighter);
`;

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
