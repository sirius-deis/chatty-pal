import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { StyledSignUp } from './signUp.styles';
import Form from '../form/form';
import Input from '../input/input';
import Button from '../button/button';
import H1 from '../h1/h1';

const SignUp = () => {
  return (
    <StyledSignUp>
      <Form>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        <H1>Sign up</H1>
        <Input type='text' name='firstName' placeholder='First name *' />
        <Input type='text' name='lastName' placeholder='Lat name *' />
        <Input type='email' name='email' placeholder='Email *' />
        <Input type='password' name='password' placeholder='Password *' />
        <Button>Sign Up</Button>
        <div>
          Already have an account?{' '}
          <Link to='/login' style={{ color: 'var(--main-color)' }}>
            Sign in
          </Link>
        </div>
      </Form>
    </StyledSignUp>
  );
};

export default SignUp;
