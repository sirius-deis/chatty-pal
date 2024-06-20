import PropTypes from "prop-types";
import { StyledHeading } from "./heading.styles";

const Heading = ({ children, ...rest }) => {
  return <StyledHeading {...rest}>{children}</StyledHeading>;
};

Heading.propTypes = {
  size: PropTypes.number,
  weight: PropTypes.number,
  color: PropTypes.string,
  mb: PropTypes.number,
};

export default Heading;
