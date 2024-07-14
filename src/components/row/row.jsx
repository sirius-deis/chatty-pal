import { StyledRow } from "./row.styles";
import PropTypes from "prop-types";

const Row = ({ children, space, ...rest }) => {
  return (
    <StyledRow space={space} {...rest}>
      {children}
    </StyledRow>
  );
};

Row.propsTypes = {
  children: PropTypes.node.isRequired,
  space: PropTypes.oneOf(["around", "between"]),
};

export default Row;
