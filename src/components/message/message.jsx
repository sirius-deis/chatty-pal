import styled from 'styled-components';

const StyledMessage = styled.div`
  max-width: 55%;
  padding: 0.7rem 1.4rem;
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
  background-color: var(--bg-color-lighter);
  border-radius: 10px;
  &.last {
    color: red;
  }
`;

const StyledTime = styled.div`
  align-self: flex-end;
  font-size: 1rem;
`;

const Message = ({ children, isLast, isOwn }) => {
  const time = children.createdAt.match(/T(\d{1,2}:\d{1,2}:\d{1,2})\./)[1];
  return (
    <StyledMessage className={`${isLast ? 'last' : ''} ${isOwn ? 'own' : ''}`}>
      {children.message}
      <StyledTime>{time}</StyledTime>
    </StyledMessage>
  );
};

export default Message;
