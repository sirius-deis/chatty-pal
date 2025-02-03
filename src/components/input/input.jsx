import PropTypes from "prop-types";
import { StyledInput } from "./input.styles";

const Input = ({
  name,
  border,
  borderRounded = true,
  shadow = true,
  value,
  placeholder,
  type = "text",
  onChange,
  ...rest
}) => {
  return (
    <StyledInput
      name={name}
      border={border}
      borderRounded={borderRounded}
      shadow={shadow}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={(e) => onChange(e.target.value, e.target.name)}
      {...rest}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  border: PropTypes.bool,
  borderRounded: PropTypes.bool,
  shadow: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
