import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BsCheck2All } from 'react-icons/bs';

const StyledMessage = styled.div`
  max-width: 55%;
  position: relative;
  padding: 0.7rem 1.4rem;
  font-size: 1.7rem;
  background-color: var(--bg-color-lighter);
  border-radius: 10px;
  &.last::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    background-color: var(--bg-color-lighter);
    z-index: -1;
  }
  &.last:not(.own)::before {
    left: 0;
  }
  &.own.last::before {
    right: 0;
  }
`;

const StyledInfo = styled.div`
  margin-left: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  float: right;
  font-size: 0.8rem;
  color: var(--text-color);
  svg {
    margin-left: 0.4rem;
    font-size: 1.5rem;
  }
`;

const Message = ({ children, isLast, isOwn }) => {
  const dispatch = useDispatch();
  const time = children.createdAt.match(/T(\d{1,2}:\d{1,2}:\d{1,2})\./)[1];

  const onMessageClickHandler = () => {};

  return (
    <StyledMessage
      className={`${isLast ? 'last' : ''} ${isOwn ? 'own' : ''}`}
      onDoubleClick={onMessageClickHandler}
    >
      {children.message}
      <StyledInfo>
        {time}
        {isOwn && !children.isRead && <BsCheck2All />}
        {isOwn && children.isRead && <BsCheck2All color='var(--main-color-lighter)' />}
      </StyledInfo>
    </StyledMessage>
  );
};

export default Message;
