import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { StyledStartPage, StyledStartBanner, StyledStartContent } from './startPage.styles';
import Button from '../../components/button/button';

const StartPage = () => {
  return (
    <StyledStartPage>
      <StyledStartBanner>
        <img src={Logo} alt='logo' />
      </StyledStartBanner>
      <StyledStartContent>
        <h1>Welcome to ChattyPal</h1>
        <Button>
          <Link to='/login'>Start Messaging</Link>
        </Button>
      </StyledStartContent>
    </StyledStartPage>
  );
};

export default StartPage;
