import styled from 'styled-components';

const StyledMessage = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1.7rem;
  background-color: var(--bg-color-lighter);
  border-radius: 10px;
`;

const Message = ({ children, own }) => {
  return <StyledMessage className={own ? 'own' : ''}>{children.message}</StyledMessage>;
};

export default Message;
