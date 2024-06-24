import { Link } from "react-router-dom";
import FullPageWrapper from "../../components/fullPageWrapper/fullPageWrapper";
import Logo from "../../assets/images/logo.png";
import { StyledStartBanner, StyledStartContent } from "./startPage.styles";
import Button from "../../components/button/button";
import Header from "../../components/header/header";

const StartPage = () => {
  return (
    <FullPageWrapper dir="col" gap="2rem">
      <StyledStartBanner>
        <img src={Logo} alt="logo" />
      </StyledStartBanner>
      <StyledStartContent>
        <Header>
          <h1>Welcome to ChattyPal</h1>
        </Header>
        <Link to="/login">
          <Button size="sm">Start Messaging</Button>
        </Link>
      </StyledStartContent>
    </FullPageWrapper>
  );
};

export default StartPage;
