import { Link } from "react-router-dom";
import FullPageWrapper from "../../components/fullPageWrapper/fullPageWrapper";
import { StyledError } from "./notFoundPage.styles";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/heading";

const NotFoundPage = () => {
  return (
    <FullPageWrapper>
      <StyledError>
        <Heading size={10}>404</Heading>
        <Heading size={4}>Page Not Found</Heading>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Button size="sm">
          <Link to="/">Go to Homepage</Link>
        </Button>
      </StyledError>
    </FullPageWrapper>
  );
};

export default NotFoundPage;
