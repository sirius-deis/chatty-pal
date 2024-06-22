import PropTypes from "prop-types";
import { StyledHeading } from "./heading.styles";

const Heading = ({ children, size, weight, color, mb, ...rest }) => {
  return (
    <StyledHeading size={size} weight={weight} color={color} mb={mb} {...rest}>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  size: PropTypes.number,
  weight: PropTypes.number,
  color: PropTypes.string,
  mb: PropTypes.number,
};

export default Heading;
