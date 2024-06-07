import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  width: 100%;
  font-size: 2rem;
  padding: 1.3rem 1.3rem;
  border: ${(props) => (props.border ? "1px solid var(--text-color)" : 0)};
  border-radius: ${(props) => (props.borderRounded ? "50px" : "unset")};
  background-color: transparent;
  color: ${(props) =>
    props.color ? `var(--${props.color})` : "var(--text-color-darker)"};
  &:focus {
    outline: none;
    box-shadow: ${(props) => (props.shadow ? "var(--shadow)" : "unset")};
  }
  &::placeholder {
    color: var(--text-color);
    opacity: 1;
  }
`;

const Input = ({
  name,
  border,
  borderRounded = true,
  shadow = true,
  ...rest
}) => {
  return (
    <StyledInput
      name={name}
      border={border}
      borderRounded={borderRounded}
      shadow={shadow}
      {...rest}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  border: PropTypes.bool,
  borderRounded: PropTypes.bool,
  shadow: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
