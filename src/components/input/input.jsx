import PropTypes from "prop-types";
import { StyledInput } from "./input.styles";

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
