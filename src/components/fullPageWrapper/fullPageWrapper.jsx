import { StyledFullPageWrapper } from "./fullPageWrapper.styles";

const FullPageWrapper = ({ children, ...rest }) => {
  return <StyledFullPageWrapper {...rest}>{children}</StyledFullPageWrapper>;
};

export default FullPageWrapper;
