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
  &::placeholder {
    color: var(--text-color);
    opacity: 1;
  }
`;

const Input = ({
  type = 'text',
  name,
  placeholder,
  border,
  borderRounded = true,
  shadow = true,
  onChangeHandler = () => {},
  value,
}) => {
  const onChange = (event) => {
    onChangeHandler(event.target.value);
  };
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      border={border}
      borderRounded={borderRounded}
      shadow={shadow}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
