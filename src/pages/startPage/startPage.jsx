import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { StyledStartPage, StyledStartBanner, StyledStartContent } from './startPage.styles';
import Button from '../../components/button/button';
import H1 from '../../components/h1/h1';

const StartPage = () => {
  return (
    <StyledStartPage>
      <StyledStartBanner>
        <img src={Logo} alt='logo' />
      </StyledStartBanner>
      <StyledStartContent>
        <H1>Welcome to ChattyPal</H1>
        <Button>
          <Link to='/login'>Start Messaging</Link>
        </Button>
      </StyledStartContent>
    </StyledStartPage>
  );
};

export default StartPage;
