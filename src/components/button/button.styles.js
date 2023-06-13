import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 2rem;
  background-color: ${(props) => (props.backgroundColor ? `var(--${props.backgroundColor})` : 'var(--main-color)')};
  padding: 1rem 8rem;
  border-radius: 5px;
  color: ${(props) => (props.color ? `var(--${props.color})` : 'var(--text-color-lighter)')};
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;
