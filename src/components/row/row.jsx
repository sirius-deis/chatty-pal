import { StyledRow } from "./row.styles";

const Row = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};

export default Row;
