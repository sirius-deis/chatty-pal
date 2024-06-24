import PropTypes from "prop-types";
import { StyledHeader } from "./header.styles";

const Header = ({ children, size, weight, color, mb, ...rest }) => {
  return (
    <StyledHeader color={color} mb={mb} size={size} weight={weight} {...rest}>
      {children}
    </StyledHeader>
  );
};

Header.propTypes = {
  size: PropTypes.number,
  weight: PropTypes.number,
  color: PropTypes.string,
  mb: PropTypes.number,
};

export default Header;
