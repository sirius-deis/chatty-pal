import PropTypes from "prop-types";
import { StyledError } from "./error.styles";

const Error = ({ children, fSize }) => {
  return <StyledError fSize={fSize}>{children}</StyledError>;
};

Error.propTypes = {
  children: PropTypes.node.isRequired,
  fSize: PropTypes.number,
};

export default Error;
