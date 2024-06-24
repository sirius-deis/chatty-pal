import { Link } from "react-router-dom";
import FullPageWrapper from "../../components/fullPageWrapper/fullPageWrapper";
import { StyledError } from "./notFoundPage.styles";
import Button from "../../components/button/button";
import Header from "../../components/header/header";

const NotFoundPage = () => {
  return (
    <FullPageWrapper>
      <StyledError>
        <Header size={10} weight={500} mb={2}>
          <h1>404</h1>
        </Header>
        <Header size={4} weight={400} mb={1.5}>
          <h2>Page Not Found</h2>
        </Header>
        <p style={{ marginBottom: "2rem" }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Button size="sm">
          <Link to="/">Go to Homepage</Link>
        </Button>
      </StyledError>
    </FullPageWrapper>
  );
};

export default NotFoundPage;
