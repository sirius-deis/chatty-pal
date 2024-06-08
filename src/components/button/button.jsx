import PropTypes from "prop-types";
import { StyledPlainButton, StyledRoundedButton } from "./button.styles";

const getButtonByType = (type) => {
  switch (type) {
    case "rounded":
      return StyledRoundedButton;
    case "plain":
    default:
      return StyledPlainButton;
  }
};

const Button = ({
  children,
  backgroundColor = "default",
  type,
  size = "md",
  ...rest
}) => {
  const SelectedButton = getButtonByType(type);
  return (
    <SelectedButton bgColor={backgroundColor} size={size} {...rest}>
      {children}
    </SelectedButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
