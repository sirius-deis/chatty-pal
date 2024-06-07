import PropTypes from "prop-types";
import { StyledPlainButton, StyledRoundedButton } from "./button.styles";

const Button = ({
  children,
  backgroundColor,
  color,
  kind,
  onClick = () => {},
  styles,
  size = "md",
}) => {
  switch (kind) {
    case "rounded":
      return (
        <StyledRoundedButton
          backgroundColor={backgroundColor}
          color={color}
          onClick={onClick}
          style={styles}
          size={size}
        >
          {children}
        </StyledRoundedButton>
      );
    case "plain":
    default:
      return (
        <StyledPlainButton
          backgroundColor={backgroundColor}
          color={color}
          onClick={onClick}
          style={styles}
          size={size}
        >
          {children}
        </StyledPlainButton>
      );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  kind: PropTypes.string,
  onClick: PropTypes.func,
  styles: PropTypes.object,
  size: PropTypes.string,
};

export default Button;
