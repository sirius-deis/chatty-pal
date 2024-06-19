import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import {
  StyledStartPage,
  StyledStartBanner,
  StyledStartContent,
} from "./startPage.styles";
import Button from "../../components/button/button";
import Heading from "../../components/heading/heading";

const StartPage = () => {
  return (
    <StyledStartPage>
      <StyledStartBanner>
        <img src={Logo} alt="logo" />
      </StyledStartBanner>
      <StyledStartContent>
        <Heading>Welcome to ChattyPal</Heading>
        <Link to="/login">
          <Button size="sm">Start Messaging</Button>
        </Link>
      </StyledStartContent>
    </StyledStartPage>
  );
};

export default StartPage;
