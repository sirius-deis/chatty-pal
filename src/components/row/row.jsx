import { StyledRow } from "./row.styles";

const Row = ({ children, space, ...rest }) => {
  return (
    <StyledRow space={space} {...rest}>
      {children}
    </StyledRow>
  );
};

export default Row;
