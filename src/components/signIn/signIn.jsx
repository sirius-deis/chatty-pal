import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/images/logo.png';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import { StyledSignIn } from './signIn.styles';
import Form from '../form/form';
import Input from '../input/input';
import Button from '../button/button';
import H1 from '../h1/h1';
import Row from '../row/row';
import LabelWithCheckbox from '../checkbox/checkbox';
import { signIn } from '../../store/user/user.actions';

//TODO: add error checking
const SignIn = () => {
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    dispatch(signIn({ email: email.value, password: password.value }));
  };
  return (
    <StyledSignIn>
      <Form onSubmit={onSubmit}>
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
