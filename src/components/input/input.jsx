import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  font-size: 2rem;
  padding: 1.3rem 2.6rem;
  border: 1px solid var(--text-color);
  border-radius: 50px;
  background-color: transparent;
  color: ${(props) => (props.color ? `var(--${props.color})` : 'var(--text-color-darker)')};
  &:focus {
    outline: none;
    box-shadow: var(--shadow);
  }
`;

const Input = ({ type = 'text', name, placeholder }) => {
  return <StyledInput type={type} name={name} placeholder={placeholder} />;
};

export default Input;
