import styled from 'styled-components';
import Message from '../message/message';
import React from 'react';

const StyledMessageGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 0.4rem;
  &.own {
    align-items: flex-end;
  }
`;

const MessageGroup = ({ children, userId }) => {
  const isOwn = children[0].senderId === userId;
  return (
    <StyledMessageGroup className={isOwn ? 'own' : ''}>
      {children.map((child, i) => (
        <Message isLast={i === children.length - 1} isOwn={isOwn}>
          {child}
        </Message>
      ))}
    </StyledMessageGroup>
  );
};

export default MessageGroup;
