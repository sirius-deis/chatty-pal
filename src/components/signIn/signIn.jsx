import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import { StyledSignIn } from './signIn.styles';
import Form from '../form/form';
import Input from '../input/input';
import Button from '../button/button';
import H1 from '../h1/h1';
import Row from '../row/row';
import LabelWithCheckbox from '../checkbox/checkbox';

const SignIn = () => {
  return (
    <StyledSignIn>
      <Form>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>

        <H1>Sign in</H1>
        <Input type='email' name='email' placeholder='Email *' />
        <Input type='password' name='password' placeholder='Password *' />
        <Row>
          <LabelWithCheckbox label='Remember me' />
          <Link to='/reset-password' style={{ color: 'var(--main-color)' }}>
            Reset password
          </Link>
        </Row>
        <Button>Sign In</Button>
        <div>Login with your social media account.</div>
        <Row style={{ justifyContent: 'center', gap: '2rem' }}>
          <Button kind='rounded'>
            <FaGoogle />
          </Button>
          <Button kind='rounded'>
            <FaFacebookF />
          </Button>
          <Button kind='rounded'>
            <FaTwitter />
          </Button>
        </Row>
        <div>
          Don't have an account?{' '}
          <Link to='/register' style={{ color: 'var(--main-color)' }}>
            Sign up
          </Link>
        </div>
      </Form>
    </StyledSignIn>
  );
};

export default SignIn;
