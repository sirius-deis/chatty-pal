import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  font-size: 2rem;
  padding: 1.3rem 1.3rem;
  border: ${(props) => (props.border ? '1px solid var(--text-color)' : 0)};
  border-radius: ${(props) => (props.borderRounded ? '50px' : 'unset')};
  background-color: transparent;
  color: ${(props) => (props.color ? `var(--${props.color})` : 'var(--text-color-darker)')};
  &:focus {
    outline: none;
    box-shadow: ${(props) => (props.shadow ? 'var(--shadow)' : 'unset')};
  }
`;

const Input = ({
  type = 'text',
  name,
  placeholder,
  border,
  borderRounded = true,
  shadow = true,
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      border={border}
      borderRounded={borderRounded}
      shadow={shadow}
    />
  );
};

export default Input;
