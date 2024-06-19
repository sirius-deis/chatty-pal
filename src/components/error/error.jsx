import PropTypes from "prop-types";
import { StyledError } from "./error.styles";

const Error = ({ children }) => {
  return <StyledError>{children}</StyledError>;
};

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Error;
